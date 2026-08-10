//objects in typeScript 

/*object in typeScript is a collection of properties and methods. It is a way to group related
data and functionality together.*/

//Example of object
let person: object = {
    name: "John",
    age: 30
};

type chai = {
    name: string;
    price: number;
    quality: boolean;
}

let value: chai = {
    name: "chai",
    price: 10,
    quality: true
}

//they will give error because quality is missing in value2 object

// let value2 : chai = {
//     name: "chai",
//     price: 10,

// }

//partial object 
//Partial object is a type that allows you to create an object with some properties of another type.
type chai2 = Partial<chai>

let value2: chai2 = {
    name: "chai",
    price: 10,
}
value2.quality = true; // we can add quality property later because it is partial object

//required object
//Required object is a type that allows you to create an object with all properties of another type.
type chai3 = Required<chai>

let value3: chai3 = {
    name: "chai",
    price: 10,
    quality: true
}

//readonly object
//Readonly object is a type that allows you to create an object with all properties of another type.
type chai4 = Readonly<chai>

let value4: chai4 = {
    name: "chai",
    price: 10,
    quality: true
}
//value4.price = 20; // we can not change price because it is readonly

//pick object
//Pick object is a type that allows you to create an object with some properties of another type.
type chai5 = Pick<chai, "name" | "price">

let value5: chai5 = {
    name: "chai",
    price: 10,
}


