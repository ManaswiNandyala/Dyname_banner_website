const express = require('express');
const bodyParser = require('body-parser');
const bannerRoutes = require('./routes/banner'); // Import the banner routes

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', bannerRoutes);  // Use the banner routes

app.get('/', (req, res) => {
    res.send('Welcome to the backend of the Dynamic Banner Website!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
