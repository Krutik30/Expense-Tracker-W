import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.post('/createEmployees', async (req, res) => {
    try {
        console.log(req.body);
        const { FirstName, LastName, Email, ContactNumber, EmploymentStartDate } = req.body;

        // Check if all required fields are present
        if (!FirstName || !LastName || !Email || !ContactNumber || !EmploymentStartDate) {
            return res.status(400).json({ error: 'Missing required fields' });
        }


        // Create a new employee entry in the database
        const newEmployee = await prisma.employee.create({
            data: {
                FirstName,
                LastName,
                Email,
                ContactNumber,
                EmploymentStartDate
            }
        });

        res.status(201).json({ message: 'Employee created successfully', data: newEmployee });
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
