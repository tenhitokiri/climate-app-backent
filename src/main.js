const express = require('express');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.json())
app.use(cors())

const apiKey = '52b031435c8eeffb2ae731f6e05aa5c1'

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ ciudad }& appid=${ apiKey }& units = metric`)

const cities = [
    {
        id: 1,
        name: 'Santiago',
        country: 'Chile',
        coord: {
            lon: -70.6667,
            lat: -33.45
        }
    },
    {
        id: 2,
        name: 'Bogota',
        country: 'Colombia',
        coord: {
            lon: -70.6667,
            lat: -33.45
        }
    },
    {
        id: 3,
        name: 'Buenos Aires',
        country: 'Argentina',
        coord: {
            lon: -70.6667,
            lat: -33.45
        }
    },
]

//RUTAS
app.get('/', (req, res) => {
    const message = `La api esta en / api.`;
    res.json({
        message
    });
});

app.get('/api/', (req, res) => {
    res.json(cites)
})

app.post('/api/', (req, res) => {
    const { name, country, coord } = req.body


    res.json(cites)
})

//404 handle
app.use((req, res, next) => {
    res.status(404).json({
        err: 'Error, Ruta no encontrada'
    });
    next();
});

module.exports = app;
