import Hotel from '../models/Hotel.js'
import { createError } from "../utils/error.js";

export const getAllHotels = async(req,res, next)=>{
    // const failed = true
    
    // if(failed) return next(createError(401, "You are not authenticated"))
    const {min, max,...others} = req.query
    try {
        const hotelsByManyParams = await Hotel.find({...others, cheapestPrice:{$gt:min,$lt:max}})
        const hotelsBySingleParam = await Hotel.find(req.query)
        // console.log(hotels)
        res.status(200).json({hotelsByManyParams, hotelsBySingleParam})
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

export const countByCity = async(req,res, next)=>{
    const cities = req.query.cities.split(',')

    try {
        const list = await Promise.all(cities.map(city=>{
            return (Hotel.countDocuments({city:city}))
        }))
        // console.log(list)
        res.status(200).json(list)
    } catch (err) {
        // console.error(next(err))
        // res.status(500).json(err)   
        next(err)     
    }
}

export const countByType = async(req,res, next)=>{
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})
        
        res.status(200).json([
            {type:"hotel", count:hotelCount},
            {type:"apartment", count:apartmentCount},
            {type:"resort", count:resortCount},
            {type:"villa", count:villaCount},
            {type:"cabin", count:cabinCount},
        ])
    } catch (err) {  
        next(err)     
    }
}