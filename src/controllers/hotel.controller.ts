import { NextFunction, Request, Response } from "express";
import logger from "../config/logger.config";
import { createHotelService } from "../service/hotel.service";

export const hotelCreateHandler = async (req: Request, res: Response, next: NextFunction) => {
    logger.info("Hotel create request received");
    // controller is used to handel the request not the buisness logic
    // for eg check rate limting 
    const hotel=await createHotelService(req, res);
    res.status(200).json({ message: "Hotel created successfully!", hotel:hotel });
}

// 1. have some unique id generator

// 2. put the id in the current request 