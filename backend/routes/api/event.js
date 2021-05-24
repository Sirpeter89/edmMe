const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Event } = require('../../db/models');

const router = express.Router();

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { name, eventImg, date, description, userId } = req.body;
        const event = await Event.create({
            name,
            eventImg,
            date,
            description,
            userId,
        });

        return res.json({
        event,
        });
    }),
    );

module.exports = router;
