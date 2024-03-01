import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/profile/:RoleID/:StaffID', async (req: Request, res: Response) => {
    try {
        // Extract query parameters from the URL path
        const { RoleID, StaffID } = req.params;

        let profile;
        if(RoleID === '1'){
            profile = await prisma.employee.findUnique({
                where: {
                    EmployeeID: Number(StaffID)
                },
                include: {
                    Advance: true,
                    Expense: true,
                    Salary: true
                }
            })
        } else {
            profile = await prisma.admin.findUnique({
                where: {
                    AdminID: Number(StaffID)
                },
                include: {
                    approvedExpenses: true,
                    givenAdvances: true
                }
            })
        }
        
        
        res.json({ message: 'Expense created successfully', status: 200, payload: profile });
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
