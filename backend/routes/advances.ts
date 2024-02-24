import { Router } from 'express';
import { PrismaClient } from '@prisma/client'; // Import advanceCreateInput for type checking

const prisma = new PrismaClient();
const router = Router();

router.post('/advances', async (req, res) => {
    try {
        const { EmployeeID, AdvanceAmount, DateIssued, Reason, GivenByAdminID } = req.body;

        // Perform validation
        if (!EmployeeID || !AdvanceAmount || !DateIssued || !Reason) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Additional validation can be performed here if needed

        // Create a new "advance" entry in the database
        const newAdvance = await prisma.advance.create({
            data: {
                EmployeeID,
                AdvanceAmount,
                DateIssued,
                Reason,
                Status: 'Pending',
                GivenByAdminID
            }
        });

        res.status(201).json({ message: 'Advance created successfully', data: newAdvance });
    } catch (error) {
        console.error('Error creating advance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
