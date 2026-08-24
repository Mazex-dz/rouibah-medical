const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.log("Starting puppeteer for analysis...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set a normal user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    
    // Read urls.json
    let urls = [];
    if (fs.existsSync('urls.json')) {
        const data = fs.readFileSync('urls.json', 'utf-8');
        urls = JSON.parse(data);
    }
    
    if (urls.length === 0) {
        console.log("No URLs found in urls.json");
        await browser.close();
        return;
    }

    console.log(`Found ${urls.length} URLs to analyze.`);
    
    const analysisResults = [];

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`\nAnalyzing URL ${i + 1}/${urls.length}...`);
        
        try {
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
            
            // Wait a little bit for the image and UI to render
            await page.waitForTimeout(3000);
            
            const pageData = await page.evaluate(() => {
                const data = {
                    imageUrls: [],
                    metadata: []
                };

                // Extract all images that look like Google Maps photos
                const images = Array.from(document.querySelectorAll('img'))
                    .map(img => img.src)
                    .filter(src => src.includes('googleusercontent.com'));
                
                // Keep unique image URLs and try to get the highest resolution version
                const uniqueImages = [...new Set(images)];
                data.imageUrls = uniqueImages.map(img => img.replace(/=w\d+-h\d+-k-no/, '=s0'));
                
                // Extract possible metadata from aria-labels and text (uploader, date, title)
                const textNodes = Array.from(document.querySelectorAll('div, span, button'))
                    .map(el => {
                        const ariaLabel = el.getAttribute('aria-label');
                        const text = el.innerText;
                        return ariaLabel ? ariaLabel.trim() : (text ? text.trim() : '');
                    })
                    .filter(text => text.length > 3 && text.length < 100);
                
                data.metadata = [...new Set(textNodes)];
                
                return data;
            });
            
            analysisResults.push({
                originalUrl: url,
                extractedImages: pageData.imageUrls,
                metadata: pageData.metadata
            });
            
            console.log(`Extracted ${pageData.imageUrls.length} images and ${pageData.metadata.length} metadata pieces.`);
            
        } catch (err) {
            console.error(`Failed to analyze URL ${i + 1}: ${err.message}`);
            analysisResults.push({
                originalUrl: url,
                error: err.message
            });
        }
    }

    fs.writeFileSync('analysis_results.json', JSON.stringify(analysisResults, null, 2));
    console.log("\nAnalysis complete. Results saved to analysis_results.json");
    
    await browser.close();
})();
