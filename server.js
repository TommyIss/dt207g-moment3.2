/**
 * Moment 3.2 Webbtjänst
 */
let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');

// Initerar Express
let app = express();
let port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Anslutning till MongoDB
mongoose.connect('mongodb://localhost:27017/cv').then(() => {
    console.log('Ansluten till MongoDB');
}).catch((error) => {
    console.log('Fel vid anslutning till databasen: ' + error);
});

// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Välkommen till detta API'});
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});