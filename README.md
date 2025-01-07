# Type Mismatch in TypeScript Function

This example demonstrates a common type error in TypeScript where a function receives an argument of a different type than expected.

The `add` function is defined to accept two numbers and return their sum.  However, the code calls `add` with a number and a string. TypeScript's type system catches this mismatch, preventing a runtime error.

The solution involves ensuring that both arguments passed to the function are of type number.