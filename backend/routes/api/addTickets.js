const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Ticket } = require('../../db/models');
const { setTokenCookie, restoreUser } = require('../../utils/auth');

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
