'use client';
import Script from 'next/script';

const ChatwootWidget = () => {
  return (
    <Script
      id="chatwoot-sdk"
      src="https://85ab-171-231-185-165.ngrok-free.app/packs/js/sdk.js"
      strategy="lazyOnload"
      onLoad={() => {
        // Sau khi file sdk.js tải xong, Next.js sẽ tự động chạy đoạn này
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: 'HQMNMoF5E6D3kbJ4KhfkvfgT',
            baseUrl: 'https://85ab-171-231-185-165.ngrok-free.app'
          });
        }
      }}
    />
  );
};

export default ChatwootWidget;