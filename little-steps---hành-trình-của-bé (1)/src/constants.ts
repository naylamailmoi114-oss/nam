import { BabyInfo, Milestone } from './types';

export const BABY_DATA: BabyInfo = {
  name: "Nguyễn Minh Khôi",
  birthDate: "15/05/2024",
  birthWeight: "3.2kg",
  birthHeight: "50cm",
  currentAge: "11 tháng tuổi"
};

export const MILESTONES: Milestone[] = [
  {
    id: "1",
    date: "15/05/2024",
    title: "Chào đời",
    description: "Khoảnh khắc tuyệt vời nhất khi ba mẹ được gặp con lần đầu tiên. Chào mừng thiên thần nhỏ đến với thế giới!",
    photos: [
      { url: "https://picsum.photos/seed/baby1/800/600", caption: "Lần đầu gặp mẹ" },
      { url: "https://picsum.photos/seed/baby2/800/600", caption: "Giấc ngủ đầu tiên" }
    ]
  },
  {
    id: "2",
    date: "20/06/2024",
    title: "Đầy tháng",
    description: "Buổi lễ đầy tháng ấm cúng bên gia đình. Con đã bắt đầu biết hóng chuyện và cười rất tươi.",
    photos: [
      { url: "https://picsum.photos/seed/baby3/800/600", caption: "Tiệc đầy tháng" },
      { url: "https://picsum.photos/seed/baby4/800/600", caption: "Nụ cười tỏa nắng" }
    ]
  },
  {
    id: "3",
    date: "15/11/2024",
    title: "Lần đầu biết bò",
    description: "Nhà bây giờ không còn yên tĩnh nữa rồi! Con đã có thể tự mình khám phá mọi ngóc ngách trong nhà.",
    photos: [
      { url: "https://picsum.photos/seed/baby5/800/600", caption: "Bò điệu nghệ" },
      { url: "https://picsum.photos/seed/baby6/800/600", caption: "Phát hiện đồ chơi mới" }
    ]
  },
  {
    id: "4",
    date: "01/03/2025",
    title: "Những bước đi đầu đời",
    description: "Chập chững những bước đi đầu tiên. Ba mẹ vô cùng tự hào về cậu bé kiên cường của mình.",
    photos: [
      { url: "https://picsum.photos/seed/baby7/800/600", caption: "Tập đi cùng ba" },
      { url: "https://picsum.photos/seed/baby8/800/600", caption: "Tự đứng vững" }
    ]
  }
];
