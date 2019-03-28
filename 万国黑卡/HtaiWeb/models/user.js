var mongoose = require('../common/mongdb');
//数据集
var user = new mongoose.Schema({
	start:String,			//登录状态 0:false 1:true
	username:String,
	password:String

})
//使用用户名查找 callBack回调函数
user.statics.findByUsername = function(name,callBack){
	this.find({username:name},callBack);
}
//用户登录
user.statics.findByUserLogin = function(name, password,callBack){
	this.find({username:name,password:password},callBack);
}
//根据id查询
user.statics.findByUserLogins = function(callBack){
	this.find({},callBack);
} 
////修改状态
//user.statics.update= function(callBack){
//	this.update({username:name},{$set:{start:start}});
//} 
//数据库映射
var userModel = mongoose.model('user',user);

module.exports = userModel;
