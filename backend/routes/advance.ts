import { Router } from 'express';
import { PrismaClient } from '@prisma/client'; // Import advanceCreateInput for type checking

const prisma = new PrismaClient();
const router = Router();

router.post('/addAdvance', async (req, res) => {
   
    try {
        const { EmployeeID, AdvanceAmount, DateIssued, Reason, GivenByAdminID } = req.body;

        
        if (!EmployeeID || !AdvanceAmount || !DateIssued || !Reason) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newAdvance = await prisma.advance.create({
            data: {
                EmployeeID,
                AdvanceAmount: Number(AdvanceAmount),
                DateIssued,
                Reason,
                Status: 'Pending',
                GivenByAdminID
            }
        });
        console.log(newAdvance);

        res.json({ message: 'Advance created successfully',statu: 200, payload: newAdvance });
    } catch (error) {
        console.error('Error creating advance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
