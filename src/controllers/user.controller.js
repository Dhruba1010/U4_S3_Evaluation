const express = require('express');

const { body, validationResult } = require('express-validator');

const router = express.Router();

const User = require('../models/user.model');

router.post ('', 
    body('firstName').not().isEmpty().isLength(min=3, max=30),
    body('lastName').isLength(min=3, max=30),
    body('age').not().isEmpty().isLength(min=1, max=150),
    body('email').not().isEmpty(),
    body('profileImage').notEmpty(min=1),
async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = await User.create(req.body);
        return res.status(201).send(user);
    }
    catch (err) {
        return res.status(500).send({message:err.message});
    }
});