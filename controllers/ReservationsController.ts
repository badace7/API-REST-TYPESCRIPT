import { Request, Response} from 'express';
import { reservationsList } from "../Models/ReservationsModel";




export const getReservations = async (req: Request, res: Response): Promise<void> => {

    try {
        const id: number = parseInt(req.params.id);
        const docs: Reservations = await reservationsList(id);
        res.status(200).json(docs);
    } catch (err) {

        console.log(err);

    }

}