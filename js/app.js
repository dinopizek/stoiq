// Load a new quote when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadNewQuote();
});

// Function to load a new quote from the server
async function loadNewQuote() {
    try {
        // Show loading state
        document.getElementById('quoteText').textContent = 'Loading...';
        document.getElementById('authorText').querySelector('cite').textContent = 'Loading...';
        
        // Fetch new quote from API
        const response = await fetch('/api/quote');
        const data = await response.json();
        
        // Update the quote and author
        document.getElementById('quoteText').textContent = data.quote;
        document.getElementById('authorText').querySelector('cite').textContent = data.author;
        
    } catch (error) {
        console.error('Error loading quote:', error);
        document.getElementById('quoteText').textContent = 'Error loading quote. Please try again.';
        document.getElementById('authorText').querySelector('cite').textContent = 'Error';
    }
}
