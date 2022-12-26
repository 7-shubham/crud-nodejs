const { Router } = require('express');
const User = require('../models/dataModel');

const getAllUser = async(req , res)=>{
    try{
        const users =  await User.find()
        res.status(200).json(users);
    }catch(e){
        console.log('Error' + e);
    }
}

const getUser = async(req , res)=>{

    try{
  
     const userId = await User.findById(req.params.id);
     
      res.status(200).send(userId)
            
     }catch(e){
        console.log('Error' + e);
     }
}

const addUser = async(req , res)=>{

    const newUser =  new User({
        name: req.body.name,
        tech : req.body.tech,
        sub : req.body.sub,
        email:req.body.email
     })
   try{

      const a1 = await newUser.save();
      res.status(200).json(a1);
     
   }catch(e){
    console.log('Error' + e);
   }
    
}

const updateUser = async(req , res)=>{
    try{

        const userUpdate = await User.findById(req.params.id);
        userUpdate.sub = req.body.sub;
        const a1 = await userUpdate.save();
        res.status(200).send("User updated Successfully !")

    }catch(e){
        res.status(404).json({
            "error":"Invalid id"
        })
    }
}

const deleteUser = async(req , res)=>{
    try{ 
          const deleteId = req.params.id;
          const deleteUser = await User.deleteOne({_id:deleteId});
          const deletedSave = await deleteUser.save();
         res.status(200).send("User deleted Successfully !")

    }catch(e){
        res.status(404).send("User not found")
    }
}

module.exports = {
    getAllUser,
    addUser,
    getUser,
    updateUser,
    deleteUser
}