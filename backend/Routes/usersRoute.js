import { User } from "../Models/userModel.js";
import express from 'express'

let router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    let { username, email, password, confirmpassword } = req.body;
    console.log(req.body);
    if (!username || !email || !password || !confirmpassword) {
      return res
        .status(400)
        .send('Required username, email, password, confirm password');
    }
    if (password !== confirmpassword) {
      return res.status(400).send('Passwords Not Matched');
    }
    let newUser = {
      username,
      email,
      password,
      confirmpassword,
    };
    let emailExist = await User.findOne({ email });

    if (emailExist) {
      return res.status(400).send('User already exist in DB');
    }
    let user = await User.create(newUser);
    return res.status(201).send('User is created successfully');
    
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
});

export default router