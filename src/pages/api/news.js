// /pages/api/news.js
export default function handler(req, res) {
  const newsData = [
    {
      title: "Excited to Join NRF 2025!",
      img: "/images/news/new1.jpg",
      time: "Jan 12-14, 2025",
      link: "https://nrf.com/",
      type: "Retail Big Show",
    },
    {
      title: "ShopTalk 2025",
      img: "/images/news/new2.jpg",
      time: "Mar 25-27, 2025",
      link: "https://shoptalk.com/us",
      type: "This Spring - Journey towards new Ideas",
    },
    {
      title: "Retail Innovation Conference & Expo (IRCE)",
      img: "/images/news/new3.jpg",
      time: "Jun-July 2025 - Date TBD",
      link: "https://retailinnovationconference.com/",
      type: "Innovations - New Perspective in Retail",
    },
  ];

  res.status(200).json(newsData);
}
