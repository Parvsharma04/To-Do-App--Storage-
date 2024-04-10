const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.json({msg: "get all items"})
})


module.exports = router