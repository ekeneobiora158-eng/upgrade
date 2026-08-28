// This script silently checks for missing media files and reports them to the console
document.addEventListener('DOMContentLoaded', function() {
    // Known video files from your folder structure
    const availableVideos = [
        'VIDEO/1st.mp4', 'VIDEO/2nd.mp4', 'VIDEO/3rd.mp4', 'VIDEO/4th.mp4',
        'VIDEO/5th.mp4', 'VIDEO/6th.mp4', 'VIDEO/7th.mp4', 'VIDEO/9th.mp4',
        'VIDEO/10th.mp4', 'VIDEO/12th.mp4', 'VIDEO/13th.mp4', 'VIDEO/16th.mp4',
        'VIDEO/17th.mp4', 'VIDEO/19th.mp4'
        // Note: 8th, 11th, 14th, 15th, 18th, and 20th are missing
    ];

    // Report function to check for missing videos (console only)
    function checkMissingVideos() {
        // Check if we have access to the productData
        if (typeof productData !== 'undefined') {
            console.group('Media Check Report (Silent)');
            console.log('This report helps identify missing videos for products');
            
            // Check each product key (console only)
            Object.keys(productData).forEach(key => {
                const videoSrc = productData[key].videoSrc;
                if (!videoSrc) {
                    console.warn(`Missing video for product ${key}`);
                } else {
                    // Check if the video exists in our known list
                    if (!availableVideos.includes(videoSrc)) {
                        console.warn(`Video ${videoSrc} for product ${key} may not exist in the VIDEO folder`);
                    } else {
                        console.log(`Video ${videoSrc} for product ${key} is available`);
                    }
                }
            });
            console.groupEnd();
        }
    }
    
    // Run the check after a short delay to ensure productData is loaded
    setTimeout(checkMissingVideos, 2000);
});
