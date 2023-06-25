import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verify_token.js";

const roomRoute = express.Router()

roomRoute.get('/', getAllRooms)

roomRoute.get('/:id', getRoomById)

roomRoute.post('/create/:hotelid', verifyAdmin, createRoom)

roomRoute.put('/update/:id', verifyAdmin, updateRoom)

roomRoute.delete('/delete/:id/:hotelid',verifyAdmin, deleteRoom)

export default roomRoute