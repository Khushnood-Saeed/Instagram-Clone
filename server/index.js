import express from "express";
import Connection from "./dataBase/db.js";
import cors from "cors";
import router from "./routes/auth.js";
import postRouter from "./routes/post.js";


const app=express()
const PORT=3000

app.use(express.json());


Connection()
app.use(cors())

app.use('/',router)
app.use('/post',postRouter)






app.listen(PORT,()=>{
    console.log(`Server is runnning on Port ${PORT}`)
})

