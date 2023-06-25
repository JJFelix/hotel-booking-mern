import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"


export const getAllRooms = async(req,res, next)=>{
    // const failed = true
    
    // if(failed) return next(createError(401, "You are not authenticated"))

    try {
        const rooms = await Room.find()
        console.log(rooms)
        res.status(200).json(rooms)
    } catch (err) {
        // console.error(next(err))
        // res.status(500).json(err)   
        next(err)     
    }
}

export const getRoomById = async(req,res, next)=>{
    try {
        const room = await Room.findById(req.params.id)
        console.log(room)
        res.status(200).json(room)
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)    
        next(err)    
    }
}

export const createRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push : {rooms:savedRoom._id},
            })
        } catch (err) {
            next(err)            
        }

        res.status(200).json({
            message:"Room created successfully",
            savedRoom
        })
    } catch (err) {
        next(err)        
    }
}

export const updateRoom = async(req,res, next)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            {new:true}
        )
        console.log("Room updated successfully")
        res.status(200).json(updatedRoom)
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)    
        next(err)    
    }
}

export const deleteRoom = async(req,res)=>{
    const hotelId = req.params.hotelid

    try {
        await Room.findByIdAndDelete(req.params.id )
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull : {rooms:req.params.id},
            })
        } catch (err) {
            next(err)            
        }
        console.log("Room deleted successfully")
        res.status(200).json({message:"Room has been deleted"})
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)   
        next(err)     
    }
}