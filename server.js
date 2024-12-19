// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/newsApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Define a simple schema and model
const newsSchema = new mongoose.Schema({
    title: String,
    content: String
});
const News = mongoose.model('News', newsSchema);

// Routes
// GET route
app.get('/', (req, res) => {
    res.send('Welcome to the News Application Backend');
});

// POST route to add news
app.post('/news', async (req, res) => {
    try {
        const { title, content } = req.body;
        const news = new News({ title, content });
        await news.save();
        console.log('Received Data:', req.body);
        res.status(201).send('News item added successfully');
    } catch (error) {
        res.status(500).send('Error adding news item');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


 
 
