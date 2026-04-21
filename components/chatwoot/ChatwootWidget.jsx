'use client'; // Bắt buộc phải có dòng này để Next.js biết đây là code chạy trên trình duyệt

import { useEffect } from 'react';

const ChatwootWidget = () => {
  useEffect(() => {
    // Thêm cấu hình phụ cho Chatwoot (Tùy chọn)
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // Vị trí bong bóng chat: 'left' hoặc 'right'
      locale: 'vi', // Ép ngôn ngữ tiếng Việt
      type: 'standard', // Kiểu hiển thị
    };

    // Đoạn mã nhúng của anh (đã sửa lại BASE_URL)
    (function(d,t) {
      var BASE_URL="http://127.0.0.1:3000"; 
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'Wnxb5RLvdtRKi5aM46vcdSqk',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  }, []); // [] đảm bảo mã này chỉ chạy 1 lần duy nhất khi web load xong

  return null; // Component này chạy ngầm, không render ra giao diện gì cả
};

export default ChatwootWidget;