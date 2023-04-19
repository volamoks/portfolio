import { NextApiRequest, NextApiResponse } from 'next';

import { projects } from '../../../db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read DB file.' });
    }
}
