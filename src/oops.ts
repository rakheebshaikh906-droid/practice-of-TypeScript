//oops in typeScript

//classes in typeScript

//Example of class
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

//objects
const person = new Person("John", 30);
console.log(person.greet());

//public,privete,protected,readOnly,static
/* public -> accessible from anywhere, private -> accessible only within the class,
protected -> accessible within the class and its subclass, static -> accessible without 
creating an instance of the classes,readOnly -> accessible only for reading*/

class chai {
    public name: string;
    private price: number;
    protected quality: boolean;
    static count: number = 0;
    readonly quantity: number = 10;
    constructor(name: string, price: number, quality: boolean, quantity: number) {
        this.name = name;//public will access using child class
        this.price = price;//private will access using child class
        this.quality = quality;//protected will access using child class
        chai.count++;//static will acces using class name.____
        this.quantity = quantity;//readonly will access using child class

    }
    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.price} and I'm ${this.quality}.`;
    }
}

const chaiObject: chai = new chai("chai", 10, true, 10);
console.log(chaiObject.greet());

//inheritance
/* inheritance is a way to create a new class that is a copy of an existing class.*/
class chai1 extends chai {
    constructor(name: string, price: number, quality: boolean, quantity: number) {
        super(name, price, quality, quantity);
    }
    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.price} and I'm ${this.quality}.`;
    }
}

const chaiObject1: chai1 = new chai1("chai", 10, true, 10);
console.log(chaiObject1.greet());

//polymorphism
/* polymorphism is a way to create multiple objects from a single class.*/

class biscuit {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.price}.`;
    }
}

class parle extends biscuit {
    constructor(name: string, price: number) {
        super(name, price);
    }
    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.price}.`;
    }
}

const biscuitObject: parle = new parle("parle", 10);
console.log(biscuitObject.greet());

//inheritance
/* inheritance means inherit the properties and methods from a parent class to a child class.*/

class chai2 extends chai {
    constructor(name: string, price: number, quality: boolean, quantity: number) {
        super(name, price, quality, quantity);
    }
}

const chaiObject2: chai2 = new chai2("chai", 10, true, 10);
console.log(chaiObject2.greet());

//polymorphism
/* polymorphism means have multiple forms.*/

class biscuit1 {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.price}.`;
    }
}

class parle1 extends biscuit1 {
    constructor(name: string, price: number) {
        super(name, price);
    }
    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.price}.`;
    }
}

const biscuitObject1: parle1 = new parle1("parle", 10);
console.log(biscuitObject1.greet());

