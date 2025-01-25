const pool = require('../config/dbConnection');

// Get medicines with specific fields
async function getSpecificInventory(req, res) {
  try {
    // We only select MedicationName, ExpirationDate, and Type
    const result = await pool.query(`
      SELECT MedicamentName, ElaborationDate, ExpirationDate, Type, Status
      FROM inventory
      ORDER BY ExpirationDate ASC
    `);

    if (result.length === 0) {
      return res.status(404).json({ message: 'There are no registered medications.' });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error querying inventory:', error);
    return res.status(500).json({ message: 'Error on the server.' });
  }
}

module.exports = { getSpecificInventory };
