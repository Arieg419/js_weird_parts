var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

}

var logPersonName = logName.bind(person); // creates new object and binds person. this === person now
// .bind creates a copy of whatever object you are pointing to, with new this variable
logPersonName('en');

// first param in call, specifies the 'this' variable. call invokes function as well.
logName.call(person, 'en', 'es');
// only difference between call and apply is that you must pass an array of params. apply invokes function ultimately as well.
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

}).apply(person, ['es', 'en']);

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

// borrowing getFullName method from person object
console.log(person.getFullName.apply(person2));

/*
 * function currying, creating a copy of a function with some preset params.
 * Very useful in mathematical situations.
 */

// function currying
function multiply(a, b) {
    return a*b;
}

// binding permanently sets params. here 2, will always be equal to first param, a
// this will end up as second param, b
var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4)); // a * b == 2 * 4 == 8

var multipleFixed = multiply.bind(this,2,2);
// this will always be equal to a * b == 2 * 2 == 4

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
