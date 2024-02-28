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


router.get('/advancesByEmployee/:employeeId', async (req, res) => {
    try {
        const { employeeId } = req.params;

        const advances = await prisma.advance.findMany({
            where: {
                EmployeeID: parseInt(employeeId),
            },
        });

        res.json({ message: 'Advances fetched successfully', status: 200, payload: advances });
    } catch (error) {
        console.error('Error fetching advances by EmployeeID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/advancesByAdmin/:adminId', async (req, res) => {
    try {
        const { adminId } = req.params;

        const advances = await prisma.advance.findMany({
            where: {
                GivenByAdminID: parseInt(adminId),
            },
        });

        res.json({ message: 'Advances fetched successfully', status: 200, payload: advances });
    } catch (error) {
        console.error('Error fetching advances by AdminID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;