const express = require('express');
const cors = require('cors');
const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
const port = process.env.PORT || 3012;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger
const swaggerDocumentPath = path.resolve(__dirname, './docs/swagger.yaml');
const swaggerDocument = YAML.parse(fs.readFileSync(swaggerDocumentPath, 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/inventory', inventoryRoutes);

// General error handling
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Error on the server.' });
});

app.listen(port, () => {
  console.log(`Server run in http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
