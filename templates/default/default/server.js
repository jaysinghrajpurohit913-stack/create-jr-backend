require('dotenv').config();
const app = require('./src/app');

const connectiontoDB = require('./src/config/db');
connectiontoDB();




app.listen(process.env.port ,()=>{
    console.log(`Server is running on port ${process.env.port}`);
}) 