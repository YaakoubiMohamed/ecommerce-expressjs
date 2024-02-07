const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');
const db = require('./models/index');
const sequelize = db.sequelize;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const userRoutes = require('./routes/userRoutes');
app.use("/api",userRoutes)

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