const textInputElement = document.getElementById("text-input");

const checkButton = document.getElementById("check-btn");

const result = document.getElementById("result")

function isPalindrome(word) {
  const cleanedWord = word.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  const reversedWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reversedWord;
  }

checkButton.addEventListener("click", function() {
  const textInput = textInputElement.value;
  if (!textInput) {
    alert("Please input a value");
  } else if (isPalindrome(textInput)) {
    result.textContent = textInput + " is a palindrome";
    result.style.color = 'green';
  } else { 
    result.textContent = textInput + " is not a palindrome";
    result.style.color = 'red';
  }
});

textInputElement.addEventListener("keypress", function(event) { 
  if (event.key === "Enter") { checkButton.click(); 
  } 
});