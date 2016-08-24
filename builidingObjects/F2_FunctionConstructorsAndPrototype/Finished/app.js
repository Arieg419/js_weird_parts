function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');

}

Person.prototype.getFullName = function() { // is prototype of an object created using 'new' keyword!!!
    return this.firstname + ' ' + this.lastname;
}

// Now john will have access to getFullName
// BUG POTENTIAL, if we forget to use 'new'
// this will simply return undefined.
// Convention is that function Constructor starts
// with Capital letter.
var john = new Person('John', 'Doe');
console.log(john);

// now jane will have access to getFullName
var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

// will search through original object, and then though own Person.prototype
console.log(john.getFormalFullName());

// so we can add features to all Classes later in the program using the prototype method!
// Props are usually set in Constructor
// Methods are set via prototypes
// Adding to the prototype saves us memory from an efficieny stand point. Instead of copying
// the getFormalFullName() function for every object created, we just add it on the prototype
// saving a ton of memory space!
