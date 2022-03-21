const express = require('express');

const { body, validationResult } = require('express-validator');

const router = express.Router();

const Comment = require('../models/comment.model');

router.post ('', 
    body('body').notEmpty(),
async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const comment = await Comment.create(req.body);
        return res.status(201).send(comment);
    }
    catch (err) {
        return res.status(500).send({message:err.message});
    }
})