// JavaScript literals examples

// Numeric literal
const age = 30;

// String literals
const firstName = 'Jane';
const lastName = "Doe";
const greeting = `Hello, ${firstName} ${lastName}!`;

// Boolean literals
const isActive = true;
const isVerified = false;

// Null and undefined literals
const emptyValue = null;
let missingValue;

// Array literal
const scores = [100, 95, 88, 76];

// Object literal
const user = {
  id: 1,
  name: 'Jane Doe',
  isAdmin: false,
};

// Regular expression literal
const phonePattern = /^(\d{3})-(\d{3})-(\d{4})$/;

// Function expression literal
const add = function (x, y) {
  return x + y;
};

// Template literal
const message = `User ${user.name} has ${scores.length} scores.`;

// BigInt literal
const bigNumber = 123456789012345678901234567890n;

// Symbol literal
const uniqueId = Symbol('id');

console.log(age, greeting, isActive, emptyValue, missingValue);
console.log(scores, user, phonePattern, add(2, 3), message, bigNumber, uniqueId);
