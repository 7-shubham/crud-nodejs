const express = require('express');

const app = express();

const router = require('./routers/apirouter')

const dbConnection = require('./Dbconnect');

app.use(express.json());

app.use('/api' , router);

app.get('/' , (req , res)=>{
    res.status(200).json({
        "message":"Hello , Welcome to crud operation tutorial on nodejs."
    })
})


const PORT = 4300;

dbConnection();

app.listen(PORT , ()=>{
    console.log(`Server is running on port : ${PORT}`);
})