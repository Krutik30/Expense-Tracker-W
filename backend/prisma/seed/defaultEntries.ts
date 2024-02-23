// seed.ts
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllRows() {
    try {
        await prisma.user.deleteMany({});
        await prisma.role_et.deleteMany({});
        await prisma.employee.deleteMany({});
        await prisma.salary.deleteMany({});
        await prisma.advance.deleteMany({});
        await prisma.expense.deleteMany({});
        console.log('All rows deleted successfully.');
    } catch (error) {
        console.error('Error deleting rows:', error);
    }
}


async function seed() {
    try {

        await deleteAllRows()

        const role = await prisma.role_et.create({
            data: {
                RoleName: 'administration',
            },
        });

        const employee = await prisma.employee.create({
            data: {
                FirstName: 'Krutik',
                LastName: 'Aghera',
                Email: 'agherakrutik99@gmail.com',
                ContactNumber: '7990451310',
                EmploymentStartDate: new Date('2024-02-23'),
            },
        });

        await prisma.user.create({
            data: {
                Username: 'Krutik',
                Password: await bcrypt.hash("Krutik@30", 10), 
                RoleId: 1, 
                EmployeeId: 1, 
                Email: 'agherakrutik999@gmail.com'
            },
        });

        console.log('Seed data inserted successfully.');
    } catch (error) {
        console.error('Error inserting seed data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
