whrandom
========

This is a port of Python's [whrandom](http://docs.python.org/release/2.4/lib/module-whrandom.html) module, which is a [pseudorandom number generator](http://en.wikipedia.org/wiki/Pseudorandom_number_generator).

That means it creates "random" numbers with a <em>seed</em>, and if you provide the same seed it will create the same set of numbers.  This is a common feature in many languages, but not offered by Javascript's `Math.random()`.

This isn't the best random number generator, but the algorithm is very simple.  Python for instance now prefers the [Marsenne Twister](http://en.wikipedia.org/wiki/Mersenne_twister).  But this is okay for most people.

Using it
--------

If you include `random.js` it will expose one variable: `RandomStream`.  You can also require the module using [requirejs](http://requirejs.org/) or import it in Node (though I haven't provided a pacakge.json), and in both cases the exported object is `RandomStream` itself (e.g., `var RandomStream = require("./random.js");`)

To create a stream, call `RandomStream(seed)`; if no `seed` is provided then `Date.now()` is used.  To get new random numbers from a stream, simply call the function.  All random numbers are *between* 0 and 1 (but never actually 1), just like `Math.random()`.
