import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.post('/profile/:staffID', async (req: Request, res: Response) => {
    try {
        const profile = {};
        res.json({ message: 'Expense created successfully', status: 200, payload: profile });
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


export default router;
