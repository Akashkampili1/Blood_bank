const express = require('express');
const app = express();
const routes = require('./routes/routes');
const connection=require("./db")


// Middleware
app.use(express.json());
// Routes
app.use('/api', routes);
app.use(express.static('public'));

// Error handling middleware
app.use((err, req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
