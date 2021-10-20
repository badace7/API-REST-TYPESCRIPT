import Reservations from "../db/entity/reservations";

export const reservationsList = async (id: number): Promise<Reservations> => {

    return await Reservations.findAll({where: {parking_id: id}});

}