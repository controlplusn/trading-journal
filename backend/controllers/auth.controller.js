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
    const { email, password } = req.body; // taking input from the user

    try {
        const user = await User.findOne({ email }); // find the email of the user
        console.log("User: ", user);
        if (!user) {
            res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // check if the password is valid
        const isPasswordValid = await bcrypt.compare(password, user.password) // compare the user inputted password from the password on the database
        if (!isPasswordValid) {
            res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // generate JWT token
        generateToken(res, user._id);

        // update last login of user
        user.lastLogin = new Date();

        // save user profile on the database
        await user.save();

        // display the login profile if success
        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        });

    } catch (error) {
        console.log("Error in login ", error);
        res.status(400).json({ success: false, message: error.message });
    }
}

export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({success: true, message: "Logged out sucessfully"});
}

export const checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }   

        res.status(200).json({ success: true, user: {
            ...user._doc,
            password: undefined
        }})
    } catch (error) {
        console.log("Error in checkAuth", error);
        return res.status(400).json({ success: false, message: error.message });
    }
}