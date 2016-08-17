function Person(firstname, lastname) { // function Constructor

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    // if nothing is returned, because we invoked function with
    // 'new' we will return object that was set as 'this' variable,
    // which in this case is the object itself.
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

// Function Constructor
/*
 * A normal function that is used to construct objects.
 * The 'this' variabel points to a new empty object, and that
 * object is returned from the function automatically.
 */
