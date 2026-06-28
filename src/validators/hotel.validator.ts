import { z } from "zod";

export const createHotelSchema = z.object({
    name: z.string().min(1),
    location: z.string().min(1),
    address: z.string().min(1),
    ratings: z.number().min(0).max(5).optional(),
    rating_count: z.number().int().min(0).optional(),
});

export const hotelIdParamSchema = z.object({
    id: z.string().regex(/^\d+$/, "id must be a positive integer"),
});
