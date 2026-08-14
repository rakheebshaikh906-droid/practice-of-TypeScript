// ============================================================
//                    GENERICS IN TYPESCRIPT
// ============================================================

/*
Generics allow us to write reusable and type-safe code
that works with different data types.

<T> is called a Type Parameter.
*/


// ============================================================
// 1. BASIC GENERIC FUNCTION
// ============================================================

function identity<T>(value: T): T {
    return value;
}

const numberValue = identity(100);
const stringValue = identity("Hello");
const booleanValue = identity(true);

console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);


// ============================================================
// 2. GENERIC FUNCTION WITH ARRAY
// ============================================================

function getFirst<T>(items: T[]): T {
    return items[0];
}

const firstNumber = getFirst([10, 20, 30]);
const firstName = getFirst(["Rakheeb", "Ali", "John"]);

console.log(firstNumber);
console.log(firstName);


// ============================================================
// 3. MULTIPLE GENERIC TYPES
// ============================================================

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result = pair("Rakheeb", 21);

console.log(result);


// ============================================================
// 4. GENERIC INTERFACE
// ============================================================

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 100
};

const stringBox: Box<string> = {
    value: "Hello"
};

console.log(numberBox);
console.log(stringBox);


// ============================================================
// 5. GENERIC TYPE ALIAS
// ============================================================

type ApiResponse<T> = {
    data: T;
    success: boolean;
};

const userResponse: ApiResponse<string> = {
    data: "Rakheeb",
    success: true
};

const numberResponse: ApiResponse<number> = {
    data: 200,
    success: true
};

console.log(userResponse);
console.log(numberResponse);


// ============================================================
// 6. GENERIC CLASS
// ============================================================

class Storage<T> {

    constructor(private value: T) { }

    getValue(): T {
        return this.value;
    }
}

const numberStorage = new Storage(100);
const stringStorage = new Storage("Hello");

console.log(numberStorage.getValue());
console.log(stringStorage.getValue());


// ============================================================
// 7. GENERIC CONSTRAINT
// ============================================================

/*
T must have a "length" property.
*/

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3, 4]));


// getLength(100); // ❌ Error
// number does not have a length property


// ============================================================
// 8. GENERIC WITH keyof
// ============================================================

/*
K must be a key of T.
*/

function getProperty<T, K extends keyof T>(
    object: T,
    key: K
): T[K] {
    return object[key];
}

const user = {
    name: "Rakheeb",
    age: 21
};

const name = getProperty(user, "name");
const age = getProperty(user, "age");

console.log(name);
console.log(age);


// getProperty(user, "salary"); // ❌ Error
// "salary" is not a key of user


// ============================================================
// 9. GENERICS VS ANY
// ============================================================

/*
Using any:

function identity(value: any): any {
    return value;
}

Type information is lost.
*/


// Using Generics:

function identitySafe<T>(value: T): T {
    return value;
}

const value = identitySafe("Hello");


// ============================================================
// 10. REAL-WORLD API EXAMPLE
// ============================================================

interface User {
    id: number;
    name: string;
}

interface Response<T> {
    data: T;
    status: number;
}

const response: Response<User> = {
    data: {
        id: 101,
        name: "Rakheeb"
    },
    status: 200
};

console.log(response.data.name);
console.log(response.data.id);


// ============================================================
//                    QUICK REVISION
// ============================================================

/*

Generic Function:

function identity<T>(value: T): T {
    return value;
}


Multiple Generics:

function pair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}


Generic Interface:

interface Box<T> {
    value: T;
}


Generic Type:

type ApiResponse<T> = {
    data: T;
};


Generic Class:

class Storage<T> {
    constructor(private value: T) {}
}


Generic Constraint:

<T extends SomeType>


keyof:

<K extends keyof T>


IMPORTANT:

Generics = Reusable + Type Safe Code

any      → Type safety is lost
Generic  → Type information is preserved

*/