// import type of Response & Request
import express, {Application} from 'express';
const routes = require('../routes');
// import express
const app: Application = express();
// port runtime
const port: number = 8080;
// Body parsing Middleware  
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

try {

    app.listen(port, () => {
        console.log('serveur à l\'écoute');
    });

} catch (err) {

    console.log(`Error : ${err}`);

}