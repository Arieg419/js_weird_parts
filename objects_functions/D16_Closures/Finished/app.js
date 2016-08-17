function greet(whattosay) {

   return function(name) {
       console.log(whattosay + ' ' + name);
   }

}

greet('Hi')('Omer');

var sayHi = greet('Hi');
sayHi('Tony');
