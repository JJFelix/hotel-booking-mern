import User from '../models/User.js'
import { createError } from "../utils/error.js";

export const getAllUsers = async(req,res, next)=>{
    // const failed = true
    
    // if(failed) return next(createError(401, "You are not authenticated"))

    try {
        const users = await User.find()
        console.log(users)
        res.status(200).json(users)
    } catch (err) {
        // console.error(next(err))
        // res.status(500).json(err)   
        next(err)     
    }
}

export const getUserById = async(req,res, next)=>{
    try {
        const user = await User.findById(req.params.id)
        console.log(user)
        res.status(200).json(user)
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)    
        next(err)    
    }
}

export const updateUser = async(req,res, next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            {new:true}
        )
        console.log("User updated successfully")
        res.status(200).json(updatedUser)
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)    
        next(err)    
    }
}

export const deleteUser = async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id )
        console.log("User deleted successfully")
        res.status(200).json({message:"User has been deleted"})
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)   
        next(err)     
    }
}