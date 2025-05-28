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

// Erfarenhet schema
let ExperienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, 'Du måste skicka med företagetsnamn']
    },
    jobtitle: {
        type: String,
        required: [true, 'Du måste skicka med arbetsroll']
    },
    location: {
        type: String,
        required: [true, 'Du måste skicka med plats']
    },
    startdate: {
        type: Date,
        required: [true, 'Du måste skicka med startdatum']
    },
    enddate: {
        type: Date,
        required: [true, 'Du måste skicka med slutdatum']
    },
    description: {
        type: String,
        required: [true, 'Du måste skicka med beskrivning']
    }
});

// Inkludera schema i databasen
let Experience = mongoose.model('Experience', ExperienceSchema);

// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Välkommen till detta API'});
});

app.get('/experiences', async(req, res) => {
    try {
        let result = await Experience.find();
        
        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
});

app.get('/experiences/:_id', async(req, res) => {
    let id = req.params._id;
    try {
        let result = await Experience.find({_id: id});
        
        return res.json(result[0]);
    } catch(error) {
        return res.status(500).json(error);
    }
});

app.post('/experiences', async(req, res) => {
    try {
        let result = await Experience.create(req.body);
    
        return res.json({message: 'Inlägget är tillagt',result});
    } catch(error) {
        res.status(400).json(error);
    }
});

app.put('/experiences/:_id', async(req, res) => {
    let id = req.params._id;
    try {
        let result = await Experience.updateOne({_id: id}, {$set: req.body});

        return res.json({message: 'Inlägget har uppdaterats', result});
    } catch(error) {
        res.status(400).json(error);
    }
});

app.delete('/experiences/:_id', async(req, res) => {
    let id = req.params._id;

    try {
        let result = await Experience.deleteOne({_id: id});

        return res.json({message: 'Inlägget har raderats', result});
    } catch (error) {
        res.status(400).json(error);
    }
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});