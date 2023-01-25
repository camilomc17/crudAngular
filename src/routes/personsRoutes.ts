import { Router } from 'express';

class PersonsRoutes {
    public  router: Router = Router();
    constructor() {
        this. config();
    }

    config() : void{
    this.router.get('/', (req,res) => res.send('HERE PERSONS ROUTERS'));
    }
}
const personsroutes = new PersonsRoutes();
export default personsroutes.router;