import Parkings from '../db/entity/parkings';



class ParkingModel {


    public parkingList = async (): Promise<Parkings> => {
    
       return await Parkings.findAll();
    
    };

    public parkingById = async (id: number): Promise<Parkings> => {
    
        return await Parkings.findAll({where: {parking_id: id}});
    
    };

    public insertParking = async (body: Parking): Promise<void> => {
    
        const {parking_name, parking_city, parking_type}: Parking = body;
        await Parkings.create({ parking_name: parking_name, parking_city: parking_city, parking_type: parking_type });
    
    }
    
    
    public deleteParking = async (id: number): Promise<void> => {
    
       await Parkings.destroy({where: {parking_id: id}});
    
    }
    
    public updateParking = async (body: Parking, id: number): Promise<any> => {
       
        const {parking_name, parking_city, parking_type}: Parking = body;
        return await Parkings.update({parking_name: parking_name, parking_city: parking_city, parking_type: parking_type}, {where: {
            parking_id: id
        }})
    }

}

module.exports = new ParkingModel;
 