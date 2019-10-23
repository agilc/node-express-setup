'use strict';

const { User } = require('../model/user');

exports.addUser = async (body,res) => {
  try{
        const user = new User(body);
        let result = await user.save(body);
        res.status(200);
        res.json(result);
  }
  catch(error){
        console.log("user service : authenticateUser: catch %o",error);
        res.status(500);
        res.json({
            code:"internal_error",
            message: "Server encountered an error, Please try again after some time"
        });
  } 
}

exports.getUser = async (res) => {
    try{
        let result = await User.find();
        res.status(200);
        res.json(result);
    }
    catch(error){
        console.log("user service : authenticateUser: catch %o",error);
        res.status(500);
        res.json({
            code:"internal_error",
            message: "Server encountered an error, Please try again after some time"
        });
    } 
  }

  exports.editUser = async (body,res) => {
    try{
        let result = await User.findByIdAndUpdate(body.id, body);
        res.status(200);
        res.json(result);
    }
    catch(error){
        console.log("user service : authenticateUser: catch %o",error);
        res.status(500);
        res.json({
            code:"internal_error",
            message: "Server encountered an error, Please try again after some time"
        });
    } 
  }
  
  exports.deleteUser = async (body,res) => {
    try{
        let result = await User.findByIdAndRemove(body.id);
        res.status(200);
        res.json(result);
    }
    catch(error){
        console.log("user service : authenticateUser: catch %o",error);
        res.status(500);
        res.json({
            code:"internal_error",
            message: "Server encountered an error, Please try again after some time"
        });
    } 
  }