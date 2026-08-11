//---------- enum ----------
/*enum is a type that allows you to create a set of named constants. It is a way to group related
values together.*/

//Example of enum
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;
console.log(myColor);

//enum in functions
function printColor(color: Color): void {
    console.log(color);
}
printColor(Color.Green);

//enum in objects
let chaiObject: { name: string, price: number, quality: boolean } = {
    name: "chai",
    price: 10,
    quality: true
}
console.log(chaiObject);

//default value
enum Color1 {
    Red = 1,
    Green,
    Blue
}
let myColor1: Color1 = Color1.Green;//2
console.log(myColor1);//2


