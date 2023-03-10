const express = require('express') //
const dotenv = require('dotenv').config() // In order to have environnement variables
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

const app = express() // initializes express

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoute'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on ${port}`))