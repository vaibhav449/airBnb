import express from 'express';
import { validateRequestBody, validateRequestParams } from '../../validators';
import { createHotelSchema, hotelIdParamSchema } from '../../validators/hotel.validator';
import { getHotelById, hotelCreateHandler } from '../../controllers/hotel.controller';

const hotelsRouter = express.Router();

hotelsRouter.post('/create', validateRequestBody(createHotelSchema), hotelCreateHandler);

hotelsRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

hotelsRouter.get('/:id', validateRequestParams(hotelIdParamSchema), getHotelById);

export default hotelsRouter;