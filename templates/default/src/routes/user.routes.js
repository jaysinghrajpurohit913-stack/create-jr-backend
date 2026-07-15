const express =  require('express');
const route = express.Router();
const {UserInput , UserLogin , logout} = require('../controller/user.controller');

route.post('/user/signup', UserInput,(req , res ) =>{
    res.send({
      message : "signup done"
    })

})

route.post('/user/login' , UserLogin , (req , res)=>{
    res.send({
      message : "login done"
    })
})

route.post('/user/logout' , logout)




module.exports = route;