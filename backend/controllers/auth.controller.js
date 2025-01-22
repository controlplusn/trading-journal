import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
        if (!email || !password) {
            throw new Error("All fields are required");
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) {
            return res.status(400).json({success: false, message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword,
        })

        await user.save();

        // JWT token
        generateToken(res, user._id);

        res.status(201).json({
            success: true, 
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })

    } catch (error) {
        return res.status(400).json({success: false, message: error.message});
    }
}
 
export const login = async (req, res) => {
    res.send("Login route");
}

export const logout = async (req, res) => {
    res.send("Logout route");
}