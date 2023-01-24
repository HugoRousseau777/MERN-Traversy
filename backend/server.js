const express = require('express') //
const dotenv = require('dotenv').config() // In order to have environnement variables
const port = process.env.PORT || 5000

const app = express() // initializes express

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server running on ${port}`))