import fs from 'fs'
import path from "path"

import { Car, Type } from '../database/models.js'
import getRandomCar from '../randomCar.js'

async function init() {
    let car = await Car.findOne()
    let type = await Type.findOne()
    const dir = `${process.cwd()}\\upload\\`

    if (!car || !type) {
        if (fs.readdirSync(dir).length !== 0) {
            fs.readdir(dir, (err, files) => {
                if (err) throw err;

                for (const file of files) {
                  fs.unlink(path.join(dir, file), (err) => {
                    if (err) throw err;
                  });
                }
              });
        }

        let types = [
            {
                "name": "Type A",
            },
            {
                "name": "Type B",
            },
            {
                "name": "Type C",
            },
            {
                "name": "Type D",
            },
            {
                "name": "Type E",
            }
        ]

        await Type.bulkCreate(types).then(async (res) => {
            for (let i = 0; i < types.length; i++) {
                const newCar = await Car.create(await getRandomCar())
                newCar.typeId = res[i].id
                await newCar.save()
            }
        })
    }
}

export default init
