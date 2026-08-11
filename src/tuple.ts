let chaituple: [number, string, boolean] = [1, "chai", true];
console.log(chaituple);

/*tuple is a type that allows you to create an array with a fixed length and a
fixed type for each element.*/

//tuple in objects

let chaiObject: { name: string, price: number, quality: boolean } = {
    name: "chai",
    price: 10,
    quality: true
}
console.log(chaiObject);

//tuple in functions
function printChai(chaiObject: { name: string, price: number, quality: boolean }): void {
    console.log(chaiObject);
}
printChai(chaiObject);

//tuple in readonly
const chaiObject2: Readonly<{ name: string, price: number, quality: boolean }> = {
    name: "chai",
    price: 10,
    quality: true
}
//Readonly is used to make object properties read only