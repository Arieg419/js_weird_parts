function makeGreeting(language) { // factory function

    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }

    }

}

var greetEnglish = makeGreeting('en'); // 'en' will be in Closure space of greetEnglish
var greetSpanish = makeGreeting('es'); // 'es' will be in closure space of greetSpanish

greetEnglish('John', 'Doe'); // new memory space, new exectuion context
greetSpanish('John', 'Doe'); // new memory space, new exectuion context
