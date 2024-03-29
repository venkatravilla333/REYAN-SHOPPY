import { User } from "../Models/userModel.js";
import express from 'express'
import jwt from 'jsonwebtoken'

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

router.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    let { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).send('Required email and password');
    }

    let existUser = await User.findOne({ email });
    console.log(existUser);

    if (!existUser) {
      return res.status(404).send('User not found');
    }
    if (existUser.password !== password) {
      return res.status(400).send('Invalid credentails');
    }

    if (existUser.email && existUser.password) {
      let token = jwt.sign({ id: existUser._id }, 'secret', {
        expiresIn: '1d',
      });
      console.log('login:', token);
      return res.json({ token: token, username: existUser.username});
    }
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

export default router