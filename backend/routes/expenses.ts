// Import necessary modules
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Define interface for request body
interface ExpenseRequestBody {
    EmployeeID: number;
    Date: Date;
    Amount: number;
    CategoryID: number;
    Purpose: string;
}

const prisma = new PrismaClient();
const router = Router();

// Route to create a new expense entry
router.post('/expenses', async (req: Request<{}, {}, ExpenseRequestBody>, res: Response) => {
    try {
        const { EmployeeID, Date, Amount, CategoryID, Purpose } = req.body;

        // Validate the incoming request data
        if (!EmployeeID || !Date || !Amount || !CategoryID || !Purpose) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new expense entry in the database
        const newExpense = await prisma.expense.create({
            data: {
                EmployeeID,
                Date,
                Amount,
                CategoryID,
                Purpose,
                ApprovalStatus: 'Pending' // Assuming 'ApprovalStatus' defaults to 'Pending' upon creation
            }
        });

        res.status(201).json({ message: 'Expense created successfully', data: newExpense });
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
