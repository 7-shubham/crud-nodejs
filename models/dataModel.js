const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
       name:{
        type:String,
        required:true
       },
       tech:{
        type:String,
        required:true
       },
       sub:{
        type:Boolean,
        required:true,
        default:false
       },
       email:{
        type:String,
        require:true
       }
    }

)

module.exports = mongoose.model('User',  userSchema);
