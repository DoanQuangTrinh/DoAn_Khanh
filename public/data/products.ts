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
          url: "https://placehold.co/800x600/879382/FDFBF4?text=Robot+View+1",
          thumbnailUrl: "https://placehold.co/150x150/879382/FDFBF4?text=View+1",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "https://placehold.co/800x600/B5C4B0/4A6341?text=Robot+View+2",
          thumbnailUrl: "https://placehold.co/150x150/B5C4B0/4A6341?text=View+2",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "https://placehold.co/800x600/D7DDCF/4A6341?text=Robot+View+3",
          thumbnailUrl: "https://placehold.co/150x150/D7DDCF/4A6341?text=View+3",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "https://placehold.co/800x600/E5E6D8/4A6341?text=Robot+View+4",
          thumbnailUrl: "https://placehold.co/150x150/E5E6D8/4A6341?text=View+4",
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
      price: "150.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    }
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
          url: "https://placehold.co/800x600/879382/FDFBF4?text=Robot+View+1",
          thumbnailUrl: "https://placehold.co/150x150/879382/FDFBF4?text=View+1",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "https://placehold.co/800x600/B5C4B0/4A6341?text=Robot+View+2",
          thumbnailUrl: "https://placehold.co/150x150/B5C4B0/4A6341?text=View+2",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "https://placehold.co/800x600/D7DDCF/4A6341?text=Robot+View+3",
          thumbnailUrl: "https://placehold.co/150x150/D7DDCF/4A6341?text=View+3",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "https://placehold.co/800x600/E5E6D8/4A6341?text=Robot+View+4",
          thumbnailUrl: "https://placehold.co/150x150/E5E6D8/4A6341?text=View+4",
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
      price: "150.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    }
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
          url: "https://placehold.co/800x600/879382/FDFBF4?text=Robot+View+1",
          thumbnailUrl: "https://placehold.co/150x150/879382/FDFBF4?text=View+1",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "https://placehold.co/800x600/B5C4B0/4A6341?text=Robot+View+2",
          thumbnailUrl: "https://placehold.co/150x150/B5C4B0/4A6341?text=View+2",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "https://placehold.co/800x600/D7DDCF/4A6341?text=Robot+View+3",
          thumbnailUrl: "https://placehold.co/150x150/D7DDCF/4A6341?text=View+3",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "https://placehold.co/800x600/E5E6D8/4A6341?text=Robot+View+4",
          thumbnailUrl: "https://placehold.co/150x150/E5E6D8/4A6341?text=View+4",
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
      price: "150.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    }
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
          url: "https://placehold.co/800x600/879382/FDFBF4?text=Robot+View+1",
          thumbnailUrl: "https://placehold.co/150x150/879382/FDFBF4?text=View+1",
          alt: "Robot từ hộp sữa - Ảnh 1",
        },
        {
          id: 2,
          url: "https://placehold.co/800x600/B5C4B0/4A6341?text=Robot+View+2",
          thumbnailUrl: "https://placehold.co/150x150/B5C4B0/4A6341?text=View+2",
          alt: "Robot từ hộp sữa - Ảnh 2",
        },
        {
          id: 3,
          url: "https://placehold.co/800x600/D7DDCF/4A6341?text=Robot+View+3",
          thumbnailUrl: "https://placehold.co/150x150/D7DDCF/4A6341?text=View+3",
          alt: "Robot từ hộp sữa - Ảnh 3",
        },
        {
          id: 4,
          url: "https://placehold.co/800x600/E5E6D8/4A6341?text=Robot+View+4",
          thumbnailUrl: "https://placehold.co/150x150/E5E6D8/4A6341?text=View+4",
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
      price: "150.000đ / 1 bé",
      priceNotes: [
        "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
        "Combo gia đình được giảm thêm từ bé thứ hai.",
      ],
      disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
    }
  },
];
