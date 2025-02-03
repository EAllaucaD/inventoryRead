const express = require('express');
const { getSpecificInventory } = require('../controllers/inventoryController');
const { authorize } = require('../Middlewares/authMiddleware');

const router = express.Router();

// Route to obtain medicines with specific fields
router.get('/specific', getSpecificInventory, authorize);

module.exports = router;
