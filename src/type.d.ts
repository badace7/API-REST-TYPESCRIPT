type Parkings = Array<Parking>; 

type Parking = {
    parking_id: number,
    parking_name: string,
    parking_type: string,
    parking_city: string,
    createdAt?: Date,
    updatedAt?: Date
};

type Reservations = Array<Reservation>;

type Reservation = {
    reservation_id: number,
    reservation_parking: string,
    parking_id: number,
    reservation_city: string,
    reservation_client: string,
    reservation_vehicle: string,
    reservation_plate: string,
    reservation_checkin: string,
    reservation_checkout: string,
    createdAt?: Date,
    updatedAt?: Date

}