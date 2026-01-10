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
      return res.status(409).json({ message: "User exist with this email" });
    } else {
      const newUser = await UserModel.create({
        userName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      const accessToken = jwt.sign(
        {id: newUser._id, email: newUser.email},process.env.JWT_SECRET,{expiresIn:"1hr"}
    )
      return res.status(201).json({ message:"User Created",
        user:{
        id: newUser._id,
        userName: newUser.userName,
        email: newUser.email
      },accessToken,
     });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}


// User Login
// export async function loginUser(req, res) {
//   try {
//     let { email, password } = req.body;
//   } catch (err) {
//     return res.status(500).json({ errorMessage: err });
//   }
// }
