// DB부분
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/my_db'
const db = mongoose.connect(uri,(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('Connected')
    }
})

var UserSchem = mongoose.Schema({
    username:{type:String,require:true},
    userid:{type:String,require:true,unique:true},
    pw:{type:String,require:true},
})
var User = mongoose.model('User',UserSchem);
//////////////////////////////////////////////////////////////
module.exports = {User}