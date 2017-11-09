# Notes
1. Modern JavaScript
----------------------
a)  Difference between scope in a block and a function.
----------------------------------------------------------
    i) If we were to initialize a variable using var in a function, it is only defined there.

    ii) If we were to initialize a variable using var in a block, it is accessible outside that given block.

    iii) Hence, if we only want a local variable to exist in a block, we should use the keyword let to initialize that variable.

    iv) const work exactly like let, in that the scope lives within the block or function. Except, the object cannot be changed. Note that, however, the properties of the object can still be changed. For example, const o = { a: 42 }; o.a = 47; o will now be {a: 47};

    v) if we want a completely immutable object, then we have to use object.freeze or immutable js

b) Syntax changes
----------------------
    i) Don't have to use the word function. We can instead use a different syntax.

    e.g.
    const square = function(a) {
        return a * a;
    }

    const square = (a) => return a * a;

    [1,2,3].map(a => a * a);

    ii) Arrow syntax are lexically scoped for the this keyword:

    e.g.
    exports.i = 'am exports'
    console.log(this); --> {i : 'am exports'}

    let util = {
        f1: function() {
                console.log(this);
            },

        f2: () => {
                console.log(this);
            }
    }

    util.f1(); --> {f1: [Function: f1], f2: [Function: f2]}
    util.f2(); --> {i : 'am exports'}

    util.f2() is lexically scoped because it refers to its parent's this scope.

    This is the huge advantage of working with closures and we will take full advantage of this in later applciations.

c) Defining Objects
--------------------------

    i) Writing: When we define an object X for example as shown below and we have other objects/functions with the same name, we could write them in several ways.

    const PI = 3.141592653589793;
    const sum = (a, b) => a + b;
    const square = a => a * a;

    const X = {
        PI: PI,
        sum: sum,
        square: square
    };

    We could instead avoid writing in both times and just write it as:

    const PI = 3.141592653589793;
    const sum = (a, b) => a + b;
    const square = a => a * a;

    const X = {
        PI,
        sum,
        square
    };

    This is equivalent.

    ii) Reading: When we want to read objects and define variables, we could write it in better ways as well.

    const X = {
        PI,
        sum,
        square
    };

    const square = X.square;

    However, we're writing square two times. But we can use the destructure syntax to get it instead:

    const { square } = X;

    We could also destructure multiple variables within X like this:

    const { PI, sum, square } = X; --> if we used the old syntax this would take up 3 lines





