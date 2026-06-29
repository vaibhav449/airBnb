import logger from "../config/logger.config";
import Hotel from "../db/models/hotels";
import { createHotelData } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";


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

export const getAllHotel = async ()=>{
    const allHotel=await Hotel.findAll({
        where : {
            deletedAt:null
        }
    });
    if(!allHotel){
        logger.error("No hotels found");
        throw new Error("No hotels found");
    }
    return allHotel;
}

// export const deleteHotel= async(id:number)=>{
//     const hotelById= await Hotel.findByPk(id);
//     if(!hotelById) {
//         logger.error("hotel doesn't exsists");
//         return;
//     }
//     hotelById.deletedAt=new Date();
//     try {
//         await hotelById.save();
//         return true;
//     }
//     catch(e){
//        throw new Error("couldn't delete it"); 
//     }
    
// } this was a bad code as we have two trips to the database as first to find and then to delted(.save())

export const deleteHotel=async (id:number)=>{
    const [affectedRows] = await Hotel.update(
        {deletedAt:new Date()},
        {where:{id,deletedAt:null}}
    )
    if(affectedRows==0){
        logger.error(`Hotel not found (or already deleted) with ID: ${id}`);
        throw new NotFoundError(`Hotel not found with ID: ${id}`);
    }
    return true;
}

