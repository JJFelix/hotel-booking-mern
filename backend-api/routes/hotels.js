import express from "express";

import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verify_token.js";

const hotelRoute = express.Router()

hotelRoute.get('/', getAllHotels)

hotelRoute.get('/:id', getHotelById)

hotelRoute.post('/create', verifyAdmin, createHotel)

hotelRoute.put('/update/:id', verifyAdmin, updateHotel)

hotelRoute.delete('/delete/:id',verifyAdmin, deleteHotel)



export default hotelRoute