import Hotel from '../models/Hotel.js'
import { createError } from "../utils/error.js";

export const getAllHotels = async(req,res, next)=>{
    // const failed = true
    
    // if(failed) return next(createError(401, "You are not authenticated"))

    try {
        const hotels = await Hotel.find()
        console.log(hotels)
        res.status(200).json(hotels)
    } catch (err) {
        // console.error(next(err))
        // res.status(500).json(err)   
        next(err)     
    }
}

export const getHotelById = async(req,res, next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        console.log(hotel)
        res.status(200).json(hotel)
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)    
        next(err)    
    }
}

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        console.log("Hotel created successfully")
        res.status(200).json(savedHotel)
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)  
        next(err)      
    }
}

export const updateHotel = async(req,res, next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set:req.body }, 
            {new:true}
        )
        console.log("Hotel updated successfully")
        res.status(200).json(updatedHotel)
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)    
        next(err)    
    }
}

export const deleteHotel = async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id )
        console.log("Hotel deleted successfully")
        res.status(200).json({message:"Hotel has been deleted"})
    } catch (err) {
        // console.error(err)
        // res.status(500).json(err)   
        next(err)     
    }
}