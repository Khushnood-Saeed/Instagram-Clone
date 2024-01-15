import express  from "express";
import mongoose from "mongoose";
import { createPost,getPosts,myPosts } from "../controller/postController.js";
import requireLogin from "../middleWares/requireLogin.js";
const postRouter=express.Router()


postRouter.post('/createpost',requireLogin,createPost)
postRouter.get('/allposts',getPosts)
postRouter.get('/myposts', requireLogin,myPosts)












export default postRouter