function getDate(): Date {
    return new Date();
}

function getTime(date:Date):number {
    return date.getTime();
}

function add(num1:number, num2:number):void {
    console.log(num1+num2);
}

// optional parameter
function multiply(num1:number, num2?:number):void {
    console.log(num1 * (num2 || 1));
}

// default value
function divide(num1:number, num2:number = 1):void {
    console.log(num1/num2);
}

// named parameter
function subtract({large, small}: {large:number, small: number}):void {
    console.log(large-small);
}

// rest parameter
function addAll(...numbers: number[]):void {
    let sum:number = 0;

    numbers.forEach(item => sum+=item);

    console.log(sum);
}

let time = getTime(getDate());

console.log(time);

add(4, 5);

multiply(5);

multiply(4, 3);

divide(15);

subtract({small:34, large:100});

addAll(10,20,30,40);