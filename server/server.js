const express = require('express')
const path = require('path')
const app = express();

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