const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


const getGoals = asyncHandler( async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoals = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text fieldgrgsgrz')
    }
    res.status(200).json({message : 'Set goals'})
})

const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `goal ${req.params.id} modified`})
})

const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `goal ${req.params.id} deleted`})
})

module.exports = {
    getGoals, setGoals, updateGoal,deleteGoal
}