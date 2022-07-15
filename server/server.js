const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


const currentWeatherUrl = "https://api.weatherapi.com/v1/current.json?key=fffb84950e714159aa5160418221007&q=new york&aqi=yes"
// baseUrl = "http://api.weatherapi.com/v1";
// apiKey = fffb84950e714159aa5160418221007







app.listen(4000, () => console.log ("Server running on port 4000"));

 

