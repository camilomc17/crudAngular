"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PersonsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('HERE PERSONS ROUTERS'));
    }
}
const personsroutes = new PersonsRoutes();
exports.default = personsroutes.router;
