```markdown
# JavaScript Operators Guide

## Table of Contents

1. [Arithmetic Operators](#arithmetic-operators)
2. [Assignment Operators](#assignment-operators)
3. [Increment and Decrement Operators](#increment-and-decrement-operators)
4. [Comparison Operators](#comparison-operators)
5. [Logical Operators](#logical-operators)
6. [Bitwise Operators](#bitwise-operators)
7. [String Operators](#string-operators)
8. [Conditional (Ternary) Operator](#conditional-ternary-operator)
9. [Typeof Operator](#typeof-operator)
10. [Instanceof Operator](#instanceof-operator)

## 1. Arithmetic Operators

Arithmetic operators perform basic mathematical operations.

```javascript
let x = 10;
let y = 5;

console.log(x + y); // Addition: 10 + 5 = 15
console.log(x - y); // Subtraction: 10 - 5 = 5
console.log(x * y); // Multiplication: 10 * 5 = 50
console.log(x / y); // Division: 10 / 5 = 2
console.log(x % y); // Modulus (Remainder): 10 % 5 = 0
console.log(x ** y); // Exponentiation: 10^5 = 100000
```

## 2. Assignment Operators

Assignment operators assign values to variables.

```javascript
let a = 10; // Simple assignment
a += 5;     // a = a + 5; Result: a = 15
a -= 3;     // a = a - 3; Result: a = 12
a *= 2;     // a = a * 2; Result: a = 24
a /= 4;     // a = a / 4; Result: a = 6
a %= 5;     // a = a % 5; Result: a = 1
a **= 3;    // a = a^3; Result: a = 1
```

## 3. Increment and Decrement Operators

Increment and decrement operators increase or decrease a variable's value by one.

```javascript
let count = 0;
count++;  // Increment: count becomes 1
++count;  // Increment: count becomes 2
count--;  // Decrement: count becomes 1
--count;  // Decrement: count becomes 0
```

## 4. Comparison Operators

Comparison operators compare two values and return a boolean result.

```javascript
console.log(5 == 5);    // Equal to: true
console.log(5 === "5"); // Strict equal to (checks value and type): false
console.log(5 != 3);    // Not equal to: true
console.log(5 > 3);     // Greater than: true
console.log(5 < 3);     // Less than: false
console.log(5 >= 5);    // Greater than or equal to: true
console.log(5 <= 3);    // Less than or equal to: false
```

## 5. Logical Operators

Logical operators perform logical operations and return a boolean result.

```javascript
let p = true;
let q = false;

console.log(p && q); // Logical AND: true && false = false
console.log(p || q); // Logical OR: true || false = true
console.log(!p);     // Logical NOT: !true = false
```

## 6. Bitwise Operators

Bitwise operators perform bit-level operations.

```javascript
let m = 5; // Binary: 0101
let n = 3; // Binary: 0011

console.log(m & n);  // Bitwise AND: 0101 & 0011 = 0001 (1)
console.log(m | n);  // Bitwise OR: 0101 | 0011 = 0111 (7)
console.log(m ^ n);  // Bitwise XOR: 0101 ^ 0011 = 0110 (6)
console.log(~m);     // Bitwise NOT: ~0101 = 1010 (-6 in two's complement)
console.log(m << 1); // Left shift: 0101 << 1 = 1010 (10)
console.log(m >> 1); // Right shift: 0101 >> 1 = 0010 (2)
```

## 7. String Operators

JavaScript uses the `+` operator for string concatenation.

```javascript
let greeting = "Hello";
let name = "World";

let message = greeting + " " + name + "!"; // Concatenation
console.log(message); // Outputs: Hello World!
```

## 8. Conditional (Ternary) Operator

The conditional (ternary) operator is a shorthand for the if-else statement.

```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Outputs: Adult
```

## 9. Typeof Operator

The `typeof` operator returns the data type of a variable.

```javascript
let number = 42;
let text = "Hello";

console.log(typeof number);    // Outputs: number
console.log(typeof text);      // Outputs: string
console.log(typeof true);      // Outputs: boolean
console.log(typeof undefined); // Outputs: undefined
console.log(typeof null);      // Outputs: object (this is a known JavaScript quirk)
```

## 10. Instanceof Operator

The `instanceof` operator checks if an object is an instance of a particular class or constructor function.

```javascript
class Person {}
let person = new Person();

console.log(person instanceof Person);  // Outputs: true
console.log(person instanceof Object);  // Outputs: true
```

---