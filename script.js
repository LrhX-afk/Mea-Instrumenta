document.addEventListener('DOMContentLoaded', function() {
    // Find the menu toggle button and the navigation list
    const menuToggle = document.querySelector('.navbar .menu-toggle');
    const navList = document.querySelector('.navbar ul');

    // Check if the toggle button and nav list exist on the page
    if (menuToggle && navList) {
        // Add a click event listener to the button
        menuToggle.addEventListener('click', function() {
            // Toggle the .active class on the button for the 'X' animation
            this.classList.toggle('active');
            // Toggle the .show class on the nav list to show/hide the menu
            navList.classList.toggle('show');
        });
    }
});