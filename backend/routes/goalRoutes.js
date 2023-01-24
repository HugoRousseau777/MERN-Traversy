const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')
const {postGoals, setGoals, updateGoal, deleteGoal} = require('../controllers/goalController')

/*router.get('/', (req, res) => {
    res.status(200).json({message: 'Get goals'})})*/ 
    // What's above is replaced with : 
    router.get('/', getGoals)

router.post('/', setGoals)

router.put('/:id', updateGoal) 

router.delete('/:id', deleteGoal)

module.exports = router