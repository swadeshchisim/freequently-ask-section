// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class 'toggle-icon' and 'toggle-content'
    let toggleIcons = document.querySelectorAll('#toggle-icon');
    let toggleContents = document.querySelectorAll('#toggle-content');

    // Loop through each 'toggle-icon' element
    toggleIcons.forEach(function(toggleIcon, index) {
        toggleIcon.addEventListener('click', function() {
            let toggleElement = toggleContents[index];
            // Check if the element is currently hidden
            if (toggleElement.style.display === 'none' || toggleElement.style.display === '') {
                // Hide all other contents
                toggleContents.forEach(function(content) {
                    content.style.display = 'none';
                });
                // If it is hidden, make it visible
                toggleElement.style.display = 'block';
            } else {
                // If it is visible, hide it
                toggleElement.style.display = 'none';
            }
        });
    });
});
