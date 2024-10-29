function greet(person) {
    if (person === void 0) { person = "Anonymous"; }
    return "Hello ".concat(person);
}
var res1 = greet();
console.log(res1);
