const Music = require('../models/music')
const seed = require('../models/seed')

const findAllMusic = (req, res) => {  
    Music.find({}, (err, foundMusic) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { music: foundMusic })
        }
    })
}

const showNewView = (req, res) => {     
    res.render('New')
}

const createNewMusic = (req, res) => {
    Music.create(req.body, (err, createdMusic) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/`)
        }
    })
}

const seedStarterData = (req, res) => {
    Music.deleteMany({}, (err, deletedSelections) => {
        if (err) {
            res.status(400).json(err)
        } else {
            Music.create(seed, (err, createdSelections) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/')
                }
            })
        }
    })
}

const buyMusic = (req,res) => {
    Music.findById(req.params.id, (err,currentSong) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Thanks', {music: currentSong})
        }
    })
}

const thanksMusic = (req,res) => {
    Music.findOneAndUpdate({_id: req.params.id},{$inc : {'quantity' : -1}}, (err, updatedProduct) => {
        if (err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/${req.params.id}`)
        }
    })
}

const showOneMusic = (req, res) => {
    Music.findById(req.params.id, (err, foundMusic) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { music: foundMusic })
        }
    })
}

const showEditView = (req, res) => {
    Music.findById(req.params.id, (err, foundMusic) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { music: foundMusic })
        }
    })
}

const updateOneMusic = (req, res) => {

    Music.findOneAndUpdate(req.params.id, req.body, (err, foundMusic) => {
        if (err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/`)
        }
    })
}


const deleteOneMusic = (req, res) => {
    
    Music.findByIdAndDelete(req.params.id, (err, deletedMusic) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/')
        }
    })
}


module.exports = { 
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
}