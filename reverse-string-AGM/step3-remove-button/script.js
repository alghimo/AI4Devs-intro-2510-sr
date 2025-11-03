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
    
    // If input is empty, hide the result
    if (inputString === '') {
        resultDiv.classList.remove('show');
        return;
    }
    
    // Reverse the string using split, reverse, and join
    const reversedString = inputString.split('').reverse().join('');
    
    // Display the result
    resultText.textContent = reversedString;
    resultDiv.classList.add('show');
}

// Add event listener for real-time reversal
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('inputString');
    
    // Reverse string as user types
    inputElement.addEventListener('input', function() {
        reverseString();
    });
    
    // Focus on input field when page loads
    inputElement.focus();
});
