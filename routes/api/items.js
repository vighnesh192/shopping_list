const express = require("express");

const router = express.Router();

//Item Model
const Item = require("../../models/Item")

//ALL ROUTES

//route  @GET
//desc   GET ALL ITEMS
//access PUBLIC
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
        .catch(err => res.json(err));
});

//route  @POST
//desc   POST AN ITEM
//access PUBLIC
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.json(err))

    
});

//route  @DELETE
//desc   DELETE AN ITEM
//access PUBLIC
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})
                                   .catch(err => res.json(err)) ))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;