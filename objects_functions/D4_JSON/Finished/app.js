var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

// turns object literal into JSON
// JSON is a sub set of an object literal.
// JSON requires quotes around the strings.
console.log(JSON.stringify(objectLiteral));

// connverting string back to object.
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
