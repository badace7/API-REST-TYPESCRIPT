import Parkings from '../db/entity/parkings';


     export const parkingList = async (): Promise<Parkings> => {

        return await Parkings.findAll();

    };


    export const parkingById = async (id: number): Promise<Parkings> => {

        return await Parkings.findAll({where: {parking_id: id}});

   };

    export const insertParking = async (body: Parking): Promise<void> => {

        const {parking_name, parking_city, parking_type}: Parking = body;
        await Parkings.create({ parking_name: parking_name, parking_city: parking_city, parking_type: parking_type });

   }


   export const deleteParking = async (id: number): Promise<void> => {

       await Parkings.destroy({where: {parking_id: id}});

   }

   export const updateParking = async (body: Parking, id: number): Promise<any> => {
       
        const {parking_name, parking_city, parking_type}: Parking = body;
        return await Parkings.update({parking_name: parking_name, parking_city: parking_city, parking_type: parking_type}, {where: {
            parking_id: id
        }})

   }
 