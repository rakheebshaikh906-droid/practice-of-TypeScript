//arrays typeScript

//Example of array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Bob"];

console.log(numbers);
console.log(names);

const rating: Array<Number> = [1, 2, 3, 4, 5];//using generic
console.log(rating);

//arrays in objects
type chai = {
    name: String,
    price: Number
};
const menu: chai = {
    name: "chai",
    price: 10
};
console.log(menu);

//readOnly
const biscuit: readonly string[] = ["butter", "sugar", "chocolate"];
//readonly is used to make array read only