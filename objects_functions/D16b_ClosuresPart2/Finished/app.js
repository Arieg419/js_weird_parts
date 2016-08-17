function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            function() {
                console.log(i);
            }
        )

    }

    return arr;
}

var fs = buildFunctions();

fs[0](); // output is 3, same outer environment reference
fs[1](); // output is 3, same outer environment reference
fs[2](); // output is 3, same outer environment reference
// value of i is whatever it is, whenver i invoke function.
// invoking all above functions when i is set to 3.

function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        // let j = i; let gives every var a different memory scope.
        arr.push(
            (function(j) {  
                return function() {
                    console.log(j);
                }
            }(i))
        )

    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // output is 0
fs2[1](); // output is 1
fs2[2](); // output is 2
