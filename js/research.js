// Research page functionality

function createResearchHTML(research) {
    return `
        <div class="research-item">
            <div class="date">${new Date(research.date).toLocaleDateString()}</div>
            <h3>${research.title}</h3>
            <p>${research.content}</p>
            ${research.image ? `<img src="${research.image}" alt="${research.title}" onerror="this.style.display='none'">` : ''}
        </div>
    `;
}

async function loadResearch() {
    const grid = document.getElementById('researchGrid');
    if (!grid) return;

    const data = await loadJSON('data/research.json');
    if (data && Array.isArray(data)) {
        grid.innerHTML = data.map(createResearchHTML).join('');
    } else {
        grid.innerHTML = '<p>Unable to load research content. Please check the data/research.json file.</p>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadResearch();
});