enum Status{
    SUBMITTED, 
    PENDING, 
    APPROVED, 
    DELETED,
    DISCONTINUED
}

enum CarType{
    SUV = 'SUV',
    MPV = 'MPV',
    FWD = 'FWD'
}

enum Priority{
    HIGH = 10,
    MEDIUM = 20,
    LOW = 30
}

let currentStatus: number = Status.APPROVED;

let formStatus: Status = Status.APPROVED;

console.log(currentStatus);
console.log(formStatus);

console.log('=====================');

console.log(CarType.MPV);
console.log(Priority.MEDIUM);