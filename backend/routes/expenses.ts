import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Route to create a new expense entry
router.post('/addExpense', async (req: Request, res: Response) => {
    try {
        console.log('some thing happends');
        const { EmployeeID, Date, Amount, Category, Purpose, ApprovalStatus  }:any = req.body;

        if (!EmployeeID || !Date || !Amount || !Category || !Purpose) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new expense entry in the database
        const newExpense = await prisma.expense.create({
            data: {
                EmployeeID,
                Date,
                Amount: Number(Amount),
                Category,
                Purpose,
                ApprovalStatus,
            }
        });

        res.json({ message: 'Expense created successfully', status: 200, payload: newExpense });
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
