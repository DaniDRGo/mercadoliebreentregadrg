const express = require('express')
const app = express()
const path = require ('path')
const port = process.env.PORT
app.use(express.static('public'))
app.listen(port,()=>{
    console.log("servidor levantado")
})
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/home.html'))
})