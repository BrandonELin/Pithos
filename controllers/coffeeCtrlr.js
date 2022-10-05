const Log = require('../models/coffee')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const coffeeSelectionSchema = new Schema({
    type: { type: String, required: true }, 
    roast: { type: String},
    wholeBean: {type: Boolean}, 
    description: {type: String}
}
)
const coffeeLog = mongoose.model('CoffeeLog', coffeeSelectionSchema)
const seed = require('../models/seed')

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {  
    coffeeLog.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { coffees: foundLog })
        }
    })
})

router.get('/new', (req, res) => {     
    res.render('New')
})

router.post('/', (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/')
        }
    })
})

router.get('/seed', (req, res) => {
    coffeeLog.deleteMany({}, (err, deletedSelections) => {
        if (err) {
            res.status(400).json(err)
        } else {
            coffeeLog.create(seed, (err, createdSelections) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/')
                }
            })
        }
    })
})

router.get('/:id', (req, res) => {
    coffeeLog.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { coffee: foundLog })
        }
    })
})

router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { coffee: foundLog })
        }
    })
})

router.put('/:id', (req, res) => {

    Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/${req.params.id}`)
        }
    })
})


router.delete('/:id', (req, res) => {
    
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/')
        }
    })
})


module.exports = router