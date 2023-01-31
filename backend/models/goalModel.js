const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // The type will be the id created with each creation of user
        required: true,
        ref: 'User' // Name of the required schema
    },
    text: {
        type: String,
        required: [true, 'please add text']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)