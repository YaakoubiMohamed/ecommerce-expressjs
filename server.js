const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models/index');
const sequelize = db.sequelize;

const app = express();

sequelize.authenticate()
.then(()=>{
    console.log(' connection reussi')
})
.catch(err =>{
    console.error('connection echoue',err)
})


app.listen(3000, () => {
    console.log('server running on port 3000')
})