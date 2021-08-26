const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config({path:'./config/index.env'})
//Mongodb
const connectDB= require('./config/db');
connectDB()
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
//routes
app.use('/api/user/',require('./routes/auth.route'));
app.get('/',(req,res)=>{
res.send('Homepage')
});
app.use((req,res)=>{
 res.status(404).json({
     message: 'Page Not Found'
 })
});
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`App is listening on Port ${PORT}`)
});