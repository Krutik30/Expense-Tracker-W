import { PrismaClient, user } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createUser(Username: string, Password: string, RoleId: number, EmployeeId: number): Promise<User> {
    const saltRounds = 10; // Number of salt rounds for bcrypt hashing
    const hashedPassword = await bcrypt.hash(Password, saltRounds); // Hash the password with bcrypt

    return await prisma.user.create({
        data: {
            Username,
            Password: hashedPassword,
            RoleId,
            EmployeeId,
        },
    });
}

async function findUserById(UserID: number): Promise<User | null> {
    return await prisma.user.findUnique({
        where: {
            UserID,
        },
    });
}

async function findUserByUsername(Username: string): Promise<User | null> {
    return await prisma.user.findFirst({
        where: {
            Username: Username,
        },
    });
}
async function updateUserPassword(UserID: number, newPassword: string): Promise<User | null> {
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
