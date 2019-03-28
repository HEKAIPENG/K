var express = require('express');
var router = express.Router();
var user= require('../models/user');
var md5=require('md5-node');

//用户登录
router.post('/login',function(req,res,next){
	user.findByUserLogin(req.body.username,md5(req.body.password),function(err,userSave){
		if(userSave.length != 0 ){
			res.json({status:0,message:"登录成功"})
//			var name = req.body.username;
//			var statr = '1';
//			user.update(name,statr); //修改登录状态	
		}else{
			res.json({status:1,message:"用户名或密码错误"})
		}
	})
})
//用户注册
router.post('/register' , function(req,res,next){
	user.findByUsername(req.body.username,function(err,userSave){
		if(userSave.length != 0){
			res.json({status:1,message:"用户名已注册"})
		}else{
			var registerUser = new user({
				username:req.body.username,
				password:md5(req.body.password),
				start:0
			})
			registerUser.save(function(){
				res.json({status:0,message:"注册成功"})
			})
		}
	})
})
//用户查询
router.post('/select' , function(req,res,next){
	user.findByUserLogins(function(err,userSave){
		if(userSave.length != 0){
				res.json({status:0,message:"查询成功",data:userSave})
			}else{
				res.json({status:1,message:"查询失败"})
		}
	})
})
module.exports = router;
