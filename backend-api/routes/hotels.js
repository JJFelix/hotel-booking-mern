import express from "express";

import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotelById, getHotelRooms, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verify_token.js";

const hotelRoute = express.Router()

hotelRoute.get('/', getAllHotels)

//for frontend
hotelRoute.get('/countByCity', countByCity)
hotelRoute.get('/countByType', countByType)

hotelRoute.get('/:id', getHotelById)
hotelRoute.get('/rooms/:id', getHotelRooms)

hotelRoute.post('/create', verifyAdmin, createHotel)

hotelRoute.put('/update/:id', verifyAdmin, updateHotel)

hotelRoute.delete('/delete/:id',verifyAdmin, deleteHotel)



export default hotelRoute