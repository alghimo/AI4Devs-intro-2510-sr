/**
 * Reverses the input string and displays the result
 */
function reverseString() {
    // Get the input element and its value
    const inputElement = document.getElementById('inputString');
    const inputString = inputElement.value;
    
    // Get result elements
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    
    // Check if input is empty
    if (inputString.trim() === '') {
        alert('Please enter a string to reverse!');
        return;
    }
    
    // Reverse the string using split, reverse, and join
    const reversedString = inputString.split('').reverse().join('');
    
    // Display the result
    resultText.textContent = reversedString;
    resultDiv.classList.add('show');
}

// Add event listener for Enter key
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('inputString');
    const reverseBtn = document.getElementById('reverseBtn');
    
    // Enable/disable button based on input length
    inputElement.addEventListener('input', function() {
        if (inputElement.value.length >= 3) {
            reverseBtn.disabled = false;
        } else {
            reverseBtn.disabled = true;
        }
    });
    
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !reverseBtn.disabled) {
            reverseString();
        }
    });
    
    // Focus on input field when page loads
    inputElement.focus();
});
