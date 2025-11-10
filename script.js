// 1. Find the button with the id "test-button"
const myButton = document.getElementById('test-button');

// 2. Listen for a "click" event on that button
myButton.addEventListener('click', () => {
    
    // 3. When the click happens, run this code
    console.log('Button clicked! This is JavaScript.');
    alert('You ran your first script!');

});

// --- Text Change Feature ---

// 1. Find the new button
const changeBtn = document.getElementById('change-text-btn');

// 2. Find the text paragraph
const aboutText = document.getElementById('about-text');

// 3. Listen for a "click" on the new button
changeBtn.addEventListener('click', () => {

    // 4. When clicked, change the text content of the paragraph
    aboutText.textContent = 'You just changed the DOM! This is the core of JavaScript.';
    
    // Let's also change the button text so you can't click it twice
    changeBtn.textContent = 'Changed!';

});