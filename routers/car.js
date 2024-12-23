import { Router } from 'express'
import CarController from '../controllers/car.js'


export const carRouter = new Router()

carRouter.get('/', CarController.getAll)
carRouter.get('/:id', CarController.getOne)
carRouter.post('/', CarController.create)
carRouter.put('/:id', CarController.update)
carRouter.delete('/:id', CarController.delete)
