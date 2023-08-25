const express = require('express');

const app = express();
const PORT = 3001;

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

app.get("/pets"), (req, res) => {
    knex('pet_store')
    .select('*')
    .then((pets => {
        res.send(pets);
    })
)}

app.listen(PORT, () => {
    console.log(PORT);
})