//typeScript 

/*typeScript is the advanced version of JavaScript which is used to develop large scale
web applications. It is a superset of JavaScript which means that any valid JavaScript
code is also valid TypeScript code. TypeScript adds optional static typing, classes,
and interfaces to JavaScript. It is developed and maintained by Microsoft.*/

let a: number = 10;
let b: string = "Hello";
let c: boolean = true;

console.log(a);
console.log(b);
console.log(c);

let d: any = 10;
d = "Hello";
d = true;

console.log(d);

//functions

function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1, 2));

function print(message: string): void {
    console.log(message);
}

print("Hello World");

//interface
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "John",
    age: 30
};

console.log(person.name);
console.log(person.age);
