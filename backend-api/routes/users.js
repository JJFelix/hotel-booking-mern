import express from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/users.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verify_token.js";

const userRoute = express.Router()

// userRoute.get('/checkAuthentication', verifyToken, (req,res,next)=>{
//     res.send("Hello user, you are authenticated")
// })

// userRoute.get('/checkUser/:id', verifyUser, (req,res,next)=>{
//     res.send("Hello user, you are logged in and can delete account")
// })

// userRoute.get('/checkAdmin/:id', verifyAdmin, (req,res,next)=>{
//     res.send("Hello admin, you are logged in and can delete all accounts")
// })


userRoute.get('/', verifyAdmin, getAllUsers)

userRoute.get('/:id',verifyUser, getUserById)

userRoute.put('/update/:id', verifyUser, updateUser)

userRoute.delete('/delete/:id',verifyUser, deleteUser)



export default userRoute