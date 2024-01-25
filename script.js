function changeBackgroundColor() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

// Toggle menu function
function toggleMenu() {
    // Add your menu toggle logic here
    console.log("Menu clicked!"); // Example: Log a message to the console
}
