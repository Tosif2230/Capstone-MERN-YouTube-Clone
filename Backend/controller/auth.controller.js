import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//User Register
export async function registerUser(req, res) {
  try {
    let { userName, email, password } = req.body;

    //Check for existing user
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exist with this email" });
    } else {
      const newUser = await UserModel.create({
        userName,
        email,
        password: bcrypt.hashSync(password, 10),
      });

      return res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser._id,
          userName: newUser.userName,
          email: newUser.email,
        },
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}


// User Login
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    // user verification
    if (!user) {
      return res.status(404).json({ message: "User Doesnot Exist" });
    }

    //password varification
    let validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    //JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
      accessToken: token,
    });
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
