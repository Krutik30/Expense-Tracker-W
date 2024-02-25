// seed.ts
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllRows() {
    try {
        await prisma.role_et.deleteMany({});
        await prisma.employee.deleteMany({});
        await prisma.user.deleteMany({});
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

        const roles = await prisma.role_et.createMany({
            data: [
                { RoleID: 1, RoleName: 'EMPLOYEE' },
                { RoleID: 2, RoleName: 'ADMIN' },
                // { RoleID: 3, RoleName: 'ADMINISTRATION' },
            ],
        });

        const admin = await prisma.admin.createMany({
            data: [
                {
                    AdminID: 1,
                    Username: 'Dharmen',
                    Email: 'dharmen143@gmail.com'
                },
                {
                    AdminID: 2,
                    Username: 'Esha',
                    Email: 'esha6i@gmail.com'
                },
                {
                    AdminID: 3,
                    Username: 'Diti',
                    Email: 'kutti@gmail.com'
                }
            ]
        })

        const employee = await prisma.employee.createMany({
            data: [
                {
                    EmployeeID: 1,
                    FirstName: 'Krutik',
                    LastName: 'Aghera',
                    Email: 'agherakrutik99@gmail.com',
                    ContactNumber: '7990451310',
                    EmploymentStartDate: new Date(),
                },
                {
                    EmployeeID: 2,
                    FirstName: 'Neha',
                    LastName: 'Kanki',
                    Email: 'neha69@gmail.com',
                    ContactNumber: '9900992211',
                    EmploymentStartDate: new Date(),
                },
                {
                    EmployeeID: 3,
                    FirstName: 'Sandip',
                    LastName: 'Majithiya',
                    Email: 'jadiyo@gmail.com',
                    ContactNumber: '9900992222',
                    EmploymentStartDate: new Date(),
                }
            ],
        });

        await prisma.user.createMany({
            data: [
                {
                    Username: 'Krutik',
                    Password: await bcrypt.hash("Krutik@30", 10),
                    RoleId: 1,
                    EmployeeId: 1,
                    Email: 'agherakrutik99@gmail.com'
                },
                {
                    Username: 'Neha',
                    Password: await bcrypt.hash("Neha@08", 10),
                    RoleId: 1,
                    EmployeeId: 2,
                    Email: 'neha69@gmail.com'
                },
                {
                    Username: 'Sandip',
                    Password: await bcrypt.hash("Sandip@12", 10),
                    RoleId: 1,                    
                    EmployeeId: 3,
                    Email: 'jadiyo@gmail.com',
                },
                {
                    Username: 'Dharmen',
                    Password: await bcrypt.hash("Dhamo@25", 10),
                    RoleId: 2,
                    EmployeeId: 1,
                    Email: 'dharmen143@gmail.com'
                },
                {
                    Username: 'Esha',
                    Password: await bcrypt.hash("Esha@21", 10),
                    RoleId: 2,
                    EmployeeId: 2,
                    Email: 'esha6i@gmail.com'
                },
                {
                    Username: 'Diti',
                    Password: await bcrypt.hash("Dito@05", 10),
                    RoleId: 2,
                    EmployeeId: 3,
                    Email: 'kutti@gmail.com'
                }
            ]
        });

        console.log('Seed data inserted successfully.');
    } catch (error) {
        console.error('Error inserting seed data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
