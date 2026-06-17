import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createHotelSchema } from '../../validators/hotel.validator';
import { hotelCreateHandler } from '../../controllers/hotel.controller';

const hotelsRouter = express.Router();

hotelsRouter.post('/create', validateRequestBody(createHotelSchema), hotelCreateHandler); // TODO: Resolve this TS compilation issue

hotelsRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default hotelsRouter;