'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
function reverse(sample) {
    var container = ('');
    for (var i = sample.length; i >= 0; i--) {
        container = container.concat(sample.charAt(i));
    }
    return container;
}
console.log(reverse(reversed));
