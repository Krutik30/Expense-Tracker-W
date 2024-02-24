// Import necessary modules and initialize PrismaClient
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const router = Router();

// Route to create a new Salary entry
router.post('/createSalaries', async (req, res) => {
    const { EmployeeID, BasicSalary, Bonuses, Allowances, Deductions, PaymentFrequency, PaymentStatus } = req.body;
            // Validate the incoming request data
            if (!EmployeeID ||  !BasicSalary || !Bonuses ||  !Allowances || !Deductions ||!PaymentFrequency || ! PaymentStatus) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

    try {
        // Create a new salary entry
        const newSalary = await prisma.salary.create({
            data: {
                Employee: { connect: { EmployeeID } }, // Connect to an existing employee
                BasicSalary,
                Bonuses,
                Allowances,
                Deductions,
                PaymentFrequency,
                PaymentStatus
            }
        });

        // Update the corresponding employee record to include the new salary
        await prisma.employee.update({
            where: { EmployeeID },
            data: {
                Salary: { connect: { SalaryID: newSalary.SalaryID } } // Connect the new salary to the employee
            }
        });

        res.status(201).json({ message: 'Salary created successfully', data: newSalary });
    } catch (error) {
        console.error('Error creating salary:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/getSalary/:employeeId', async (req, res) => {
    const { employeeId } = req.params;

    try {
        // Retrieve salary information for the specified employee
        const salary = await prisma.salary.findUnique({
            where: { EmployeeID: parseInt(employeeId) }
        });

        if (!salary) {
            return res.status(404).json({ error: 'Salary entry not found' });
        }

        res.status(200).json({ message: 'Salary retrieved successfully', data: salary });
    } catch (error) {
        console.error('Error retrieving salary:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
