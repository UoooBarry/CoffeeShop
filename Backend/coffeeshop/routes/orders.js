const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const { check, validationResult } = require('express-validator');
const Coffee = require('../models/coffee');

router.get('/',(req,res) => {
    Order.find({})
    .exec()
    .then(
        orders => res.json({orders})
    )
    .catch(() => res.sendStatus(403));
});

router.post('/create', [
    check('name').not().isEmpty().withMessage('Name cannot be empty'),
    check('items').not().isEmpty().withMessage('Cannot order no items'),
    check('delivery').not().isEmpty().withMessage('Must select a delivery method'),
    check('contact').isLength({min:10, max:10}).withMessage('Contact number should be 10 digits').matches(/^[0][0-9]*$/).withMessage('Contact must be numbers start with 0'),
] ,async (req,res) => {
    const name = req.body.name;
    const items = req.body.items;
    const delivery = req.body.delivery;
    const address = req.body.address;
    const contact = req.body.contact;

    const errs = validationResult(req);
    if(!errs.isEmpty()){
        let errors = [];
        errs.array().forEach(
            err => errors.push(err.msg)
        )
        res.json({
            message: "fail",
            errors});
        
        return;
    }

    const price = await calculateTotal(items);

    Order.create({
        name: name,
        items: items,
        delivery: delivery,
        contact: contact,
        address: address,
        total: price
    })
        .then(
            () => {
                res.json({
                    message: "success"
                })
            }
        )
        .catch(
            () => {res.sendStatus(403)}
        );

});

const calculateTotal = async (Ids) => {
    let sum = 0;
    for await(const id of Ids){
        const item = await Coffee.findById(id);
        sum+= item.price;
    }
    return sum;
}
module.exports = router;
