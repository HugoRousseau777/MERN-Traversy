const getGoals = (req, res) => {
    res.status(200).json({message : 'get goals'})
}

const setGoals = (req, res) => {
    console.log(req.body)
    res.status(200).json({message : 'Set goals'})
}

const updateGoal = (req, res) => {
    res.status(200).json({message: `goal ${req.params.id} modified`})
}
const deleteGoal = (req, res) => {
    res.status(200).json({message: `goal ${req.params.id} deleted`})
}

module.exports = {
    getGoals, setGoals, updateGoal,deleteGoal
}