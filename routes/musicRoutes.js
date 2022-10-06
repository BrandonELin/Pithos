const express = require('express')

const router = express.Router()

const { 
    findAllMusic, 
    showNewView, 
    createNewMusic,
    seedStarterData,
    buyMusic,
    thanksMusic,
    showOneMusic,
    showEditView,
    updateOneMusic,
    deleteOneMusic
} = require('../controllers/musicCtrlr')

router.get('/', findAllMusic)

router.get('/new', showNewView)

router.post('/', createNewMusic)

router.get('/seed', seedStarterData)

router.get('/:id/Thanks', buyMusic)

router.put('/:id/Thanks', thanksMusic)

router.get('/:id', showOneMusic)

router.get('/:id/edit', showEditView)

router.put('/:id', updateOneMusic)

router.delete('/:id', deleteOneMusic)


module.exports = router