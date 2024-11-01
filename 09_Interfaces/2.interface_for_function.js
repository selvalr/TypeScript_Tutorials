// ---------------------------
// Example 1
// Usage
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
console.log(add(5, 3));
console.log(subtract(7, 2));
// Function that accepts an object adhering to the Car interface
function displayCarInfo(car) {
    console.log("Brand: ".concat(car.brand, ", Model: ").concat(car.model, ", Year: ").concat(car.year));
}
// Create an object that adheres to the Car interface
var myCar = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
};
// Call the function with the object
displayCarInfo(myCar);
// ---------------------------
