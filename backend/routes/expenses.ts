import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Route to create a new expense entry
router.post('/addExpense', async (req: Request, res: Response) => {
    try {
        const { EmployeeID, Date, Amount, Category, Purpose, ApprovalStatus, ImagesSlip  }:any = req.body;

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
                ImagesSlip
            }
        });

        res.json({ message: 'Expense created successfully', status: 200, payload: newExpense });
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/getExpenses/:EmployeeID', async (req, res) => {
    try {
        
        const { EmployeeID } = req.params
        const expenses = await prisma.expense.findMany({
            where: {
                EmployeeID: Number(EmployeeID)
            }
        });
        res.json({ message: 'All Expense Data', status: 200, payload: expenses })
    } catch (error) {
        console.error('Error retrieving employees:', error);
        throw error;
    }
})

export default router;
