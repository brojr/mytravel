const express = require('express')
const path = require('path')
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser')
const cors = require('cors')
const {User} = require('./user')


app.use(cors()) // 다른 포트와 통신하기 위해 필요
app.use(bodyParser.json()) // POST형식에서 데이터를 받기위해 필요
app.use(express.static(path.join(__dirname,'..','client/build')))

app.get('/',(req,res)=>{
    console.log(req.body)
    res.sendFile(path.join(__dirname,'..','client/build/index.html'))
});

app.post('/login',(req,res)=>{
    const {userid,pw} = req.body;
    User.findOne({
        userid:userid,pw:pw
    }).exec((err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){
            res.send(result)
        }
        else{
            res.send('fail')
        }
    })
    
    
})
app.post('/register',(req,res)=>{
    const {username,userid,pw} = req.body
    var user = new User({username:username,userid:userid,pw:pw})
    user.save((err,result)=>{
        if (result){
            res.send('success')
        }
        else if(err){
            res.send('fail')
            console.log(err.message)
        }
        
    })
})

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});

// 라우팅은 리액트에서 실행
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','client/build/index.html'))
});