const Music = require('../models/coffee')
const seed = require('../models/seed')

const express = require('express')

const findAllMusic = (req, res) => {  
    coffeeLog.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { coffees: foundLog })
        }
    })
}

const showNewView = (req, res) => {     
    res.render('New')
})

const createNewMusic = (req, res) => {
    if (req.body.wholeBean === "on") {
        req.body.wholeBean = true
    } else {
        req.body.wholeBean = false
    }
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/${req.params.id}/Thanks`)
        }
    })
}

const seedStarterData = (req, res) => {
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
}

const showOneMusic = (req, res) => {
    coffeeLog.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { coffee: foundLog })
        }
    })
}

const showEditView = (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { coffee: foundLog })
        }
    })
}

const updateOneMusic = (req, res) => {

    coffeeLog.findOneAndUpdate({_id: req.params.id},{$inc : {'quantity' : -1}}, (err, updatedMusic) => {
        if (err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/`)
        }
    })
}


const deleteOneMusic = (req, res) => {
    
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/')
        }
    })
})


module.exports = { 
    findAllMusic, 
    showNewView, 
    createNewMusic,
    seedStarterData,
    showOneMusic,
    showEditView,
    updateOneMusic,
    deleteOneMusic
}