import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom, updateRoomAvailability } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verify_token.js";

const roomRoute = express.Router()

roomRoute.get('/', getAllRooms)

roomRoute.get('/:id', getRoomById)

roomRoute.post('/create/:hotelid', verifyAdmin, createRoom)

roomRoute.put('/update/:id', verifyAdmin, updateRoom)
roomRoute.put('/update/roomAvailability/:id', updateRoomAvailability)


roomRoute.delete('/delete/:id/:hotelid',verifyAdmin, deleteRoom)

export default roomRoute