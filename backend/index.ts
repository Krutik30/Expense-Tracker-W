import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import authRoutes from './routes/auth'; // Import the auth routes

const app = express();

// app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

// Add the auth routes to the '/auth' endpoint
app.use('/auth', authRoutes);

app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
});
