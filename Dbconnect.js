const mongoose = require('mongoose');

const dbConnection = ()=>{
    const mongoURL = "mongodb+srv://shubham-info:23Hf9xpNoQ591sDY@cluster0.ndwniti.mongodb.net/?retryWrites=true&w=majority";

    try{

        mongoose.connect(mongoURL , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }, ()=>{
            console.log("DB connection is successfull.")
        })

    }catch(e){
        console.log('DB connection error' + e);
    }
}

module.exports = dbConnection;