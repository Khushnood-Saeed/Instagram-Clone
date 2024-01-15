import express  from "express";
import { signUp,signIn } from "../controller/userController.js";
import mongoose from "mongoose";
import requireLogin from "../middleWares/requireLogin.js";
const router=express.Router()



router.post('/signup',signUp)
router.post('/signin',signIn)


export default router