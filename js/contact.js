// Contact page functionality

function createContactHTML(contact) {
    return `
        <div class="contact-card">
            <h3>About</h3>
            <p>${contact.bio}</p>
        </div>
        <div class="contact-card">
            <h3>Get in Touch</h3>
            <p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>
            <p><strong>Location:</strong> ${contact.location}</p>
        </div>
        <div class="contact-card">
            <h3>Follow My Work</h3>
            <p><strong>Instagram:</strong> <a href="https://instagram.com/${contact.social.instagram.replace('@', '')}" target="_blank">${contact.social.instagram}</a></p>
            <p><strong>Website:</strong> <a href="https://${contact.social.website}" target="_blank">${contact.social.website}</a></p>
        </div>
    `;
}

async function loadContact() {
    const info = document.getElementById('contactInfo');
    if (!info) return;

    const data = await loadJSON('data/contact.json');
    if (data) {
        info.innerHTML = createContactHTML(data);
    } else {
        info.innerHTML = '<p>Unable to load contact information. Please check the data/contact.json file.</p>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadContact();
});