require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getAirport: (req, res) => {
    const { zipcode } = req.query;
    sequelize.query(`
    select airport
    from nycairports
    where zip_code IN ('${zipcode}')
    `).then(dbRes => {res.status(200).send(dbRes[0])}).catch(err => console.log(err));
    }

};

