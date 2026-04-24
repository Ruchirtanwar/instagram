import express from "express";
import usermodel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function registerUserController(req, res) {
  const { fullname, username, email, password,bio } = req.body;

  // condition 1: all fields are required
  if (!fullname || !username || !email || !password || !bio) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  //condition 2: if user already exist or not

  const user = await usermodel.findOne({
    $or: [{ username }, { email }],
  });
  if (user) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  // condition 3: user does not exist so now create a hash password
  const hashPassword = await bcrypt.hash(password, 10);
  // comdition 4: reate a user with all fields and hashpassword
  const newUser = await usermodel.create({
    fullname,
    username,
    bio,
    email,
    password: hashPassword,
  });
  // condition 4: user created now send a token contaioning user id and jwt to cookies
  // condition 4a : create token
  const token = jwt.sign(
    {
      id: newUser._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  //condition 4b: token should be send to cookie

  res.cookie("token", token);

  // condition 5: now send a message that user is created

  return res.status(201).json({
    message: "user created successfully",
    newUser,
  });
}

export async function userLoginController(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: " All fields are required",
    });
  }
  const user = await usermodel.findOne({
    email
  }).select("+password");;
  if (!user) {
    return res.status(404).json({ message: "user does not exist" });
  }
  const decoded = await bcrypt.compare(password,user.password)
  if(!decoded){
    return(res.status(404).json({
        message:"invalid password"
    }))

  }
const token = jwt.sign({
    id:user._id
},process.env.JWT_SECRET,{expiresIn:"1d"})

res.cookie("token",token)

 return res.status(201).json({
    message: "login successfully",
   user: {
      username: user.username,
      email: user.email,
    },
  });

}

// logoutapi 
export async function userLogOutController(params) {
  
}

