# Error and Mutation Testing

This repository contains implementations and examples of **Error Guessing** and **Mutation Testing** in JavaScript. The goal is to demonstrate testing techniques that focus on catching potential errors and ensuring that tests are robust enough to handle small code mutations.

## Table of Contents
- [Introduction](#introduction)
- [Error Guessing](#error-guessing)
- [Mutation Testing](#mutation-testing)

## Introduction
In this repository, we explore two key testing techniques:
1. **Error Guessing**: A testing method where common mistakes and edge cases are anticipated based on experience and knowledge.
2. **Mutation Testing**: A technique where small changes (mutations) are made to the code, and tests are run to check if the tests can detect these changes.

## Error Guessing
**Error Guessing** is a technique used to identify potential errors by guessing what could go wrong in the code. The idea is to create test cases that reflect possible scenarios where the application may fail.

### Example
A simple function that divides two numbers and throws errors for invalid input or division by zero.

```javascript
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
```

Tests written using the Error Guessing technique cover cases such as:
- Non-numeric inputs
- Division by zero
- Missing arguments

## Mutation Testing
**Mutation Testing** is a fault-based testing technique where small, deliberate changes (mutations) are introduced into the code. The purpose is to check if the current test suite can catch these mutations, ensuring that tests are robust enough.

### Example
Given a function that checks if a number is even:
```javascript
function isEven(number) {
    return number % 2 === 0;
}
```