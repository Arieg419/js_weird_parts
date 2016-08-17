greet();

// function expression.
function greet() {
    console.log('hi');
}

// function statement.
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

function log(a) {
   a();
}

log(function() {
    console.log('hi');
});

// First class functions just means that in JS,
// functions can be used just as variables.
// They can be passed as params to other funcs, etc//
