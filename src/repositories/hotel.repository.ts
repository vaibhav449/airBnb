import logger from "../config/logger.config";
import Hotel from "../db/models/hotels";
import { createHotelData } from "../dto/hotel.dto";


export const createHotel = async (hotelData:createHotelData) => {
    // Implementation for creating a hotel
    const response = await Hotel.create({
        name:hotelData.name,
        address:hotelData.address,
        location:hotelData.location,
        ratings:hotelData.ratings,
        rating_count:hotelData.rating_count
    });

    return response;
};

export const getHotelById = async (id: number) => {
    // Implementation for getting a hotel by ID
    const response = await Hotel.findByPk(id);
    if (!response){
        logger.error(`Hotel not found with ID: ${id}`);
        throw new Error("Hotel not found");
    }
    return response;
};