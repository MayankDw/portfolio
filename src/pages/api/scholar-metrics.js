import { scholarly } from "scholarly";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const scholarId = "H2ggrzQAAAAJ";
      const metrics = await scholarly.profile(scholarId);

      res.status(200).json({
        citations: metrics.citations.all,
        citationsSince2019: metrics.citations.since2019,
        hIndex: metrics.h_index.all,
        hIndexSince2019: metrics.h_index.since2019,
        i10Index: metrics.i10_index.all,
        i10IndexSince2019: metrics.i10_index.since2019,
      });
    } catch (error) {
      console.error("Error fetching scholar metrics:", error);
      res.status(500).json({
        error: "Failed to fetch Google Scholar metrics. Please check the Scholar ID or library configuration.",
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
