// Load a new quote when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadNewQuote();
});

// Function to type out text with a typing effect
function typeText(element, text, speed = 50) {
    return new Promise((resolve) => {
        element.textContent = '';
        let i = 0;
        
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                resolve();
            }
        }, speed);
    });
}

// Function to load a new quote from the server
async function loadNewQuote() {
    try {
        // Show loading state
        document.getElementById('quoteText').textContent = 'Loading...';
        document.getElementById('authorText').querySelector('cite').textContent = 'Loading...';
        
        // Fetch new quote from API
        const response = await fetch('/api/quote');
        const data = await response.json();
        
        // Clear loading state
        document.getElementById('quoteText').textContent = '';
        document.getElementById('authorText').querySelector('cite').textContent = '';
        
        // Type out the quote with typing effect
        await typeText(document.getElementById('quoteText'), data.quote, 50);
        
        // Small delay before typing the author
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Type out the author
        await typeText(document.getElementById('authorText').querySelector('cite'), data.author, 50);
        
    } catch (error) {
        console.error('Error loading quote:', error);
        document.getElementById('quoteText').textContent = 'Error loading quote. Please try again.';
        document.getElementById('authorText').querySelector('cite').textContent = 'Error';
    }
}
