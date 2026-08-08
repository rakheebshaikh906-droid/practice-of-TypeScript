// type Guard

// type guard is a function that checks if a value is of a specific type

function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
}

//------------- type narrowing ------------------

/* type narrowing is a process of refining the type of a variable based on the type guard function.
For example, if we have a function that takes a string or a number as a parameter, we can use a type
guard function to check if the parameter is a string or a number, and then narrow the type of the
parameter accordingly.*/

// Example of type narrowing
function printValue(value: string | number): void {
    if (isString(value)) {
        console.log("The value is a string: " + value);
    } else if (isNumber(value)) {
        console.log("The value is a number: " + value);
    }
}

type Shape = "circle" | "square" | "rectangle";

function getDimension(dimensions: number[], index: number): number {
    const value = dimensions[index];

    if (value === undefined) {
        throw new Error(`Missing dimension at index ${index}`);
    }

    return value;
}

function getArea(shape: Shape, dimensions: number[]): number {
    if (shape === "circle") {
        const radius = getDimension(dimensions, 0);
        return Math.PI * radius * radius;
    } else if (shape === "square") {
        const side = getDimension(dimensions, 0);
        return side * side;
    } else if (shape === "rectangle") {
        const width = getDimension(dimensions, 0);
        const height = getDimension(dimensions, 1);
        return width * height;
    } else {
        throw new Error("Invalid shape");
    }
}

//example of type narrowing with union types
function printValueWithNarrowing(value: string | number | boolean): void {
    if (isString(value)) {
        console.log("The value is a string: " + value);
    } else if (isNumber(value)) {
        console.log("The value is a number: " + value);
    } else if (isBoolean(value)) {
        console.log("The value is a boolean: " + value);
    }
}

//------- unknown type ----------
/*The unknown type is a type-safe counterpart of the any type. It represents any value, but unlike
any, it requires you to perform some type checking before performing operations on it. This makes
it safer to use than any, as it prevents potential runtime errors.*/

// Example of unknown type
function printUnknownValue(value: unknown): void {
    if (typeof value === "string") {
        console.log("The value is a string: " + value);
    } else if (typeof value === "number") {
        console.log("The value is a number: " + value);
    } else if (typeof value === "boolean") {
        console.log("The value is a boolean: " + value);
    }
}

