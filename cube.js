// JavaScript code for cube puzzle game

// Function to shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to check if the puzzle is solved
function checkWin() {
    let cubeSides = document.querySelectorAll('.side');
    let sidesOrder = Array.from(cubeSides).map(side => side.innerText);
    let sortedOrder = [...sidesOrder].sort((a, b) => a - b).join('');

    if (sortedOrder === '123456') {
        alert("Congratulations! You've solved the puzzle!");
    }
}

// Function to handle click event on cube sides
function handleClick(event) {
    let cubeSides = Array.from(document.querySelectorAll('.side'));
    let currentIndex = cubeSides.indexOf(event.target);
    let nextIndex = currentIndex === 5 ? 0 : currentIndex + 1;

    // Swap the innerText of clicked side with the next side
    [cubeSides[currentIndex].innerText, cubeSides[nextIndex].innerText] = [cubeSides[nextIndex].innerText, cubeSides[currentIndex].innerText];

    // Check if the puzzle is solved
    checkWin();
}

// Add event listener to cube sides
document.querySelectorAll('.side').forEach(side => {
    side.addEventListener('click', handleClick);
});

// Shuffle the cube sides initially
let cubeSides = document.querySelectorAll('.side');
let numbers = Array.from({length: 6}, (_, i) => i + 1);
shuffleArray(numbers);
cubeSides.forEach((side, index) => {
    side.innerText = numbers[index];
});

