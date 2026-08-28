// Product matching debugging tool - non-visible version
document.addEventListener('DOMContentLoaded', function() {
    console.log('Product matching debug tool loaded - display disabled');
    
    // This code now only logs information to the console without visible UI elements
    setTimeout(() => {
        const productItems = document.querySelectorAll('.product-item');
        
        productItems.forEach((item, index) => {
            // Determine product key from position (for console logging only)
            let productKey = '';
            const productNumber = index + 1;
            if (productNumber === 1) productKey = '1st';
            else if (productNumber === 2) productKey = '2nd';
            else if (productNumber === 3) productKey = '3rd';
            else if (productNumber >= 4 && productNumber <= 20) productKey = productNumber + 'th';
            
            // Just log the info instead of showing visual indicators
            console.debug(`Product #${index + 1} matches with key: ${productKey}`);
        });
        
        console.log(`Mapped ${productItems.length} products to their keys`);
    }, 1000);
});
