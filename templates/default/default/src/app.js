const express = require('express');
const app  = express();

const cookieParser= require('cookie-parser');
app.use(cookieParser());

const UserRoutes = require('./routes/user.routes');

const cors = require('cors');
app.use(cors({
  origin:  [""], // add the url of website u want to be accessed by ur frontend
  credentials: true
}));

app.use(express.json());

app.use('/' , UserRoutes); 
app.get('/' ,(req , res)=>{
    res.send("HEY ITS RUNNING")
})



module.exports = app;