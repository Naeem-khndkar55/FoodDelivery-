import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });

        if (existingUser) {
            res.status(200).send();
            return; // Ensure the function exits
        }

        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser.toObject());
    } catch (error) { 
        console.error(error);
        res.status(500).json({ message: "Error Creating User" });
    }
};

export default {
    createCurrentUser,
};
