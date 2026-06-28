import { createHotel, getHotelById } from "../repositories/hotel.repository";
import { createHotelData } from "../dto/hotel.dto";

export const createHotelService = async (hotelData: createHotelData) => {
    const response = await createHotel(hotelData);
    return response;
}

export const getHotelByIdService = async (id: number) => {
    const hotel = await getHotelById(id);
    return hotel;
}
