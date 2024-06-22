// Array of colors
const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
    'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'maroon'
];

// Function to change the background color
function changeBackgroundColor() {
    // Get a random index from the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);
    // Set the background color to a random color from the array
    document.body.style.backgroundColor = colors[randomIndex];
}

// Set an interval to change the background color every second
setInterval(changeBackgroundColor, 1000);
