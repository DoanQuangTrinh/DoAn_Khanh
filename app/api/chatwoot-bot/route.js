import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const payload = await req.json();

        // 1. Bộ lọc: Chỉ nhặt những tin nhắn do KHÁCH HÀNG gửi (incoming)
        // Nếu không có bộ lọc này, Bot sẽ tự trả lời chính nó tạo thành vòng lặp vô tận
        if (payload.event === 'message_created' && payload.message_type === 'incoming') {
            const userMessage = payload.content;
            const conversationId = payload.conversation.id;
            const accountId = payload.account.id;

            // 2. Giao việc cho AI (Gemini / OpenAI / Claude)
            const aiResponse = await generateAIResponse(userMessage);

            // 3. Gửi câu trả lời của AI ngược lại Chatwoot
            // Dùng 127.0.0.1 vì Next.js và Chatwoot đang nằm chung trên 1 máy tính của anh
            const chatwootApiUrl = `http://127.0.0.1:3000/api/v1/accounts/${accountId}/conversations/${conversationId}/messages`;

            // MÃ BÍ MẬT CỦA CON BOT (Lấy ở hướng dẫn phía dưới)
            const BOT_ACCESS_TOKEN = 'kQZRDPMtY5iTY82EgJBHKNtS';

            await fetch(chatwootApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api_access_token': BOT_ACCESS_TOKEN
                },
                body: JSON.stringify({
                    content: aiResponse
                })
            });
        }

        // Luôn trả về 200 OK thật nhanh để Chatwoot biết Webhook đã đến nơi
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Lỗi xử lý Webhook Chatwoot:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// ==========================================
// HÀM MÔ PHỎNG NÃO BỘ CỦA AI (Nơi gọi API LLM)
// ==========================================
async function generateAIResponse(message) {
    // Ở đây anh sẽ viết logic fetch() gọi API của OpenAI hoặc Gemini.
    // Tạm thời em để một câu trả lời tĩnh để anh test luồng dữ liệu trước:

    return `Dạ, HwangSan Salon đã nhận được tin nhắn: "${message}". Hiện tại não bộ LLM đang được anh Trinh lập trình, anh/chị chờ chút nhé!`;
}