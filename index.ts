import * as dotenv from "dotenv";
dotenv.config();
import { database } from "./src/db/dbConnection";



(async () => {
    await database.sequelize.sync();
})();