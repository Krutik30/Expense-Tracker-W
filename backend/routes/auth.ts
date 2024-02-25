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
                RoleId: parseInt(RoleId),
                StaffId : parseInt(EmployeeId),
            },
        });


        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => 
{
    console.log(req.body)
    const { Email, Password, userRole } = req.body;

    try {
        // Check if the user exists
        const user = await prisma.user.findUnique({
            where: {
                Email: Email,
            },
            include:{
                Role: true,
                admin: true
            }
        });
        console.log(user);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(Password, user.Password);

        console.log(passwordMatch);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        if(user)
        {  
             jwt.sign({ userId: user.UserID }, JWT_SECRET, { expiresIn: '1h' },(error :any,token:any)=>{
                if(error){
                    return res.send({result : "somthig went wrong"})
                }
                else{
                    res.json({ message: 'Login successful', status: 200, payload: {
                        auth: true,
                        role: user.Role?.RoleName,
                        staff: user,
                        token
                    } });
                }
            });
        }


        
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
