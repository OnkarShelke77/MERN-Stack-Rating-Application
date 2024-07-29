const express = require('express');
const { addStore, getStores, rateStore } = require('../controllers/storeController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, adminMiddleware, addStore);
router.get('/', authMiddleware, getStores);
router.post('/rate', authMiddleware, rateStore);

module.exports = router;

