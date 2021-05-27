// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventRouter = require('./event.js');
const ticketRouter = require('./addTickets.js')
const purchaseTicketRouter = require('./tickets.js')
const addToBoughtTicketsRouter = require('./purchaseTicket')

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        userName: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));

const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/event', eventRouter);

router.use('/addTickets', ticketRouter);

router.use('/tickets', purchaseTicketRouter);

router.use('/buyTickets', addToBoughtTicketsRouter);

module.exports = router;
