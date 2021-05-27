const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Event } = require('../../db/models');
const { setTokenCookie, restoreUser } = require('../../utils/auth');

const router = express.Router();

router.get(
    '/',
    restoreUser,
    asyncHandler(async (req, res) => {
        const { user } = req;
        const currentUserId = user.dataValues.id
        const events = await Event.findAll({
            where: {
                userId: currentUserId
            },
        })
        return res.json({
            events,
        })
    }),
);

router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const eventId = req.params.id;
        const event = await Event.findOne({
            where:{
                id: eventId
            },
        })
        return res.json({
            event,
        })
    }),
);

router.get(
    '/all',
    asyncHandler(async (req, res) => {
        const events = await Event.findAll();
        return res.json({
            events,
        })
    }),
)

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
