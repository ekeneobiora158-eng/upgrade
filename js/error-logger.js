// Error logger for silent debugging - console only
document.addEventListener('DOMContentLoaded', function() {
    console.log('Error logger initialized - silent mode');
    
    // Set up global error handling - console only
    window.onerror = function(message, source, lineno, colno, error) {
        console.error('JavaScript Error:', message);
        console.error('Source:', source, 'Line:', lineno, 'Column:', colno);
        console.error('Error object:', error);
        
        // No visual indicators, just console logging
        
        return false; // Let the error propagate
    };
    
    // Add click tracking for the video buttons (silent)
    const videoButtons = document.querySelectorAll('.see-video-btn');
    if (videoButtons.length > 0) {
        console.log(`Monitoring ${videoButtons.length} video buttons`);
        
        videoButtons.forEach((btn, index) => {
            // Add a data attribute to identify the button (invisible)
            btn.setAttribute('data-btn-index', index);
            
            // Add a click tracker before the main handler
            btn.addEventListener('click', function(e) {
                console.log(`Video button ${this.getAttribute('data-btn-index')} clicked`);
                
                // Try to identify the closest product item
                const productItem = this.closest('.product-item');
                if (productItem) {
                    const imgEl = productItem.querySelector('.product-image img');
                    console.log('Product image:', imgEl ? imgEl.src : 'Not found');
                } else {
                    console.error('Could not find parent product-item element');
                }
            }, true); // Using capture phase to ensure this runs first
        });
    } else {
        console.warn('No video buttons found for monitoring');
    }
});
