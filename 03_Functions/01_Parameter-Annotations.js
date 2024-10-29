// Regular Func
function addOne(num) {
    return num + 1;
}
var result = addOne(3);
console.log(result);
// Arrow Func Annotations
var double = function (x, y) { return x * y; };
var res = double(2, 10);
console.log(res);
// Also notice, TypeScript will gives you warning if you provide more or less arguments then you specifiy in your parameters area.
// double(2, 10, 20); // 👈 Warning
