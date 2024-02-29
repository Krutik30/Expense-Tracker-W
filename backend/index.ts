import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import authRoutes from './routes/auth'; // Import the auth routes
import salaryRoutes from './routes/salary';
import employeeRoutes from './routes/employee'
import advanceRoute from './routes/advance';
import expensesRoute from './routes/expenses';


const app = express();

// app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

 app.use('/auth', authRoutes);
app.use('/salary', salaryRoutes);
app.use('/employees',employeeRoutes);
app.use('/advance',advanceRoute);
app.use("/expenses", expensesRoute);



app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
});










