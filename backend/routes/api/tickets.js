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

router.patch(
    '/:id(\\d+)',
    restoreUser,
    asyncHandler(async (req, res) => {
        const ticketId = req.params.id;
        const updatedticket = await Ticket.findByPk(ticketId)
        updatedticket.update({
            sold: true,
        })
        return res.json(
            updatedticket,
        )
    }),
);

module.exports = router;
