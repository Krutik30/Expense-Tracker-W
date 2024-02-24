import { PrismaClient, user } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createUser(Username: string, Password: string, RoleId: number, EmployeeId: number,Email:string): Promise<user> {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(Password, saltRounds); 

    return await prisma.user.create({
        data: {
            Username,
            Password: hashedPassword,
            RoleId,
            EmployeeId,
            Email
        },
    });
}

async function findUserById(UserID: number): Promise<user | null> {
    return await prisma.user.findUnique({
        where: {
            UserID,
        },
    });
}

async function findUserByUsername(Username: string): Promise<user | null> {
    return await prisma.user.findFirst({
        where: {
            Username: Username,
        },
    });
}
async function updateUserPassword(UserID: number, newPassword: string): Promise<user | null> {
    return await prisma.user.update({
        where: {
            UserID,
        },
        data: {
            Password: newPassword,
        },
    });
}

export { createUser, findUserById, findUserByUsername, updateUserPassword };
