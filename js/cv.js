// CV page functionality

function createCVCategoryHTML(title, items, type) {
    const itemsHTML = items.map(item => {
        if (type === 'education') {
            return `
                <div class="cv-item">
                    <h4>${item.degree}</h4>
                    <div class="date">${item.year}</div>
                    <p><strong>${item.institution}</strong></p>
                    <p>${item.description}</p>
                </div>
            `;
        } else if (type === 'exhibitions') {
            return `
                <div class="cv-item">
                    <h4>${item.title}</h4>
                    <div class="date">${item.year}</div>
                    <p><strong>${item.venue}</strong></p>
                    <p>${item.description}</p>
                </div>
            `;
        } else if (type === 'awards') {
            return `
                <div class="cv-item">
                    <h4>${item.title}</h4>
                    <div class="date">${item.year}</div>
                    <p><strong>${item.organization}</strong></p>
                    <p>${item.description}</p>
                </div>
            `;
        }
        return '';
    }).join('');

    return `
        <div class="cv-category">
            <h3>${title}</h3>
            ${itemsHTML}
        </div>
    `;
}

async function loadCV() {
    const content = document.getElementById('cvContent');
    if (!content) return;

    const data = await loadJSON('data/cv.json');
    if (data) {
        let html = '';
        
        if (data.education) {
            html += createCVCategoryHTML('Education', data.education, 'education');
        }
        
        if (data.exhibitions) {
            html += createCVCategoryHTML('Exhibitions', data.exhibitions, 'exhibitions');
        }
        
        if (data.awards) {
            html += createCVCategoryHTML('Awards & Recognition', data.awards, 'awards');
        }
        
        content.innerHTML = html;
    } else {
        content.innerHTML = '<p>Unable to load CV content. Please check the data/cv.json file.</p>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadCV();
});