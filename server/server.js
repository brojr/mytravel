const express = require('express')
const path = require('path')
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser')
const cors = require('cors')

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
    id:String,
    pw:String
})
var User = mongoose.model('User',UserSchem);
// console.log(mongoose)

app.use(cors()) // 다른 포트와 통신하기 위해 필요
app.use(bodyParser.json()) // POST형식에서 데이터를 받기위해 필요
app.use(express.static(path.join(__dirname,'..','client/build')))

app.get('/',(req,res)=>{
    console.log(req.body)
    res.sendFile(path.join(__dirname,'..','client/build/index.html'))
});

app.post('/login',(req,res)=>{
    const id = req.body.id;
    const pw = req.body.pw;
    var user = new User({id:id,pw:pw})
    User.findOne({
        id:id,pw:pw
    }).exec((err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){
            res.send('success')
        }
        else{
            res.send('fail')
        }
    })
    // user.save((err,result)=>{
    //     if(err){
    //         console.log(err)
    //     }
    // })
    
})

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});

// 라우팅은 리액트에서 실행
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','client/build/index.html'))
});