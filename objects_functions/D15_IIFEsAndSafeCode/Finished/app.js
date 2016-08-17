// IIFE
(function(global, name) { // gaining access to global object.

    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(window, 'John')); // IIFE, passing global object window to function. will cause crash with duplicate greeting declaration, in other file.

console.log(greeting);
