const express = require('express');
const asyncHandler = require('express-async-handler');
const { PurchasedTicket } = require('../../db/models');

const router = express.Router();

router.post(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const ticketId = req.params.id;
        const { userId } = req.body;
        const boughtTicket = await PurchasedTicket.create({
            ticketId: ticketId,
            userId: userId,
        });

        return res.json(
            boughtTicket,
        );
    }),
    );

    module.exports = router;
