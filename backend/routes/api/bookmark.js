const express = require('express');
const asyncHandler = require('express-async-handler');
const { BookmarkedEvent } = require('../../db/models');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

router.get(
    '/',
    restoreUser,
    asyncHandler(async (req, res) => {
        const {user} = req;
        const bookmarks = await BookmarkedEvent.findAll({
            where:{
                userId: user.id,
            },
        })
        return res.json(
            bookmarks,
        )
    }),
);

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { eventId, userId } = req.body;
        const bookmark = await BookmarkedEvent.create({
            eventId,
            userId,
        });

        return res.json(
        bookmark,
        );
    }),
    );

router.get(
    '/:id(\\d+)',
    restoreUser,
    asyncHandler(async (req, res) => {
        const {user} = req;
        const eventId = req.params.id;
        const bookmark = await BookmarkedEvent.findOne({
            where:{
                eventId: eventId,
                userId: user.id,
            },
        })
        return res.json(
            bookmark,
        )
    }),
);


module.exports = router;
