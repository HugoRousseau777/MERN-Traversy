const express = require('express')
const router = express.Router()

app.get('/', (req, res) => {
    res.status(200).json({message: 'Get goals'}) 
})

module.exports = router