type carType = String;
type serial = number;

type Parking = {
    vehicleType:carType,
    vehicleSerial: serial
}

const newCarType:carType = 'SUV';
const newSerial:serial = 23;

const parking: Parking = {
    vehicleType: newCarType,
    vehicleSerial: newSerial
}


interface ParkingArea {
    vehicleType: carType, 
    vehicleSerial: serial
}

const parkingArea:ParkingArea = {
    vehicleType: newCarType,
    vehicleSerial: newSerial
}

console.log(parking.vehicleType)
console.log(parking.vehicleSerial)
console.log(parkingArea.vehicleType)
console.log(parkingArea.vehicleSerial)


interface Rectangle {
    height:number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color:String
}

const colRectangle:ColoredRectangle = {
    height: 19,
    width: 23,
    color: "Red"
}

console.log(colRectangle.height);
console.log(colRectangle.width);
console.log(colRectangle.color);