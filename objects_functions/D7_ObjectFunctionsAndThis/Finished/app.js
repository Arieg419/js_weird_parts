function a() {
    console.log(this); // will refer to global var, window!
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);   // will refer to global var, window!
}

a();

console.log(newvariable); // not good!

b();

// when using this in an object literal, it will
// refer to the object itselt and not the global obj.
var c = {
    name: 'The c object',
    log: function() {
        var self = this; // JS bug workaround.

        self.name = 'Updated c object';
        console.log(self);

        var setname = function(newname) {
            self.name = newname; // correct JS workaround.
            this.name = newname; // this is a bug in JS. will refer to window, b/c defined in function.
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
