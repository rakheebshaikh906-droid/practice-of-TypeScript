// Annotation & Interference

/*Annotation is a way to explicitly specify the type of a variable, function parameter,
or return value in TypeScript. It helps the TypeScript compiler understand the intended 
type and can catch errors during development.*/

// Example of annotation
let num: number = 10; // The variable 'num' is explicitly annotated as a number
let str: string = "Hello"; // The variable 'str' is explicitly annotated as a string
let bool: boolean = true; // The variable 'bool' is explicitly annotated as a boolean

/*Interference is a feature of TypeScript where the compiler automatically infers the type 
of a variable based on its initial value.*/

// Example of interference
let num2 = 10; // The variable 'num2' is inferred as a number based on its initial value
let str2 = "Hello"; // The variable 'str2' is inferred as a string based on its initial value
let bool2 = true; // The variable 'bool2' is inferred as a boolean based on its initial value

// The main difference between annotation and interference is that annotation explicitly
// specifies the type of a variable, while interference automatically infers the type
// based on the initial value.

// In summary, annotation is a way to explicitly specify the type of a variable, while
// interference is a feature of TypeScript where the compiler automatically infers the
// type of a variable based on its initial value.

