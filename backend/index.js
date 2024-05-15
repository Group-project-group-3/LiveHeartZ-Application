import express from 'express';

import cors from 'cors';
import mongoose from 'mongoose';

import DonorRoutes from './routes/DonorRoutes.js';
import BloodRoutes from './routes/BloodRequestRoutes.js';
import CommonRoutes from './routes/CommonRoutes.js';
import ReportRoutes from './routes/ReportsRoutes.js';


const app = express();

app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json());


app.use('/donor', DonorRoutes);
app.use('/finder', BloodRoutes);
app.use('/home', CommonRoutes);
app.use('/report', ReportRoutes);


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nufla2017:Qy3CtKmGYrgLnTd1@cluster0.y4rjeoz.mongodb.net/LiveHeartz", {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
    }
}






app.listen(8081, async () => {
    await connectDB();
    console.log("Database Running On 8081");
});
