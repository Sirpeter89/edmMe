const express = require('express');
const asyncHandler = require('express-async-handler');
const { Ticket } = require('../../db/models');

const router = express.Router();

router.post(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const { price, type, ticketImg, sold, eventId } = req.body;
        const ticket = await Ticket.create({
            price,
            type,
            ticketImg,
            sold,
            eventId,
        });

        return res.json({
        ticket,
        });
    }),
    );

module.exports = router;
