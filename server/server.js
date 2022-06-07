const express = require('express')
const path = require('path')
const app = express();
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
console.log(mongoose)

app.use(express.static(path.join(__dirname,'..','client/build')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','client/build/index.html'))
});

app.listen(8080,() =>{
    console.log('Listening port 8080...')
});

// 라우팅은 리액트에서 실행
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client/build/index.html'))
});