var express = require('express');
var router = express.Router();
const Coffee = require('../models/coffee');

// GET /api/coffee
router.get('/', (req,res) => {
    Coffee.find({})
            .exec()
            .then(
                coffee => res.json({coffee})
            )
            .catch(() => res.sendStatus(403));
})

// POST /api/coffee/create
// TODO: Add auth middleware
router.post('/create', (req,res,next) => {
    Coffee.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })
    .then(
        res.json({
            message: "success"
        })
    ).catch(() => res.sendStatus(403));
})

router.get('/:id', (req,res) => {
    Coffee.findById(req.params.id)
            .exec()
            .then(
                coffee => res.json(coffee)
            )
            .catch( ()=> res.sendStatus(403));
})

module.exports = router;
