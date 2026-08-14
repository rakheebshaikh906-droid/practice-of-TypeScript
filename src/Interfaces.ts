// ============================================================
//                INTERFACES IN TYPESCRIPT
// ============================================================

/*
What is an Interface?

An interface defines the structure or shape of an object.

It specifies:
- Properties
- Property types
- Methods
- Optional properties
- Readonly properties

An interface acts like a CONTRACT.
*/


// ============================================================
// 1. BASIC INTERFACE
// ============================================================

interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Rakheeb",
    age: 21
};

console.log(user);


// ============================================================
// 2. INTERFACE WITH METHODS
// ============================================================

interface Student {
    name: string;
    age: number;

    greet(): void;
}

const student: Student = {
    name: "Rakheeb",
    age: 21,

    greet() {
        console.log("Hello!");
    }
};

student.greet();


// ============================================================
// 3. OPTIONAL PROPERTIES
// ============================================================

/*
Use ? to make a property optional.
*/

interface Employee {
    name: string;
    age: number;
    email?: string;
}

const employee1: Employee = {
    name: "Rakheeb",
    age: 21
};

const employee2: Employee = {
    name: "Ali",
    age: 22,
    email: "ali@gmail.com"
};


// ============================================================
// 4. READONLY PROPERTIES
// ============================================================

/*
readonly properties cannot be modified after initialization.
*/

interface Account {
    readonly id: number;
    name: string;
}

const account: Account = {
    id: 101,
    name: "Rakheeb"
};

account.name = "Ali"; // ✅ Allowed

// account.id = 102;  // ❌ Error
// Cannot assign to 'id' because it is a readonly property.


// ============================================================
// 5. INTERFACE WITH FUNCTION
// ============================================================

/*
An interface can define the structure of a function.
*/

interface Add {
    (a: number, b: number): number;
}

const add: Add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// ============================================================
// 6. INTERFACE WITH ARRAY
// ============================================================

/*
An interface can define the structure of an array.
*/

interface StringArray {
    [index: number]: string;
}

const names: StringArray = [
    "Rakheeb",
    "Ali",
    "John"
];

console.log(names[0]);


// ============================================================
// 7. INTERFACE EXTENSION
// ============================================================

/*
An interface can extend another interface
using the extends keyword.
*/

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    employeeId: number;
}

const developer: Developer = {
    name: "Rakheeb",
    age: 21,
    employeeId: 101
};

console.log(developer);


// ============================================================
// 8. MULTIPLE INTERFACE INHERITANCE
// ============================================================

/*
An interface can extend multiple interfaces.
*/

interface Contact {
    email: string;
}

interface Address {
    city: string;
}

interface Customer extends Contact, Address {
    name: string;
}

const customer: Customer = {
    name: "Rakheeb",
    email: "rakheeb@gmail.com",
    city: "Aurangabad"
};


// ============================================================
// 9. INTERFACE WITH CLASS
// ============================================================

/*
A class can implement an interface
using the implements keyword.
*/

interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {

    start(): void {
        console.log("Car started");
    }

    stop(): void {
        console.log("Car stopped");
    }
}

const car = new Car();

car.start();
car.stop();


// ============================================================
// 10. ANOTHER CLASS IMPLEMENTING SAME INTERFACE
// ============================================================

class Bike implements Vehicle {

    start(): void {
        console.log("Bike started");
    }

    stop(): void {
        console.log("Bike stopped");
    }
}

const bike = new Bike();

bike.start();
bike.stop();


// ============================================================
// 11. INTERFACE AS A FUNCTION PARAMETER
// ============================================================

interface Product {
    id: number;
    name: string;
    price: number;
}

function displayProduct(product: Product): void {

    console.log("ID:", product.id);
    console.log("Name:", product.name);
    console.log("Price:", product.price);
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 50000
};

displayProduct(product);


// ============================================================
// 12. INTERFACE DECLARATION MERGING
// ============================================================

/*
The same interface can be declared multiple times.

TypeScript automatically combines them.
*/

interface Profile {
    name: string;
}

interface Profile {
    age: number;
}

/*
After merging:

interface Profile {
    name: string;
    age: number;
}
*/

const profile: Profile = {
    name: "Rakheeb",
    age: 21
};


// ============================================================
// 13. INTERFACE VS TYPE ALIAS
// ============================================================

/*
Interface:
*/

interface UserInterface {
    name: string;
    age: number;
}

/*
Type Alias:
*/

type UserType = {
    name: string;
    age: number;
};

/*
Both can describe the structure of an object.

Interface is commonly preferred for:
- Object structures
- Class contracts
- Extending structures
- Public APIs

Type Alias is more flexible for:
- Union Types
- Intersection Types
- Primitive aliases
- Tuples
- Function types
*/


// ============================================================
// 14. TYPE ALIAS UNION
// ============================================================

type ID = string | number;

let userId1: ID = 101;
let userId2: ID = "USER101";


// ============================================================
// 15. INTERFACE + INHERITANCE + CLASS
// ============================================================

interface Animal {
    name: string;

    makeSound(): void;
}

class Dog implements Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(this.name + " says Woof!");
    }
}

const dog = new Dog("Bruno");

dog.makeSound();


// ============================================================
// 16. REAL-WORLD EXAMPLE
// ============================================================

interface UserData {
    readonly id: number;
    name: string;
    email: string;
    age?: number;
}

const userData: UserData = {
    id: 101,
    name: "Rakheeb",
    email: "rakheeb@gmail.com",
    age: 21
};

console.log(userData);


// ============================================================
//                IMPORTANT KEYWORDS
// ============================================================

/*

interface
    -> Creates an interface

extends
    -> Inherits from another interface

implements
    -> Makes a class follow an interface

readonly
    -> Prevents a property from being modified

?
    -> Makes a property optional


============================================================
INTERVIEW DEFINITION
============================================================

An interface in TypeScript defines the structure or contract
of an object or class. It specifies the properties and methods
that must be present and their types.

Interfaces support:
- Inheritance using extends
- Class implementation using implements
- Declaration merging
- Optional properties
- Readonly properties


============================================================
QUICK REVISION
============================================================

Basic Interface:

interface User {
    name: string;
    age: number;
}


Optional Property:

interface User {
    email?: string;
}


Readonly:

interface User {
    readonly id: number;
}


Interface Extension:

interface Employee extends Person {
    employeeId: number;
}


Class Implementation:

interface Vehicle {
    start(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car started");
    }
}


============================================================
EASY DEFINITION
============================================================

Interface = Contract / Structure of an object or class.

*/