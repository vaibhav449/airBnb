import { type Request,type Response } from "express"
import { createHotel } from "../repositories/hotel.repository";
export const createHotelService= async (req:Request,res:Response)=>{
    // here we write the buisness logic like blacklisting some area etc 
    // we do not interact with the db here
    const respose = await createHotel(req.body);
    return respose;
}