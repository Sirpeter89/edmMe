const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Ticket } = require('../../db/models');
const { setTokenCookie, restoreUser } = require('../../utils/auth');

const router = express.Router();

router.get(
    '/:id(\\d+)',
    restoreUser,
    asyncHandler(async (req, res) => {
        const eventId = req.params.id;
        const tickets = await Ticket.findAll({
            where: {
                eventId: eventId
            },
        })
        return res.json({
            tickets,
        })
    }),
);

module.exports = router;
