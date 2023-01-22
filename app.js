const express = require('express');
const cors = require('cors');

//----------- Initializations -----------//
const app = express();
const PORT = process.env.PORT || 5000;

//----------- Middlewares & Routes -----------//
app.use(cors());
app.use('/api/properties', require('./routes/propertiesRoutes'));
app.use('/', (req, res) => {
  res.json({
    message:
      'Welcome to the moderne api, to access the properties information go to /api/properties',
  });
});

//--------------- Run server ---------------//
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
