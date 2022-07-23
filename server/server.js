require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require ('path');
const { SERVER_PORT } = process.env
const { seed } = require ('./seed.js');
const { getAirport } = require ('./controller.js');


app.use(express.json());
app.use(cors());

app.post('/seed', seed)

app.get('/airport', getAirport);

app.post


app.listen(SERVER_PORT, () => console.log (`Server running on port ${ SERVER_PORT }`));

 


