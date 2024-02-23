import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

router.post('/signup', async (req, res) => {
    console.log({body : req.body});
    const { Username, Email, Password, RoleId, EmployeeId } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                Username
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create the new user
        const newUser = await prisma.user.create({
            data: {
                Username,
                Email,
                Password,
                RoleId,
                EmployeeId,
            },
        });

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    const { Username, Password } = req.body;
    try {
        // Check if the user exists
        const user = await prisma.user.findFirst({
            where: {
                Username,
            },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the passwords
        const passwordMatch = await bcrypt.compare(Password, user.Password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.UserID }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
