require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require ('path');
const nodemailer = require("nodemailer");
const { SERVER_PORT } = process.env
const { seed } = require ('./seed.js');
const { getAirport } = require ('./controller.js');


app.use(express.json());
app.use(express.static('public'));

app.use(cors());

app.post('/seed', seed);
app.get('/airport', getAirport);

app.get('/information', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/information', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: `Message from ${req.body.email}`,
        text: `Message from: ${req.body.name}. My contact info is: ${req.body.email}, ${req.body.phone}. ${req.body.message}`
      }
      transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
          console.error('there was an error: ', err);
          res.send('error');
        } else {
          res.send('success')
      }
    })
})
app.listen(SERVER_PORT, () => console.log (`Server running on port ${ SERVER_PORT }`));

 


