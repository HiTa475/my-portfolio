// 1. Find the button with the id "test-button"
const myButton = document.getElementById('test-button');

// 2. Listen for a "click" event on that button
myButton.addEventListener('click', () => {
    
    // 3. When the click happens, run this code
    console.log('Button clicked! This is JavaScript.');
    alert('You ran your first script!');

});