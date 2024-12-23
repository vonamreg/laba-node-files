import { Router } from "express";
import { carRouter } from "./car.js"
import { typeRouter } from "./type.js";


export const router = new Router()

router.use('/cars', carRouter)
router.use('/tyes', typeRouter)
