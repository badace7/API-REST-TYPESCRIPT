import Reservations from "../db/entity/reservations";



class ReservationsModel {


    public reservationsList = async (id: number): Promise<Reservations> => {
    
        return await Reservations.findAll({where: {parking_id: id}});
    
    }


}

module.exports = new ReservationsModel;
