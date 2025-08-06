// Artworks page functionality

async function loadAllArtworks() {
    const gallery = document.getElementById('artworkGallery');
    if (!gallery) return;

    const data = await loadJSON('data/artworks.json');
    if (data && data.all) {
        gallery.innerHTML = data.all.map(artwork => createArtworkHTML(artwork)).join('');
    } else {
        gallery.innerHTML = '<p>Unable to load artworks. Please check the data/artworks.json file.</p>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadAllArtworks();
});