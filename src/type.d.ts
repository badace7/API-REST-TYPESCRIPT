type Parkings = Array<Parking>; 

type Parking = {
    id: number,
    name: string,
    type: string,
    city: string
};

type Reservations = Array<Reservation>;

type Reservation = {
    id: number,
    parking: string,
    parkingId: number,
    city: string,
    clientName: string,
    vehicle: string,
    licensePlate: string,
    checkin: string,
    checkout: string
}