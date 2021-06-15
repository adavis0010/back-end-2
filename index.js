const express = require('express')
const cors = require('cors')
const app = express()
const ctrl = require('./controller')

app.use(express.json());
app.use(cors());

const {
    getHouse,
    delHouse,
    createHouse,
    updateHouse
} = require('./controller')

const dataBase = require('./db.json')

app.get('/api/houses', getHouse)
app.delete('/api/houses/:houseId', delHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

const SERVER_PORT = 4004;
app.listen(SERVER_PORT, function() {
    console.log(`Server is running on ${SERVER_PORT}`)
})