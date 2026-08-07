//Union type 
/*Union types allow you to define a variable that can hold multiple types of values.
For example, you can define a variable that can hold either a string or a number.*/

// Example of union type
let value: string | number; // The variable 'value' can hold either a string or a number

value = "Hello"; // The variable 'value' is now a string
value = 10; // The variable 'value' is now a number

//function that takes a union type as a parameter
function printValue(value: string | number): void {
    console.log(value);
}
printValue("Hello"); // The function 'printValue' is called with a string argument
printValue(10); // The function 'printValue' is called with a number argument

/*Any type is a special type in TypeScript that allows you to assign any value to a
variable without any type checking. It is similar to the 'any' type in JavaScript.
However, using 'any' type can lead to potential runtime errors, so it is recommended
to use it sparingly and only when necessary.*/

// Example of any type
let anyValue: any; // The variable 'anyValue' can hold any value

anyValue = "Hello"; // The variable 'anyValue' is now a string
anyValue = 10; // The variable 'anyValue' is now a number
anyValue = true; // The variable 'anyValue' is now a boolean

//function that takes an any type as a parameter
function printAnyValue(value: any): void {
    console.log(value);
}
printAnyValue("Hello"); // The function 'printAnyValue' is called with a string argument
printAnyValue(10); // The function 'printAnyValue' is called with a number argument

//problem with "any" type
/*The problem with using the 'any' type is that it can lead to potential runtime errors.
Since there is no type checking, you can assign any value to a variable, which can
cause unexpected behavior in your code. It is recommended to use more specific types
whenever possible to take advantage of TypeScript's static type checking.*/