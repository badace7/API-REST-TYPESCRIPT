import { Request, Response} from 'express';
const ReservationsModel = require('../Models/ReservationsModel');


class ReservationsController {

    public getReservations = async (req: Request, res: Response): Promise<void> => {
    
        try {
            const id: number = parseInt(req.params.id);
            const docs: Reservations = await ReservationsModel.reservationsList(id);
            res.status(200).json(docs);
        } catch (err) {
    
            console.log(err);
    
        }
    
    }
}


module.exports = new ReservationsController;