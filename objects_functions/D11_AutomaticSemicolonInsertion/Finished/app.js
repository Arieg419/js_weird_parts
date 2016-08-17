function getPerson() {

    // avoid automoatic semicolon insertion by syntax parser.
    return { // if object was on new line, syntax parser would add semicolon, returning undefined.
        firstname: 'Tony'
    }

}

console.log(getPerson());
