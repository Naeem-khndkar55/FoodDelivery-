import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL as string, {
    serverSelectionTimeoutMS: 50000, 
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));


app.get("/test" , async (req: Request, res: Response)=>{
    res.json({message: "hello!"});
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});