//functions in typeScript

//Examples
//without parameters
function getChai(): Number {
    return 10;
}

//with parameters 
function add(x: number, y: number): number {
    return x + y;
}

function makeOrder(order: string): string {
    return order;
}

function printOrder(order: string): void {
    console.log(order);
}

function orderChai(type?: string): string {
    return type || "chai";
}

function orderChai2(type: string = "chai"): string {
    return type;
}