const car = {
    name: '',
    brand: '',
    year: 6
} 

const bike: {
    brand:String,
    fuel:number,
    milage:number
} = {
    brand: 'Yamaha',
    fuel: 5, 
    milage:15 
}


// optional 
const cycle: {
    brand:String,
    shifter:String,
    frame?:String
} = {
    brand:"Veloce",
    shifter: "Shimano"
}

console.log(car.year);
console.log(bike.fuel);


