import { getAllTags } from "@/library/blogApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            // Fetch the list of tags using your getAllTags function
            const tags = getAllTags();

            // Respond with the list of tags as JSON
            res.status(200).json({ tags });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}