document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML content from a file into an element
    const loadHTML = (elementId, filePath, callback) => {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    };

    // Load header and footer
    loadHTML("main-header", "/depthgr8.github.io/includes/header.html", () => {
        // Set the active navigation link
        const currentPage = window.location.pathname;
        document.querySelectorAll('.nav-bar a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    });
    loadHTML("main-footer", "/depthgr8.github.io/includes/footer.html");
});