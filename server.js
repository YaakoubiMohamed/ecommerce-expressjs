require("dotenv").config();
const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
  
const db = require('./models/index');
  
const  sequelize = db.sequelize;
   
const app = express();
   
const PORT= process.env.APP_PORT;
   
app.use(bodyParser.json());
app.use(cors());
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
  
const userRoutes = require('./routes/userRoutes');
const categorieRoutes = require('./routes/categorieRoutes');
const produitRoutes = require('./routes/produitRoutes');
const commandeRoutes = require('./routes/commandeRoutes')
const ligneCommandeRoutes = require('./routes/ligneCommandeRoutes')
const panierRoutes = require('./routes/panierRoutes')


app.use('/api', userRoutes);
app.use("/api",categorieRoutes)
app.use("/api",produitRoutes)
app.use("/api",commandeRoutes)
app.use("/api",ligneCommandeRoutes)
app.use("/api",panierRoutes)

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
  
app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});   
  
module.exports = app;