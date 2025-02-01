const number = document.getElementById("number");

const convertBtn = document.getElementById("convert-btn");

const output = document.getElementById("output");

const checkUserInput = () => {
  const inputInt = parseInt(number.value);

  if (!inputInt) {
    output.textContent = "Please enter a valid number";
    return false;
    } else if (inputInt < 1) {
output.textContent = "Please enter a number greater than or equal to 1";
return false;
} else if (inputInt >= 4000) {
  output.textContent = "Please enter a number less than or equal to 3999";
  return false;
}
return true;
}

const arabicToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

let result = "";

for (let i = 0; i < romanNumerals.length; i++) {
  // extacting value and numeral for each one
  const { value, numeral } = romanNumerals[i]; 
  while (num >= value) {
    result += numeral;
    num -= value;
  }
}
return result;
}

convertBtn.addEventListener("click", function() {
  if (checkUserInput()) {
    const inputInt = parseInt(number.value);
    output.textContent = arabicToRoman(inputInt);
    output.style.border = "2px solid var(--orange)"
  };

});

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { convertBtn.click(); 
  } 
})
