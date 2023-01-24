const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Get goals'})})
router.post('/', (req, res) => {
    res.status(200).json({message: 'Set goals'})})
router.put('/:id', (req, res) => {
    res.status(200).json({message: `goal ${req.params.id} modified`})}) 
router.delete('/:id', (req, res) =>{
    res.status(200).json({message: `goal ${req.params.id} deleted`})})

module.exports = router