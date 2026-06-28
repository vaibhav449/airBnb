import { NextFunction, Request, Response } from "express";
import logger from "../config/logger.config";
import { createHotelService, getHotelByIdService } from "../service/hotel.service";

export const hotelCreateHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("Hotel create request received");
        const hotel = await createHotelService(req.body);
        res.status(200).json({ message: "Hotel created successfully!", hotel });
    } catch (error) {
        next(error);
    }
}

export const getHotelById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const hotel = await getHotelByIdService(parseInt(id));
        res.status(200).json({ message: "Hotel found!", hotel });
    } catch (error) {
        next(error);
    }
}
