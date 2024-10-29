// 1.
function throwError(msg) {
    throw new Error(msg);
}
// 2.
function infiniteLoop() {
    while (true) { }
}
// 3.
var x;
function neverReturns() {
    while (true) { }
}
x = neverReturns(); // This line will cause a compile-time error because the function never returns
