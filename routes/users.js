const express = require('express')
const route = express.Router()

const {
    index, 
    save, 
    findById, 
    update, 
    erase 
} = require('../controllers/controll-users')


route.get('/', index)

route.post('/', save)
route.get('/:id', findById)
route.put('/:id', update)
route.delete('/:id', erase)


module.exports = route