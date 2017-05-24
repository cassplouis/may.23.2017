var mongoose = require("mongoose");

//schema: 
var User = new mongoose.Schema({
	username:String, 
	password:String
	token: String
	});
	
//functionality we'll use to require the script
module.exports = mongoose.model("User", User);