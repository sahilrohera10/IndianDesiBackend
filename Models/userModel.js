const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
email:{
    type:String
},
password:{
    type:String
},
name:{
    type:String
},
});

module.exports = mongoose.model("userModel", userSchema);
