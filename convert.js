const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Simple regex replacements for HTML to JSX
html = html.replace(/class=/g, 'className=');
html = html.replace(/for=/g, 'htmlFor=');
html = html.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Close unclosed tags
html = html.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
html = html.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
html = html.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
html = html.replace(/<br([^>]*[^\/])>/g, '<br$1 />');
html = html.replace(/<meta([^>]*[^\/])>/g, '<meta$1 />');
html = html.replace(/<link([^>]*[^\/])>/g, '<link$1 />');

// Remove some attributes that cause issues or need camelCase (just basic ones)
html = html.replace(/tabindex=/g, 'tabIndex=');
html = html.replace(/onclick=/g, 'onClick=');
html = html.replace(/onsubmit=/g, 'onSubmit=');

// Fix inline styles (very naive approach)
// It's safer to just remove them or assume there aren't many complex ones.
html = html.replace(/style="([^"]*)"/g, (match, p1) => {
    const styleObj = {};
    p1.split(';').forEach(rule => {
        if (!rule.trim()) return;
        const [key, value] = rule.split(':');
        if (key && value) {
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            styleObj[camelKey] = value.trim();
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

fs.writeFileSync('converted.jsx', html);
console.log("Converted successfully.");
