// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import resumeData from "../../data/resume.json";

type Data = {
  name: string;
  job: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
  res.status(200).json(resumeData);
}
