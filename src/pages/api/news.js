// /pages/api/news.js
export default function handler(req, res) {
  const newsData = [
    {
      title: "Excited to Join Stanford as a Postdoctoral Scholar!",
      img: "/images/news/news1.png",
      time: "Jan 6, 2025",
      link: "https://profiles.stanford.edu/pritam-panda",
      type: "Research",
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
