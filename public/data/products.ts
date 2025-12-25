import { details } from "framer-motion/client";

export const listProducts = [
  {
    id: 1,
    title: "Robot Từ Hộp Sữa",
    description:
      "Khóa học 120 phút dành cho trẻ từ 5-12 tuổi, hướng dẫn các bé biến vỏ hộp sữa thành robot mini có khớp xoay, giúp hình thành tư duy thiết kế, rèn luyện kỹ năng thủ công, và khám phá các khái niệm khoa học nền tảng như trực, khớp, ma sát.",
    tabs: {
      noiDung:
        "Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học về...",
      ketQua:
        "Trẻ phân biệt được truyền sáng, phản xạ và khuếch tán. Trẻ hiểu vai trò của chất liệu trong việc điều tiết ánh sáng, rèn tính tỉ mỉ và tư duy bố cục. Ý thức về môi trường được củng cố khi một chai nhựa cũ được tái sinh thành đồ vật hữu ích.",
    },
    align: "right",
    bgColor: "bg-[#E5E6D8]",
    buttonText: "Xem chi tiết",
    testimonials: [
      {
        name: "Anh Quang Huy",
        title: "Phụ huynh (quận Hải Châu)",
        quote:
          "Con tôi mang về món đồ chơi đâu tay từ chai nhựa và kể rất chi tiết cách làm. Tôi thấy con chủ động, tập trung hơn hẳn.",
        rating: 4,
      },
      {
        name: "Cô Thu Hà",
        title: "Giáo viên chủ nhiệm",
        quote:
          "Buổi học rõ ràng, an toàn, có quy trình. Học sinh hào hứng mà giáo viên cũng dễ tích hợp vào tiết kỹ năng sống.",
        rating: 4,
      },
      {
        name: "Bé Gia Khang",
        title: "Học sinh lớp 4",
        quote:
          "Em thích nhất phần lắp ghép robot nắp chai. Về nhà em còn làm thêm một cái nữa để tặng em trai.",
        rating: 5,
      },
      {
        name: "Chị Ngọc Ánh",
        title: "Phụ huynh (quận Sơn Trà)",
        quote:
          "Con tôi vẫn nhút nhát, nhưng khi tự tay hoàn thiện món đồ chơi, bé tự tin khoe trước lớp. Đó là thay đổi tôi mong đợi.",
        rating: 5,
      },
    ],
    details: {
      title: "Robot Từ Hộp Sữa",
      description_details:
        "Trong buổi học, trẻ sẽ được hướng dẫn biến vỏ hộp sữa quen thuộc thành một robot mini có khớp xoay hoạt động mượt mà. Hành trình đi từ ý tưởng đến sản phẩm giúp trẻ hiểu cơ học nền tảng, làm chủ thao tác thủ công chính xác và thể hiện cá tính qua trang trí cũng phần kể chuyện về nhân vật robot do chính mình tạo ra.",
      images: [
        {
          id: 1,
          url: "/product/IMG_8166.JPG",
          thumbnailUrl: "/product/IMG_8166.JPG",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "/product1/rb2.jpeg",
          thumbnailUrl: "/product1/rb2.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "/product/IMG_8170.JPG",
          thumbnailUrl: "/product/IMG_8170.JPG",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "/product1/rb1.jpg",
          thumbnailUrl: "/product1/rb1.jpg",
          alt: "Robot từ hộp sữa - Ảnh 4",
        },
      ],
      details: [
        { label: "Thời gian", value: "120 phút" },
        {
          label: "Lịch học",
          value: "Thứ 7 và Chủ Nhật hàng tuần\n09:00, 14:30 và 18:30",
        },
        { label: "Độ tuổi", value: "5 - 12 tuổi" },
        { label: "Sĩ số", value: "15 - 20 bé" },
      ],
      price: "160.000đ - 170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
        "Bạn sẽ đem theo các nguyên vật liệu mà greenkids đã thông báo.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product/IMG_8166.JPG",
  },

  {
    id: 5,
    title: "Vườn Thú Mini Từ Khay Trứng",
    description:
      "Tận dụng những chiếc khay trứng giấy quen thuộc, các bé sẽ được hướng dẫn để 'phù phép' từng ô trứng thành những gương mặt con thú đáng yêu như: Sư tử, Gấu trúc, Voi, Rùa, Bọ cánh cứng... Bé sẽ học kỹ năng pha màu, nặn đất sét để tạo chi tiết (tai, mắt, mũi) và tư duy sắp xếp bố cục để tạo nên một mô hình sở thú (Zoo) hoành tráng trang trí góc học tập.",
    tabs: {
      noiDung:
        "Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học về...",
      ketQua:
        "Tận dụng những chiếc khay trứng giấy quen thuộc, các bé sẽ được hướng dẫn để 'phù phép' từng ô trứng thành những gương mặt con thú đáng yêu như: Sư tử, Gấu trúc, Voi, Rùa, Bọ cánh cứng... Bé sẽ học kỹ năng pha màu, nặn đất sét để tạo chi tiết (tai, mắt, mũi) và tư duy sắp xếp bố cục để tạo nên một mô hình sở thú (Zoo) hoành tráng trang trí góc học tập.",
    },
    align: "right",
    bgColor: "bg-[#E5E6D8]",
    buttonText: "Xem chi tiết",
    testimonials: [
      {
        name: "Anh Quang Huy",
        title: "Phụ huynh (quận Hải Châu)",
        quote:
          "Con tôi mang về món đồ chơi đâu tay từ chai nhựa và kể rất chi tiết cách làm. Tôi thấy con chủ động, tập trung hơn hẳn.",
        rating: 4,
      },
      {
        name: "Cô Thu Hà",
        title: "Giáo viên chủ nhiệm",
        quote:
          "Buổi học rõ ràng, an toàn, có quy trình. Học sinh hào hứng mà giáo viên cũng dễ tích hợp vào tiết kỹ năng sống.",
        rating: 4,
      },
      {
        name: "Bé Gia Khang",
        title: "Học sinh lớp 4",
        quote:
          "Em thích nhất phần lắp ghép robot nắp chai. Về nhà em còn làm thêm một cái nữa để tặng em trai.",
        rating: 5,
      },
      {
        name: "Chị Ngọc Ánh",
        title: "Phụ huynh (quận Sơn Trà)",
        quote:
          "Con tôi vẫn nhút nhát, nhưng khi tự tay hoàn thiện món đồ chơi, bé tự tin khoe trước lớp. Đó là thay đổi tôi mong đợi.",
        rating: 5,
      },
    ],
    details: {
      title: "Chậu Cây Mini Tái Chế",
      description_details:
        "Trong buổi học, trẻ sẽ được hướng dẫn biến vỏ hộp sữa quen thuộc thành một robot mini có khớp xoay hoạt động mượt mà. Hành trình đi từ ý tưởng đến sản phẩm giúp trẻ hiểu cơ học nền tảng, làm chủ thao tác thủ công chính xác và thể hiện cá tính qua trang trí cũng phần kể chuyện về nhân vật robot do chính mình tạo ra.",
      images: [
        {
          id: 1,
          url: "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766625534/1766625369_CAMSJDJiYj-ZjE2ZjY2YQ_mbiqw9.jpg",
          thumbnailUrl:
            "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766625534/1766625369_CAMSJDJiYj-ZjE2ZjY2YQ_mbiqw9.jpg",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766625534/1766625369_CAMSJDJiYj-M2RmNjZjNQ_mjoqta.jpg",
          thumbnailUrl:
            "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766625534/1766625369_CAMSJDJiYj-M2RmNjZjNQ_mjoqta.jpg",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766625534/1766625369_CAMSJDJiYj-M2RmNjZjNQ_mjoqta.jpg",
          thumbnailUrl:
            "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766625534/1766625369_CAMSJDJiYj-M2RmNjZjNQ_mjoqta.jpg",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766625534/1766625369_CAMSJDJiYj-M2RmNjZjNQ_mjoqta.jpg",
          thumbnailUrl:
            "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766625534/1766625369_CAMSJDJiYj-M2RmNjZjNQ_mjoqta.jpg",
          alt: "Robot từ hộp sữa - Ảnh 4",
        },
      ],
      details: [
        { label: "Thời gian", value: "120 phút" },
        {
          label: "Lịch học",
          value: "Thứ 7 và Chủ Nhật hàng tuần\n09:00, 14:30 và 18:30",
        },
        { label: "Độ tuổi", value: "5 - 12 tuổi" },
        { label: "Sĩ số", value: "15 - 20 bé" },
      ],
      price: "160.000đ - 170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
        "Bạn sẽ đem theo các nguyên vật liệu mà greenkids đã thông báo."
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product1/KEMStudio-00341.jpg",
  },
  {
    id: 6,
    title: "Mobile Xoắn Ốc Cầu Vồng",
    description:
      "Một buổi học đầy màu sắc! Các bé sẽ biến những chiếc lọ nhỏ vô tri thành một tác phẩm nghệ thuật sắp đặt. Bé sẽ được tự tay sơn vẽ các họa tiết (chấm bi, kẻ sọc, hình sao...) lên từng lọ, sau đó học cách buộc dây và sắp xếp chúng theo quy luật xoắn ốc (DNA) để tạo ra hiệu ứng chuyển động đẹp mắt khi có gió thổi. Sản phẩm vừa là vật trang trí phòng, vừa là chuông gió leng keng vui tai.",
    tabs: {
      noiDung:
        "Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học về...",
      ketQua:
        "Tận dụng những chiếc khay trứng giấy quen thuộc, các bé sẽ được hướng dẫn để 'phù phép' từng ô trứng thành những gương mặt con thú đáng yêu như: Sư tử, Gấu trúc, Voi, Rùa, Bọ cánh cứng... Bé sẽ học kỹ năng pha màu, nặn đất sét để tạo chi tiết (tai, mắt, mũi) và tư duy sắp xếp bố cục để tạo nên một mô hình sở thú (Zoo) hoành tráng trang trí góc học tập.",
    },
    align: "left",
    bgColor: "bg-[#E5E6D8]",
    buttonText: "Xem chi tiết",
    testimonials: [
      {
        name: "Anh Quang Huy",
        title: "Phụ huynh (quận Hải Châu)",
        quote:
          "Con tôi mang về món đồ chơi đâu tay từ chai nhựa và kể rất chi tiết cách làm. Tôi thấy con chủ động, tập trung hơn hẳn.",
        rating: 4,
      },
      {
        name: "Cô Thu Hà",
        title: "Giáo viên chủ nhiệm",
        quote:
          "Buổi học rõ ràng, an toàn, có quy trình. Học sinh hào hứng mà giáo viên cũng dễ tích hợp vào tiết kỹ năng sống.",
        rating: 4,
      },
      {
        name: "Bé Gia Khang",
        title: "Học sinh lớp 4",
        quote:
          "Em thích nhất phần lắp ghép robot nắp chai. Về nhà em còn làm thêm một cái nữa để tặng em trai.",
        rating: 5,
      },
      {
        name: "Chị Ngọc Ánh",
        title: "Phụ huynh (quận Sơn Trà)",
        quote:
          "Con tôi vẫn nhút nhát, nhưng khi tự tay hoàn thiện món đồ chơi, bé tự tin khoe trước lớp. Đó là thay đổi tôi mong đợi.",
        rating: 5,
      },
    ],
    details: {
      title: "Chậu Cây Mini Tái Chế",
      description_details:
        "Trong buổi học, trẻ sẽ được hướng dẫn biến vỏ hộp sữa quen thuộc thành một robot mini có khớp xoay hoạt động mượt mà. Hành trình đi từ ý tưởng đến sản phẩm giúp trẻ hiểu cơ học nền tảng, làm chủ thao tác thủ công chính xác và thể hiện cá tính qua trang trí cũng phần kể chuyện về nhân vật robot do chính mình tạo ra.",
      images: [
        {
          id: 1,
          url: "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766632623/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12_o1hqad.jpg",
          thumbnailUrl:
            "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766632623/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12_o1hqad.jpg",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766632623/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12_o1hqad.jpg",
          thumbnailUrl:
            "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766632623/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12_o1hqad.jpg",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766632623/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12_o1hqad.jpgs",
          thumbnailUrl:
            "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766632623/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12_o1hqad.jpgs",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766632623/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12_o1hqad.jpg",
          thumbnailUrl:
            "https://res.cloudinary.com/dfdt1tqts/image/upload/v1766632623/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12_o1hqad.jpg",
          alt: "Robot từ hộp sữa - Ảnh 4",
        },
      ],
      details: [
        { label: "Thời gian", value: "120 phút" },
        {
          label: "Lịch học",
          value: "Thứ 7 và Chủ Nhật hàng tuần\n09:00, 14:30 và 18:30",
        },
        { label: "Độ tuổi", value: "5 - 12 tuổi" },
        { label: "Sĩ số", value: "15 - 20 bé" },
      ],
      price: "160.000đ - 170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
        "Bạn sẽ đem theo các nguyên vật liệu mà greenkids đã thông báo."
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product1/temp_image_1013BA9B-A4E6-4244-AE0A-8D16B4213B12.webp",
  },
  {
    id: 7,
    title: "Đèn Lồng Đu Quay Tái Chế",
    description:
      "Trong buổi học, các bé sẽ khám phá các khái niệm về kiến trúc và cơ học cơ bản khi lắp ráp mô hình đu quay. Trẻ sẽ học cách cắt, dán và trang trí mái vòm, sàn đu quay theo phong cách lễ hội (vàng - đỏ - xanh). Điểm nhấn là việc lắp đặt hệ thống đèn LED nhỏ bên trong chai nhựa để tạo ra chiếc đèn lồng độc đáo, lấp lánh, giúp trẻ rèn luyện tính tỉ mỉ và kiên nhẫn.",
    tabs: {
      noiDung:
        "Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học về...",
      ketQua:
        "Tận dụng những chiếc khay trứng giấy quen thuộc, các bé sẽ được hướng dẫn để 'phù phép' từng ô trứng thành những gương mặt con thú đáng yêu như: Sư tử, Gấu trúc, Voi, Rùa, Bọ cánh cứng... Bé sẽ học kỹ năng pha màu, nặn đất sét để tạo chi tiết (tai, mắt, mũi) và tư duy sắp xếp bố cục để tạo nên một mô hình sở thú (Zoo) hoành tráng trang trí góc học tập.",
    },
    align: "right",
    bgColor: "bg-[#E5E6D8]",
    buttonText: "Xem chi tiết",
    testimonials: [
      {
        name: "Anh Quang Huy",
        title: "Phụ huynh (quận Hải Châu)",
        quote:
          "Con tôi mang về món đồ chơi đâu tay từ chai nhựa và kể rất chi tiết cách làm. Tôi thấy con chủ động, tập trung hơn hẳn.",
        rating: 4,
      },
      {
        name: "Cô Thu Hà",
        title: "Giáo viên chủ nhiệm",
        quote:
          "Buổi học rõ ràng, an toàn, có quy trình. Học sinh hào hứng mà giáo viên cũng dễ tích hợp vào tiết kỹ năng sống.",
        rating: 4,
      },
      {
        name: "Bé Gia Khang",
        title: "Học sinh lớp 4",
        quote:
          "Em thích nhất phần lắp ghép robot nắp chai. Về nhà em còn làm thêm một cái nữa để tặng em trai.",
        rating: 5,
      },
      {
        name: "Chị Ngọc Ánh",
        title: "Phụ huynh (quận Sơn Trà)",
        quote:
          "Con tôi vẫn nhút nhát, nhưng khi tự tay hoàn thiện món đồ chơi, bé tự tin khoe trước lớp. Đó là thay đổi tôi mong đợi.",
        rating: 5,
      },
    ],
    details: {
      title: "Chậu Cây Mini Tái Chế",
      description_details:
        "Trong buổi học, trẻ sẽ được hướng dẫn biến vỏ hộp sữa quen thuộc thành một robot mini có khớp xoay hoạt động mượt mà. Hành trình đi từ ý tưởng đến sản phẩm giúp trẻ hiểu cơ học nền tảng, làm chủ thao tác thủ công chính xác và thể hiện cá tính qua trang trí cũng phần kể chuyện về nhân vật robot do chính mình tạo ra.",
      images: [
        {
          id: 1,
          url: "https://i.ytimg.com/vi/KcDWxMm1cxs/maxresdefault.jpg",
          thumbnailUrl:
            "https://i.ytimg.com/vi/KcDWxMm1cxs/maxresdefault.jpg",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "https://static.hotdeal.vn/images/722/722338/400x400/153517-bo-38-buom-3d-tranh-tri-xinh-xan.jpg",
          thumbnailUrl:
            "https://ai.chotnhanh.vn/download/media/users/trinhdev74d1/images/1764778033_CAMSJDkyN2-MjYwOWI5OA.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "https://i.ytimg.com/vi/KcDWxMm1cxs/maxresdefault.jpg",
          thumbnailUrl:
            "https://i.ytimg.com/vi/KcDWxMm1cxs/maxresdefault.jpg",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "https://ai.chotnhanh.vn/download/media/users/trinhdev74d1/images/1764778033_CAMSJDkyN2-MjYwOWI5OA.jpeg",
          thumbnailUrl:
            "https://ai.chotnhanh.vn/download/media/users/trinhdev74d1/images/1764778033_CAMSJDkyN2-MjYwOWI5OA.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 4",
        },
      ],
      details: [
        { label: "Thời gian", value: "120 phút" },
        {
          label: "Lịch học",
          value: "Thứ 7 và Chủ Nhật hàng tuần\n09:00, 14:30 và 18:30",
        },
        { label: "Độ tuổi", value: "5 - 12 tuổi" },
        { label: "Sĩ số", value: "15 - 20 bé" },
      ],
      price: "160.000đ - 170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
        "Bạn sẽ đem theo các nguyên vật liệu mà greenkids đã thông báo."
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product1/Screenshot 2025-12-03 230946.png",
  },
  {
    id: 8,
    title: "Tranh Bướm Đắp Nổi 3D",
    description:
      "Trong buổi học, các bé sẽ khám phá các khái niệm về kiến trúc và cơ học cơ bản khi lắp ráp mô hình đu quay. Trẻ sẽ học cách cắt, dán và trang trí mái vòm, sàn đu quay theo phong cách lễ hội (vàng - đỏ - xanh). Điểm nhấn là việc lắp đặt hệ thống đèn LED nhỏ bên trong chai nhựa để tạo ra chiếc đèn lồng độc đáo, lấp lánh, giúp trẻ rèn luyện tính tỉ mỉ và kiên nhẫn.",
    tabs: {
      noiDung:
        "Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học về...",
      ketQua:
        "Tận dụng những chiếc khay trứng giấy quen thuộc, các bé sẽ được hướng dẫn để 'phù phép' từng ô trứng thành những gương mặt con thú đáng yêu như: Sư tử, Gấu trúc, Voi, Rùa, Bọ cánh cứng... Bé sẽ học kỹ năng pha màu, nặn đất sét để tạo chi tiết (tai, mắt, mũi) và tư duy sắp xếp bố cục để tạo nên một mô hình sở thú (Zoo) hoành tráng trang trí góc học tập.",
    },
    align: "left",
    bgColor: "bg-[#E5E6D8]",
    buttonText: "Xem chi tiết",
    testimonials: [
      {
        name: "Anh Quang Huy",
        title: "Phụ huynh (quận Hải Châu)",
        quote:
          "Con tôi mang về món đồ chơi đâu tay từ chai nhựa và kể rất chi tiết cách làm. Tôi thấy con chủ động, tập trung hơn hẳn.",
        rating: 4,
      },
      {
        name: "Cô Thu Hà",
        title: "Giáo viên chủ nhiệm",
        quote:
          "Buổi học rõ ràng, an toàn, có quy trình. Học sinh hào hứng mà giáo viên cũng dễ tích hợp vào tiết kỹ năng sống.",
        rating: 4,
      },
      {
        name: "Bé Gia Khang",
        title: "Học sinh lớp 4",
        quote:
          "Em thích nhất phần lắp ghép robot nắp chai. Về nhà em còn làm thêm một cái nữa để tặng em trai.",
        rating: 5,
      },
      {
        name: "Chị Ngọc Ánh",
        title: "Phụ huynh (quận Sơn Trà)",
        quote:
          "Con tôi vẫn nhút nhát, nhưng khi tự tay hoàn thiện món đồ chơi, bé tự tin khoe trước lớp. Đó là thay đổi tôi mong đợi.",
        rating: 5,
      },
    ],
    details: {
      title: "Chậu Cây Mini Tái Chế",
      description_details:
        "Trong buổi học, trẻ sẽ được hướng dẫn biến vỏ hộp sữa quen thuộc thành một robot mini có khớp xoay hoạt động mượt mà. Hành trình đi từ ý tưởng đến sản phẩm giúp trẻ hiểu cơ học nền tảng, làm chủ thao tác thủ công chính xác và thể hiện cá tính qua trang trí cũng phần kể chuyện về nhân vật robot do chính mình tạo ra.",
      images: [
        {
          id: 1,
          url: "https://hd1.hotdeal.vn/images/uploads/2015/06/26/153517/153517_buom3d_body%20%2810%29.jpg",
          thumbnailUrl:
            "https://hd1.hotdeal.vn/images/uploads/2015/06/26/153517/153517_buom3d_body%20%2810%29.jpg",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "https://static.hotdeal.vn/images/722/722338/400x400/153517-bo-38-buom-3d-tranh-tri-xinh-xan.jpg",
          thumbnailUrl:
            "https://static.hotdeal.vn/images/722/722338/400x400/153517-bo-38-buom-3d-tranh-tri-xinh-xan.jpg",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "https://hd1.hotdeal.vn/images/uploads/2015/06/26/153517/153517_buom3d_body%20%2810%29.jpg",
          thumbnailUrl:
            "https://hd1.hotdeal.vn/images/uploads/2015/06/26/153517/153517_buom3d_body%20%2810%29.jpg",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "https://static.hotdeal.vn/images/722/722338/400x400/153517-bo-38-buom-3d-tranh-tri-xinh-xan.jpg",
          thumbnailUrl:
            "https://static.hotdeal.vn/images/722/722338/400x400/153517-bo-38-buom-3d-tranh-tri-xinh-xan.jpg",
          alt: "Robot từ hộp sữa - Ảnh 4",
        },
      ],
      details: [
        { label: "Thời gian", value: "120 phút" },
        {
          label: "Lịch học",
          value: "Thứ 7 và Chủ Nhật hàng tuần\n09:00, 14:30 và 18:30",
        },
        { label: "Độ tuổi", value: "5 - 12 tuổi" },
        { label: "Sĩ số", value: "15 - 20 bé" },
      ],
      price: "160.000đ - 170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
        "Bạn sẽ đem theo các nguyên vật liệu mà greenkids đã thông báo."
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product1/IMG_8300.PNG",
  },
];
