const express = require('express')
const router = express.Router()
const items = require('./items')

const del = require('./del')
router.get('/', (req, res)=>{
    res.json({msg: "This is TODO API"})
})

router.use('/items', items)
router.use('/del', del)

module.exports = router