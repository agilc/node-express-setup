'user strict';
const userService = require('../service/user');

exports.addUser = async (req,res) => {
    let body = req.body;
    if(!body.name){
        res.status(400);
        res.json({
            code:"input_data_issue",
            message: "name is required!"
        });
    }
    if(!body.email){
        res.status(400);
        res.json({
            code:"input_data_issue",
            message: "email is required!"
        });
    }
    userService.addUser(body, res);
  }
  
exports.getUser = async (req,res) => {
    userService.getUser( res);
  }
  
exports.editUser = async (req,res) => {
    let body = req.body;
    if(!body.id){
        res.status(400);
        res.json({
            code:"input_data_issue",
            message: "id is required!"
        });
    }
    userService.editUser(body, res);
  }
  
exports.deleteUser = async (req,res) => {
    let body = req.body;
    if(!body.id){
        res.status(400);
        res.json({
            code:"input_data_issue",
            message: "id is required!"
        });
    }
    userService.deleteUser(body, res);
  }