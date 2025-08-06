// Main JavaScript functionality for Zahra's portfolio website

// Utility function to load JSON data
async function loadJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading JSON:', error);
        return null;
    }
}

// Function to create artwork HTML
function createArtworkHTML(artwork) {
    return `
        <div class="artwork-item">
            <div class="image-container">
                <img src="${artwork.image}" alt="${artwork.title}" 
                     onload="this.parentElement.classList.add('loaded')"
                     onerror="this.parentElement.classList.add('error'); this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDMwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjBmMGYwIi8+CjxwYXRoIGQ9Ik0xNTAgMTI1TDEyNSAxMDBMMTc1IDEwMEwxNTAgMTI1WiIgZmlsbD0iI2NjY2NjYyIvPgo8Y2lyY2xlIGN4PSIxMjAiIGN5PSI4MCIgcj0iMTAiIGZpbGw9IiNjY2NjY2MiLz4KPHRLEHT0PSIxNDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5OTk5Ij5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K';">
                <div class="loading-placeholder">Loading...</div>
            </div>
            <div class="artwork-info">
                <h3>${artwork.title}</h3>
                <p><strong>${artwork.year}</strong> - ${artwork.medium}</p>
                <p>${artwork.description}</p>
            </div>
        </div>
    `;
}

// Load featured artworks on homepage
async function loadFeaturedArtworks() {
    const gallery = document.getElementById('featuredGallery');
    if (!gallery) return;

    const data = await loadJSON('data/artworks.json');
    if (data && data.featured) {
        gallery.innerHTML = data.featured.map(createArtworkHTML).join('');
    } else {
        gallery.innerHTML = '<p>Unable to load artworks. Please check the data files.</p>';
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load featured artworks if on homepage
    if (document.getElementById('featuredGallery')) {
        loadFeaturedArtworks();
    }
});