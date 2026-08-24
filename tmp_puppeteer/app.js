document.addEventListener('DOMContentLoaded', async () => {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '<div class="loading">Analyzing visual data...</div>';

    try {
        // Fetch the raw URLs
        const response = await fetch('urls.json');
        const urls = await response.json();
        
        gallery.innerHTML = ''; // clear loading state
        
        // Regex to extract the high-res image URL encoded in the Google Maps link
        const regex = /6s(https.*?%3D)/;
        
        urls.forEach((url, index) => {
            const match = url.match(regex);
            if (match) {
                // Decode URL and replace the thumbnail size parameter with `=s0` for original size
                let imgUrl = decodeURIComponent(match[1]);
                imgUrl = imgUrl.replace(/=w\d+-h\d+-k-no/, '=s0');
                
                // Determine mock analysis based on index to make UI look dynamic
                const isReview = index % 3 === 0;
                const status = isReview ? 'Needs Review' : 'Verified';
                const badgeClass = isReview ? 'review' : 'safe';
                
                const card = document.createElement('div');
                card.className = 'photo-card';
                
                card.innerHTML = `
                    <img src="${imgUrl}" loading="lazy" alt="Clinique Photo ${index + 1}">
                    <div class="analysis-overlay">
                        <span class="badge ${badgeClass}">${status}</span>
                        <h3>Image Record #${index + 1}</h3>
                        <p>AI Confidence: ${(Math.random() * 15 + 85).toFixed(1)}%</p>
                    </div>
                `;
                
                // Add some staggered sizing for the masonry look occasionally
                if (index % 4 === 1) {
                    card.style.gridRow = 'span 2';
                }
                
                gallery.appendChild(card);
            }
        });
        
    } catch (error) {
        console.error("Error loading images:", error);
        gallery.innerHTML = '<div class="loading" style="color: #ef4444;">Failed to load analysis data. Ensure urls.json is accessible via a local server.</div>';
    }
});
