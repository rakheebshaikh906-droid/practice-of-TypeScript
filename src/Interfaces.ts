/*interfaces in typeScript are used to define the structure of an object. They can be used to define
the shape of an object, including its properties and methods. Interfaces can also be used to define 
the structure of a class.*/

type value = {
    name: string;
    age: number;
};

//now we convert the above type to interface
interface Value {
    name: string;
    age: number;
}
//now we can use the interface to define the structure of an object
let person: Value = {
    name: "John",
    age: 30
};
console.log(person.name);
console.log(person.age);

//---------- type alias ---------- 
/*type alias is a feature in typeScript that allows you to create a new name for a type.
It can be used to create a new name for a primitive type, union type, intersection type,
tuple type, or any other type.*/

type Person = {
    name: string;
    age: number;
};

//now we can use the type alias to define the structure of an object
let person2: Person = {
    name: "John",
    age: 30
};
console.log(person2.name);
console.log(person2.age);