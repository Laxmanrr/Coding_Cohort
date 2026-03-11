### **JavaScript Questions (Day - 15)**

---

#### **1. Age Category Message**

Ask the user for their age. Based on the age, print one of the following messages:

- Minor: Under 18 years
- Adult: Between 18 and 60 years (inclusive)
- Senior Citizen: Above 60 years

```javascript
let age = Number(prompt("What is your age?"))

if (age < 18) {
  console.log("You are a minor.")
} else if (age >= 18 && age <= 60) {
  console.log("You are an adult.")
} else {
  console.log("You are a senior citizen.")
}
```

**Explanation:**

- `let age = Number(prompt("What is your age?"));`: Prompts the user for their age and converts it to a number.
- Conditional checks are used to determine if the user is a minor, an adult, or a senior citizen.

---

#### **2. Even or Odd Sum**

Take two numbers from the user and calculate their sum. Print whether the sum is "Even Sum" or "Odd Sum."

```javascript
let num1 = Number(prompt("Enter the first number:"))
let num2 = Number(prompt("Enter the second number:"))
let sum = num1 + num2

if (sum % 2 === 0) {
  console.log("Even Sum =", sum)
} else {
  console.log("Odd Sum =", sum)
}
```

**Explanation:**

- The sum of the two numbers is calculated.
- The modulus operator (`%`) checks if the sum is divisible by 2 (even) or not (odd).

---

#### **3. Character Case Checker**

Ask the user for a single character and check if it's uppercase, lowercase, or neither.

```javascript
let check = prompt("Enter a character")

if (check >= "A" && check <= "Z") {
  console.log("uppercase")
} else if (check >= "a" && check <= "z") {
  console.log("lowercase")
} else {
  console.log("not a letter")
}
```

**Explanation:**

- The code checks if the character entered is within the range of uppercase or lowercase letters using string comparisons.

---

#### **4. Largest of Three Numbers**

Take three numbers as input and print the largest number without using `Math.max()`.

```javascript
const num1 = Number(prompt("Enter the First Number:"))
const num2 = Number(prompt("Enter the Second Number:"))
const num3 = Number(prompt("Enter the Third Number:"))
let largest

if (num1 >= num2 && num1 >= num3) {
  largest = num1
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2
} else {
  largest = num3
}

console.log("The largest number is " + largest)
```

**Explanation:**

- Conditional checks are used to compare the numbers and find the largest one.

---

#### **5. Leap Year Checker**

Ask the user for a year and determine if it's a leap year.

```javascript
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year")
  } else {
    console.log(year + " is not a leap year")
  }
}

const year = prompt("Enter a year:")
checkLeapYear(year)
```

**Explanation:**

- The leap year condition is checked using the standard formula: A year is a leap year if it is divisible by 4, but not by 100, unless it's also divisible by 400.

---

#### **6. Simple Calculator**

Ask the user for two numbers and an operator (+, -, \*, /). Perform the operation and display the result.

```javascript
const operator = prompt("Use operator (+, -, *, /):")
const num1 = Number(prompt("Enter the first number"))
const num2 = Number(prompt("Enter the second number"))
let result

if (operator === "+") {
  result = num1 + num2
} else if (operator === "-") {
  result = num1 - num2
} else if (operator === "*") {
  result = num1 * num2
} else if (operator === "/") {
  result = num1 / num2
} else {
  console.log("Invalid operator")
}

console.log(`${num1} ${operator} ${num2} = ${result}`)
```

**Explanation:**

- The code checks for different operators (`+`, `-`, `*`, `/`) and performs the corresponding arithmetic operation.

---

#### **7. Positive, Negative, or Zero**

Take a number input and check if it is positive, negative, or zero.

```javascript
const number = parseInt(prompt("Enter the number:"))

if (number > 0) {
  console.log("The number is positive")
} else if (number === 0) {
  console.log("The number is zero")
} else {
  console.log("The number is negative")
}
```

**Explanation:**

- Conditional statements are used to check if the number is greater than zero (positive), equal to zero, or less than zero (negative).

---

#### **8. User Greeting**

Ask for the user's name and time (in 24-hour format). Greet them accordingly:

- 5 AM–12 PM: "Good Morning, [Name]!"
- 12 PM–5 PM: "Good Afternoon, [Name]!"
- 5 PM–9 PM: "Good Evening, [Name]!"
- 9 PM–5 AM: "Good Night, [Name]!"

```javascript
const userName = prompt("Enter your name:")
const time = Number(prompt("Enter the time (24-hour format):"))

if (time >= 5 && time < 12) {
  console.log(`Good Morning, ${userName}!`)
} else if (time >= 12 && time < 17) {
  console.log(`Good Afternoon, ${userName}!`)
} else if (time >= 17 && time < 21) {
  console.log(`Good Evening, ${userName}!`)
} else {
  console.log(`Good Night, ${userName}!`)
}
```

**Explanation:**

- The program checks the time input and prints the appropriate greeting based on the time of day.

---

#### **9. Traffic Light System**

Ask the user for a traffic light color (red, yellow, green). Print the appropriate messages:

- Red: "Stop!"
- Yellow: "Get Ready!"
- Green: "Go!"

```javascript
let color = prompt(
  "Choose traffic light color (red, yellow, green):"
).toLowerCase()

if (color === "red") {
  console.log("Stop!")
} else if (color === "yellow") {
  console.log("Get Ready!")
} else if (color === "green") {
  console.log("Go!")
} else {
  console.log("Invalid color.")
}
```

**Explanation:**

- The user's input is converted to lowercase to handle case-insensitive input.
- Based on the input, an appropriate message is displayed for each traffic light color.

---

#### 10. **Multiplication Table**

Ask the user for a number and print its multiplication table up to 10.

```javascript
// Prompt the user to enter a number
const number = parseInt(prompt("Enter a number:"))

// Check if the input is a valid number
if (!isNaN(number)) {
  // Loop through numbers 1 to 10 to generate the multiplication table
  for (let i = 1; i <= 10; i++) {
    const result = number * i
    console.log(`${number} x ${i} = ${result}`)
  }
} else {
  console.log("Please enter a valid number.")
}
```

**Explanation:**

- The program prompts the user for a number, checks if it's valid, and then generates the multiplication table for that number up to 10.

---

#### 11. **Grade Calculator**

Ask the user for their marks (0-100) and assign grades based on the range.

```javascript
let number = parseInt(prompt("Enter the number (0-100): "))

if (number >= 90 && number <= 100) {
  console.log("A")
} else if (number >= 80 && number <= 89) {
  console.log("B")
} else if (number >= 70 && number <= 79) {
  console.log("C")
} else if (number >= 60 && number <= 69) {
  console.log("D")
} else if (number >= 0 && number <= 59) {
  console.log("F")
} else {
  console.log("Invalid input. Please enter a number between 0 and 100.")
}
```

**Explanation:**

- The program asks the user for marks, then assigns a grade based on the score using a series of `if-else` conditions.

---

#### 12. **Simple Login System**

Set a predefined username and password. Ask the user to enter their credentials. If correct, print "Login Successful"; otherwise, print "Incorrect username or password."

```javascript
// Predefined username and password
const validUsername = "admin"
const validPassword = "password"

// Prompt the user for their username
const enteredUsername = prompt("Enter your username:")

// Prompt the user for their password
const enteredPassword = prompt("Enter your password:")

// Check if the entered credentials are correct
if (enteredUsername === validUsername && enteredPassword === validPassword) {
  console.log("Login Successful")
} else {
  console.log("Incorrect username or password.")
}
```

**Explanation:**

- The program checks if the entered username and password match predefined values, and then displays an appropriate message.

---

#### 13. **Swapping Without Third Variable**

Take two numbers from the user and swap their values without using a third variable.

```javascript
// Prompt the user for two numbers
let num1 = parseInt(prompt("Enter the first number:"))
let num2 = parseInt(prompt("Enter the second number:"))

// Swap the numbers without using a third variable
num1 = num1 + num2 // Add num2 to num1
num2 = num1 - num2 // Subtract num2 from num1 to get the original num1
num1 = num1 - num2 // Subtract num2 (which is now num1) from num1 to get the original num2

// Display the swapped values
console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`)
```

**Explanation:**

- The numbers are swapped by adding and subtracting them, without using a third variable.

---

#### 14. **FizzBuzz (Multiple of Both)**

Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.

```javascript
// Ask the user for a number
let number = parseInt(prompt("Enter a number:"))

// Check for multiples of both 3 and 5
if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz")
}
// Check for multiples of 3 only
else if (number % 3 === 0) {
  console.log("Fizz")
}
// Check for multiples of 5 only
else if (number % 5 === 0) {
  console.log("Buzz")
}
// If none of the above, print the number
else {
  console.log(number)
}
```

**Explanation:**

- The program checks whether the number is divisible by both 3 and 5, only 3, or only 5, and then prints the corresponding result.

---

#### 15. **Number Reversal**

Take a three-digit number from the user and print its reverse. (Example: 123 → 321).

```javascript
// Prompt the user to enter a three-digit number
let number = prompt("Enter a three-digit number:")

// Reverse the number
let reversedNumber = number.split("").reverse().join("")

// Display the reversed number
console.log(`Reversed number: ${reversedNumber}`)
```

**Explanation:**

- The program takes the input number, splits it into an array of characters, reverses the array, and then joins it back into a string.

---

#### **16. Sum of Digits**

Take a number from the user and print the sum of its digits. (Example: 123 → 1+2+3 = 6).

```javascript
// Prompt the user to enter a number
let number = prompt("Enter a number:")

// Convert the number to a string, split it into individual digits, and then calculate the sum
let sum = 0

for (let digit of number) {
  sum += parseInt(digit) // Convert each character (digit) back to a number and add to the sum
}

console.log("Sum of digits: " + sum)
```

---

#### **17. Palindrome Checker**

Ask the user for a word. Check if it reads the same forward and backward. Print “Palindrome” or “Not a Palindrome.”

```javascript
let word = prompt("Enter a word:")
let reversed = word.split("").reverse().join("")

if (word === reversed) {
  alert("Palindrome")
} else {
  alert("Not a Palindrome")
}
```

---

#### **18. Reverse Without String Methods**

Ask the user for a number and reverse it without using .split(), .reverse(), or .join().

```javascript
let num = prompt("Enter a number:")
let reversed = 0

while (num > 0) {
  let digit = num % 10
  reversed = reversed * 10 + digit
  num = Math.floor(num / 10)
}

alert("Reversed number: " + reversed)
```

---

#### **19. Find Second Largest**

Take three numbers as input and find the second largest number (without using sort() or Math.max()).

```javascript
let a = parseFloat(prompt("Enter first number:"))
let b = parseFloat(prompt("Enter second number:"))
let c = parseFloat(prompt("Enter third number:"))
let secondLargest

if ((a > b && a < c) || (a > c && a < b)) {
  secondLargest = a
} else if ((b > a && b < c) || (b > c && b < a)) {
  secondLargest = b
} else {
  secondLargest = c
}

alert("Second largest number is: " + secondLargest)
```

---

#### **20. Find First Non-Repeating Character**

Ask the user for a word and find the first character that does not repeat. Example: hello → h (since e, l, and o repeat).

```javascript
let word = prompt("Enter a word:")
let found = false

for (let i = 0; i < word.length; i++) {
  let char = word[i]
  let count = 0

  for (let j = 0; j < word.length; j++) {
    if (char === word[j]) {
      count++
    }
  }

  if (count === 1) {
    alert("First non-repeating character is: " + char)
    found = true
    break
  }
}

if (!found) {
  alert("No non-repeating character found.")
}
```

---

#### **21. Even Digit Counter**

Take a number from the user and count how many even digits it has.

```javascript
// Prompt the user to enter a number
let number = prompt("Enter a number:")

// Convert the number to a string to check each digit
let evenCount = 0

for (let i = 0; i < number.length; i++) {
  let digit = parseInt(number[i])

  // Check if the digit is even
  if (!isNaN(digit) && digit % 2 === 0) {
    evenCount++
  }
}

alert("Number of even digits: " + evenCount)
```

---

#### **22. Nested Condition Challenge**

Ask the user for their age and
salary. Print a message based on conditions: If age is below 18, print “Not eligible” ,
If age is 18 or more but salary is less than ₹20,000, print “Low Salary” , If salary is ₹50,000 or more, print “High Salary” , Otherwise, print “Medium Salary .

```javascript
// Get age and salary input from user
let age = parseInt(prompt("Enter your age:"))
let salary = parseFloat(prompt("Enter your salary (in ₹):"))

// Apply nested conditions
if (age < 18) {
  alert("Not eligible")
} else {
  if (salary < 20000) {
    alert("Low Salary")
  } else if (salary >= 50000) {
    alert("High Salary")
  } else {
    alert("Medium Salary")
  }
}
```

---

#### **23. Toggle Case**

Ask the user for a word and toggle the case of every character. Example: HeLLo → hEllO.

```javascript
// Get input from the user
let word = prompt("Enter a word:")
let toggledWord = ""

// Loop through each character
for (let i = 0; i < word.length; i++) {
  let char = word[i]

  // Toggle case
  if (char === char.toUpperCase()) {
    toggledWord += char.toLowerCase()
  } else {
    toggledWord += char.toUpperCase()
  }
}

// Show the result
alert("Toggled word: " + toggledWord)
```

---

#### **24. Find the Missing Number in a Sequence**

Take a list of consecutive numbers (except one missing) and find the missing number. Example: 1, 2, 3, 5 → Missing number is 4.

```javascript
// Get input from the user as comma-separated values
let input = prompt(
  "Enter a list of consecutive numbers (comma-separated), with one missing:"
)
let numbers = input.split(",").map(Number)

// Sort the array just in case
numbers.sort((a, b) => a - b)

let missingNumber = null

// Loop through and find the missing number
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i + 1] !== numbers[i] + 1) {
    missingNumber = numbers[i] + 1
    break
  }
}

// Show result
if (missingNumber !== null) {
  alert("Missing number is: " + missingNumber)
} else {
  alert("No missing number found.")
}
```

---

#### **25. Convert Number to Words**

Take a single-digit number and print it in words (Example: 1 → One, 2 → Two).

```javascript
// Get input from the user
let num = parseInt(prompt("Enter a single-digit number (0-9):"))

// Convert number to word using switch
let word
switch (num) {
  case 0:
    word = "Zero"
    break
  case 1:
    word = "One"
    break
  case 2:
    word = "Two"
    break
  case 3:
    word = "Three"
    break
  case 4:
    word = "Four"
    break
  case 5:
    word = "Five"
    break
  case 6:
    word = "Six"
    break
  case 7:
    word = "Seven"
    break
  case 8:
    word = "Eight"
    break
  case 9:
    word = "Nine"
    break
  default:
    word = "Invalid input! Please enter a number from 0 to 9."
}

// Show result
alert(word)
```
