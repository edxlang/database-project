import type { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from "@/app/db/connect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const result = await executeQuery({ query: 'SELECT * FROM AIRPORT' }); // Replace with your actual query
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching IATACODEs.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }
}