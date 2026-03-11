```javascript
// Day 14 : Variables and Keywords in JavaScript(var, let, const)

// Variable Declarations
var n = "lucky" // 'let' allows reassignment but not redeclaration within the same scope
let age = 10 // 'let' allows reassignment but not redeclaration within the same scope
const country = "India" // 'const' creates a read-only constant

console.log(n) // Outputs: lucky
console.log(age) // Outputs: 10
console.log(country) // Outputs: India

// Day 14 : Logging with JavaScript

// Console Methods for Different Log Levels
console.log("hello") // Standard log
console.error("error") // Outputs an error message
console.info("info") // Provides informational messages
console.warn("warn") // Issues a warning

// Sum Calculation
let sum = 10 + 20
console.log(sum) // Outputs: 30

// Increment and Decrement Operations
let count = 5
count++ // Increment the value of count
count-- // Decrement the value of count
console.log(count) // Outputs: 5

// Day 15 : Primitive Data Types in JavaScript

// Different Data Types
let a = 2 // Number
let b = 2.3 // Number
let c = "lucky is cool" // String
let d = true // Boolean
let e = undefined // Undefined
let emptyValue = null // Null
let syb = Symbol("unique") // Symbol
let notDefined // Undefined (default value of an uninitialized variable)

console.log(a) // Outputs: 2
console.log(b) // Outputs: 2.3
console.log(c) // Outputs: lucky is cool
console.log(d) // Outputs: true
console.log(e) // Outputs: undefined
console.log(emptyValue) // Outputs: null
console.log(syb) // Outputs: Symbol(unique)
console.log(notDefined) // Outputs: undefined

// Reference Data Types:

// Object and Array Examples
let obj = { name: "lucky", age: 23 }
let arr = ["apple", "banana", "mango"]

console.log(obj) // Outputs: { name: "lucky", age: 23 }
console.log(arr) // Outputs: ["apple", "banana", "mango"]

let value
console.log(value) // Outputs: undefined

let price = null
console.log(price) // Outputs: null

// Day 15 : Some Important Values in JavaScript

// String Operations with Numbers
let result1 = "lucky" + 2
console.log(result1) // Outputs: lucky2

let result2 = "lucky" - 2
console.log(result2) // Outputs: NaN

let result3 = "lucky" * 2
console.log(result3) // Outputs: NaN

let result4 = "lucky" / 2
console.log(result4) // Outputs: NaN

let result5 = "lucky" % 2
console.log(result5) // Outputs: NaN

let infiniteNumber = 10 / 0
console.log(infiniteNumber) // Outputs: Infinity

// Day 15 : Basic Operators in JavaScript

// 1. Arithmetic Operators (+, -, *, /, %, ++, --)
let x = 10
let y = 5

console.log(x + y) // Addition: 10 + 5 = 15
console.log(x - y) // Subtraction: 10 - 5 = 5
console.log(x * y) // Multiplication: 10 * 5 = 50
console.log(x / y) // Division: 10 / 5 = 2
console.log(x % y) // Modulus (Remainder): 10 % 5 = 0
console.log(x ** y) // Exponentiation: 10^5 = 100000

// Increment and Decrement Operations
x++
console.log(x) // Outputs: 11

y--
console.log(y) // Outputs: 4

// 2. Assignment Operators (=, +=, -=, *=, /=, %=)
let val = 10
val += 5
console.log(val) // Outputs: 15

val -= 5
console.log(val) // Outputs: 10

val *= 5
console.log(val) // Outputs: 50

val /= 5
console.log(val) // Outputs: 10

val %= 5
console.log(val) // Outputs: 0

// 3. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
console.log(5 == 5) // true
console.log(5 == "5") // true
console.log(5 === "5") // false

console.log(5 != "5") // false
console.log(5 !== "5") // true

console.log(5 > 6) // false
console.log(5 < 6) // true
console.log(5 >= 5) // true
console.log(5 <= 6) // true

// 4. Logical Operators (&&, ||, !)
console.log(true && false) // false
console.log(true && true) // true

console.log(true || true) // true
console.log(true || false) // true
console.log(false || false) // false

console.log(!false) // true
console.log(!true) // false

// Day 15 : Variable Hoisting in JavaScript

// Example of Hoisting
console.log(hoisting) // undefined (hoisted but not yet assigned)
var hoisting = 10 // 'var' declaration is hoisted to the top, but value is assigned at runtime

// Day 15 : Condition Operators in JavaScript

// if-else Statement
let ageforvote = 18
if (ageforvote >= 18) {
  console.log("Adult")
} else {
  console.log("Not Adult")
}

// Ternary Operator
let stetus = ageforvote >= 18 ? "a" : "b"
console.log(stetus)

// Day 15 : Loops in JavaScript

// 1. for Loop
for (j = 0; j < 5; j++) {
  console.log(j)
}

// 2. while Loop
let k = 0
while (k < 6) {
  console.log(k)
  k++
}

// 3. do...while Loop
let l = 0
do {
  console.log(l)
  l++
} while (l < 6)
```
