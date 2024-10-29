// type variableName (annotations/types) = {property:value}
// -------------------------
// Define a person object
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
// Access and log properties
console.log("Name: ".concat(person.firstName, " ").concat(person.lastName, ", Age: ").concat(person.age));
// -------------------------
// -------------------------
// Using objects as function return value
function printUser() {
    return {
        name: "Alex",
        age: 19,
        location: "USA",
    };
}
var res = printUser();
console.log(res);
function printUserName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
printUserName({ firstName: "Selva", lastName: "LR" });
// -------------------------
