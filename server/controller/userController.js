import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../keys/key.js";

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    try {
        const savedUser = await User.findOne({ email: email });
        if (savedUser) {
            return res.status(409).json({ error: "User already exists with that email" });
        }

        const hashPass = await bcrypt.hash(password, 12);

        const user = new User({
            email: email,
            password: hashPass,
            name: name
        });

        await user.save();
        res.status(201).json({ message: "User saved successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    try {
        const savedUser = await User.findOne({ email: email });
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid email or password." });
        } 

        const passwordMatch = await bcrypt.compare(password, savedUser.password);

        if (passwordMatch) {
           // res.status(200).json({ message: "User Signed In successfully" });
           const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
           const {_id,name,email}=savedUser
           res.json({token,user:{_id,name,email}})
        } else { 
            return res.status(422).json({ error: "Invalid email or password." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
