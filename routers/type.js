import { Router } from 'express'
import TypeController from '../controllers/type.js'


export const typeRouter = new Router()

typeRouter.get('/', TypeController.getAll)
typeRouter.get('/:id', TypeController.getOne)
typeRouter.post('/', TypeController.create)
typeRouter.put('/:id', TypeController.update)
typeRouter.delete('/:id', TypeController.delete)