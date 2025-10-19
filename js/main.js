document.addEventListener("DOMContentLoaded", function() {
    // Determine the base path relative to the document's location
    const path = window.location.pathname;
    const depth = (path.split('/').length - 1) - (path.includes('index.html') ? 1 : 2);
    const basePath = depth > 0 ? '../'.repeat(depth) : './';

    // Function to load HTML content from a file into an element
    const loadHTML = (elementId, filePath, callback) => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok for ${filePath}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    };

    // Load header and footer
    loadHTML("main-header", `${basePath}includes/header.html`, () => {
        // Set the active navigation link
        const currentPage = window.location.pathname;
        document.querySelectorAll('.nav-bar a').forEach(link => {
            if (currentPage.endsWith(link.getAttribute('href'))) {
                link.classList.add('active');
            }
        });
    });
    loadHTML("main-footer", `${basePath}includes/footer.html`);
});