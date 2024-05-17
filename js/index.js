document.addEventListener('DOMContentLoaded', function() {
    // Get the button and the element to be toggled by their IDs
    var toggleIcon = document.getElementById('toggle-icon');
    var toggleElement = document.getElementById('toggle-content');

    // When the button is clicked, execute this function
    toggleIcon.addEventListener('click', function() {
        // Check if the element is currently hidden
        if (toggleElement.style.display === 'none' || toggleElement.style.display === '') {
            // If it is hidden, make it visible
            toggleElement.style.display = 'block';
        } else {
            // If it is visible, hide it
            toggleElement.style.display = 'none';
        }
    });
});