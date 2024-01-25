function changeBackgroundColor() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

function toggleMenu() {
    var menuBox = document.querySelector('.menu-box');
    menuBox.classList.toggle('active');

    var menuBar = document.querySelector('.menu-bar');
    menuBar.classList.toggle('active');
}
