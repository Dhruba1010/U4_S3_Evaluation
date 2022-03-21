const express = require('express');

const { body, validationResult } = require('express-validator');

const router = express.Router();

const Book = require('../models/book.model');

router.post ('', 
    body('likes').isLength(min=0),
    body('coverImage').notEmpty().isLength(max=1),
    body('content').notEmpty(),
async(req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const book = await Book.create(req.body);
        return res.status(201).send(book);
    }
    catch (err) {
        return res.status(500).send({message:err.message});
    }
})