import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import MyUserRoute from "./routes/myUserRoute"
dotenv.config();
const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL as string).then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

//routers
app.use("/api/my/user",MyUserRoute);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});