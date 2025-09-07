const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root directories
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/html', express.static('html'));

// Serve Bootstrap CSS and JS from node_modules
app.use('/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/bootstrap-icons', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));

// Load quotes from JSON file
function loadQuotes() {
    try {
        const quotesData = fs.readFileSync('quotes.json', 'utf8');
        return JSON.parse(quotesData);
    } catch (error) {
        console.error('Error loading quotes:', error);
        return { quotes: [] };
    }
}

// API endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const quotesData = loadQuotes();
    const quotes = quotesData.quotes;
    
    if (quotes.length === 0) {
        return res.json({ 
            quote: "No quotes available", 
            author: "Unknown" 
        });
    }
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    res.json(randomQuote);
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
