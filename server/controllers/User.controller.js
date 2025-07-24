import User from "../models/Users.model";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();
export const CreateUser = async (req, res) => {
  try {
    const { Fullname, email, password } = req.body;

 
    if (!Fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
//     for create randum avater for user
    const Inx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${Inx}.png`;

//     create new users
    const newUser = new User({ Fullname, email, password, avatar: randomAvatar });
    await newUser.save();
//generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d"
    });
res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      samesite: "Strict",
    });

     // Return success response with token
    return res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};