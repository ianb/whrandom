jshint("random.js");
// => Script passed: ...

var random = RandomStream(1);
random.logState = true;

print(random());

// => 0.02258025041320865

random = RandomStream(61731 + (24903<<32) + (614<<64) + (42143<<96));
for (var i=0; i<1990; i++) {
  // Throw away the first 1990 results
  random();
}
for (var i=0; i<10; i++) {
  print(random());
}

/* =>
0.509619534765086
0.46840731249967416
0.6477464858997404
0.7262869907208884
0.26678101301184265
0.8506177950611828
0.807989512174746
0.34070112203493075
0.3237063277558945
0.9579732082997315
*/

random = RandomStream(61731 + (24903<<32) + (614<<64) + (42143<<96));
for (var i=0; i<1990; i++) {
  // Throw away the first 1990 results
  random();
}
for (var i=0; i<10; i++) {
  print(random());
}

/* =>
0.509619534765086
0.46840731249967416
0.6477464858997404
0.7262869907208884
0.26678101301184265
0.8506177950611828
0.807989512174746
0.34070112203493075
0.3237063277558945
0.9579732082997315
*/

var random1 = RandomStream();
wait(10);
// =>
var random2 = RandomStream();
print(random1() == random2());

// => false
