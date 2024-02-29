import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.post('/createEmployees', async (req, res) => {
    try {
        
        const { FirstName, LastName, Email, ContactNumber, EmploymentStartDate } = req.body;
        console.log(req.body);
        
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
                EmploymentStartDate : EmploymentStartDate
            }
        });

        res.status(201).json({ message: 'Employee created successfully', data: newEmployee });
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// all Employess are Listed
router.get('/getEmployees', async (req, res) => {
    try {
        console.log('object');
        const employees = await prisma.employee.findMany({
            include:{
                Advance: true,
                Expense: true,
                Salary: true
            }
        });
        res.json({ message: 'All Employee Data', status: 200, payload: employees })
    } catch (error) {
        console.error('Error retrieving employees:', error);
        throw error;
    }
})






export default router;
