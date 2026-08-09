//type Assertion 

/* type asssertion is a feature in typeScript that allows you to tell the compiler what the type
of a variable is. It is used when you have more information about the type of a variable than
the compiler does. Type assertion does not perform any special checking or restructuring of data.
It has no runtime impact, and is used purely by the compiler.*/

//typeScript provides two way to perform type assertion.
//1. as syntax
//2. angle bracket syntax<>

//Example of type assertion using "as" syntax
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

//Example of type assertion using angle bracket syntax
let someValue2: unknown = "this is a string";
let strLength2: number = (<string>someValue2).length;

//Never type

/*Never type is a type that represents values that never occur. It is used to indicate that a
function will never return.*/

//Example of never type
function error(message: string): never {
    throw new Error(message);
}
error("This is an error");

//In this example, the error function returns a value of type never, which indicates that the
//function will never return.