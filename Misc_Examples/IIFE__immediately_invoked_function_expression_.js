// IIFE
// (Immediately Invoked Function Expression)
(function add(a, b) { return a + b })(1, 2)
// 3 (edited)
// add is not defined in the global scope! (edited)
//(with an arrow function)
((a, b) => a + b)(1, 2)
// 3