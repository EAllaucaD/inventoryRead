const express = require('express');
const { getSpecificInventory } = require('../controllers/inventoryController');

const router = express.Router();

// Route to obtain medicines with specific fields
router.get('/specific', getSpecificInventory);

module.exports = router;
