const express = require('express')
const app = express()
const api = require('./api')



app.use('/api', api)



app.get('/', (req, res)=>{
    res.json({msg: "hi"})
})



app.listen(3000, ()=>{
    console.log('server online at port 3000')
})