function sayHiLater() {

    var greeting = 'Hi!';

    // setTimeout uses function expressions, first class functions and closures :)
    setTimeout(function() {

        console.log(greeting);

    }, 3000);

}

sayHiLater();  // accesses greeting variable after timeout via closure!

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//
//});

function tellMeWhenDone(callback) {

    var a = 1000; // some work
    var b = 2000; // some work

    callback(); // the 'callback', it runs the function I give it!

}

tellMeWhenDone(function() {

    console.log('I am done!');

});

tellMeWhenDone(function() {

    console.log('All done...');

});
