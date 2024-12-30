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
      title: "Meet my PI Prof. Dr. Edward Bertaccini",
      img: "/images/news/news3.png",
      time: "Jan 6, 2025",
      link: "https://med.stanford.edu/profiles/edward-bertaccini",
      type: "Research",
    },
    {
      title: "The ABCs of AlphaFold 3, Boltz, and Chai-1",
      img: "/images/news/news2.png",
      time: "Dec 3, 2024",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7268935224925794304/",
      type: "AI Protein Design",
    },
  ];

  res.status(200).json(newsData);
}
