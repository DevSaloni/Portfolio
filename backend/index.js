import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// /routes
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 2010;
mongoose.connect("mongodb://127.0.0.1:27017/my-portfolio",{
useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("mongodb connect successfully");
}).catch(err => console.log(err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
