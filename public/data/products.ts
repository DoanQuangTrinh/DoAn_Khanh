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
          thumbnailUrl:
            "/product1/rb1.jpg",
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
        { label: "Sĩ số", value: "10 - 12 bé" },
      ],
      price: "170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product/IMG_8166.JPG",
  },
  {
    id: 3,
    title: "Xe Đua Nắp Chai",
    description:
      "Workshop mini tạo xe đua từ nắp chai, que kem và ống hút. Thử thách tốc độ trên đường đua tự tạo.",
    tabs: {
      noiDung:
        "Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học về...",
      ketQua:
        "Trẻ phân biệt được truyền sáng, phản xạ và khuếch tán. Trẻ hiểu vai trò của chất liệu trong việc điều tiết ánh sáng, rèn tính tỉ mỉ và tư duy bố cục. Ý thức về môi trường được củng cố khi một chai nhựa cũ được tái sinh thành đồ vật hữu ích.",
    },
    align: "left", // Khối text nằm bên phải
    bgColor: "bg-[#E5E6D8]", // Màu nền từ ảnh
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
      title: "Xe Đua Nắp Chai",
      description_details:
        "Trong buổi học, trẻ sẽ được hướng dẫn biến vỏ hộp sữa quen thuộc thành một robot mini có khớp xoay hoạt động mượt mà. Hành trình đi từ ý tưởng đến sản phẩm giúp trẻ hiểu cơ học nền tảng, làm chủ thao tác thủ công chính xác và thể hiện cá tính qua trang trí cũng phần kể chuyện về nhân vật robot do chính mình tạo ra.",
      images: [
        {
          id: 1,
          url: "/product1/xd1.jpeg",
          thumbnailUrl:
            "/product1/xd1.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "/product1/xd1.jpeg",
          thumbnailUrl:
            "/product1/xd1.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "/product1/xd1.jpeg",
          thumbnailUrl:
            "/product1/xd1.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "/product1/xd1.jpeg",
          thumbnailUrl:
            "/product1/xd1.jpeg",
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
        { label: "Sĩ số", value: "10 - 12 bé" },
      ],
      price: "170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product1/xd1.jpeg",
  },
  {
    id: 2,
    title: "Đèn Lồng Từ Chai PET",
    description:
      "Hướng dẫn trẻ chế tác đèn lồng bền đẹp, an toàn từ chai nhựa cũ với nguồn sáng LED, giúp trẻ hiểu về truyền sáng, khuếch tán ánh sáng và vai trò của chất liệu trong điều tiết ánh sáng, đồng thời rèn luyện tư duy bố cục, tính tỉ mỉ và ý thức tái chế.",
    tabs: {
      noiDung:
        "Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học về...",
      ketQua:
        "Trẻ phân biệt được truyền sáng, phản xạ và khuếch tán. Trẻ hiểu vai trò của chất liệu trong việc điều tiết ánh sáng, rèn tính tỉ mỉ và tư duy bố cục. Ý thức về môi trường được củng cố khi một chai nhựa cũ được tái sinh thành đồ vật hữu ích.",
    },
    align: "right", // Khối text nằm bên phải
    bgColor: "bg-[#E5E6D8]", // Màu nền từ ảnh
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
      title: "Đèn Lồng Từ Chai PET",
      description_details:
        "Trong buổi học, trẻ sẽ được hướng dẫn biến vỏ hộp sữa quen thuộc thành một robot mini có khớp xoay hoạt động mượt mà. Hành trình đi từ ý tưởng đến sản phẩm giúp trẻ hiểu cơ học nền tảng, làm chủ thao tác thủ công chính xác và thể hiện cá tính qua trang trí cũng phần kể chuyện về nhân vật robot do chính mình tạo ra.",
      images: [
        {
          id: 1,
          url: "/product1/5ce100884de0726a699e870860e8a1de.jpeg",
          thumbnailUrl:
            "/product1/5ce100884de0726a699e870860e8a1de.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "/product1/5ce100884de0726a699e870860e8a1de.jpeg",
          thumbnailUrl:
            "/product1/5ce100884de0726a699e870860e8a1de.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "/product1/5ce100884de0726a699e870860e8a1de.jpeg",
          thumbnailUrl:
            "/product1/5ce100884de0726a699e870860e8a1de.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "/product1/5ce100884de0726a699e870860e8a1de.jpeg",
          thumbnailUrl:
            "/product1/5ce100884de0726a699e870860e8a1de.jpeg",
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
        { label: "Sĩ số", value: "10 - 12 bé" },
      ],
      price: "170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product/5ce100884de0726a699e870860e8a1de.jpeg",
  },
  {
    id: 4,
    title: "Chậu Cây Mini Tái Chế",
    description:
      "Trồng cây sen đá hoặc xương rồng trong chậu tự chế từ lon cũ, trang trí bàn học thêm xanh",
    tabs: {
      noiDung:
        "Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học về...",
      ketQua:
        "Trẻ phân biệt được truyền sáng, phản xạ và khuếch tán. Trẻ hiểu vai trò của chất liệu trong việc điều tiết ánh sáng, rèn tính tỉ mỉ và tư duy bố cục. Ý thức về môi trường được củng cố khi một chai nhựa cũ được tái sinh thành đồ vật hữu ích.",
    },
    align: "left", // Khối text nằm bên phải
    bgColor: "bg-[#E5E6D8]", // Màu nền từ ảnh
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
          url: "/product1/IMG_6217.JPG",
          thumbnailUrl:
            "/product1/IMG_6217.JPG",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "/product1/cc1.jpeg",
          thumbnailUrl:
            "/product1/cc1.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "/product1/cc2.jpeg",
          thumbnailUrl:
            "/product1/cc2.jpeg",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "/product1/cc3.png",
          thumbnailUrl:
            "/product1/cc3.png",
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
        { label: "Sĩ số", value: "10 - 12 bé" },
      ],
      price: "170.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    },
    image: "/product/temp_image_AEFE4FA6-7A98-4933-AFEE-D2D7D898AD84.webp",
  },
];
