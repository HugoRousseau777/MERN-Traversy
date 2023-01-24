const express = require('express') //
const dotenv = require('dotenv').config() // In order to have environnement variables
const port = process.env.PORT || 5000

const app = express() // initializes express

app.get('/api/goals', (req, res) => {
    res.status(200).json({message: 'Get goals'}) 
})

app.listen(port, () => console.log(`Server running on ${port}`))