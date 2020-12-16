const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// @route   /api/items
// @desc    GET all items
// @access  PUBLIC
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// @route   /api/items
// @desc    Create an item
// @access  PUBLIC
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then(item => res.json(item));
});

module.exports = router;