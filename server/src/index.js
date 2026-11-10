const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes (optional, if you want to use your products route)
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Shopease Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});