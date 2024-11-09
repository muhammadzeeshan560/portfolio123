// Function to display the content of the clicked tab and hide others
function showTab(tabId) {
    // Get all tab content divs
    const tabContents = document.querySelectorAll('.tab-content');
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');

    // Loop through tab content elements and hide them
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Loop through tab buttons and remove the active class
    tabButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the clicked tab content by adding the active class
    document.getElementById(tabId).classList.add('active');

    // Highlight the clicked tab button
    const activeButton = Array.from(tabButtons).find(button => button.textContent.toLowerCase() === tabId);
    activeButton.classList.add('active');
}

// Default to showing the "home" tab when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showTab('home');
});
