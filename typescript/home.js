function greet(person, date) {
    console.log("hello ".concat(person.toUpperCase(), ", today is ").concat(date.toDateString()));
}
console.log('hello');
greet("Brandon", new Date());
