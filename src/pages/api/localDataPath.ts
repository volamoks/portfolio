import { NextApiRequest, NextApiResponse } from 'next';

import { path } from '../../../db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json(path);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to read DB file.' });
    }
}
