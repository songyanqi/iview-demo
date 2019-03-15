const express = require("express")

var server = express()

server.listen(10086 , console.log( `this server is running at 10086 `) )

server.get('/login/user' , ( req , res ) =>{
    res.send({
        msg :'ok',
        code : 0,
    })
})