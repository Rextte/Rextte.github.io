function changeBackgroundColor() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

function toggleMenu() {
    var menuBox = document.querySelector('.menu-box');
    var menuBar = document.querySelector('.menu-bar');

    menuBox.classList.toggle('active');
    menuBar.classList.toggle('active');

    if (menuBar.classList.contains('active')) {
        // Add a click event listener to the document
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        // Remove the click event listener when the menu is closed
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

// Function to close the menu box when clicking outside of it
function closeMenuOnClickOutside(event) {
    var menuBox = document.querySelector('.menu-box');
    var menuBar = document.querySelector('.menu-bar');

    // Check if the clicked element is not within the menu box and menu bar
    if (!menuBox.contains(event.target) && !menuBar.contains(event.target)) {
        menuBox.classList.remove('active');
        menuBar.classList.remove('active');

        // Remove the click event listener after closing the menu
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}
