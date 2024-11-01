// Usage of the extended interface
var myCar = {
    brand: "Toyota",
    model: "Camry",
    start: function () {
        console.log("Car started");
    },
    stop: function () {
        console.log("Car stopped");
    },
};
var huxn = {
    firstName: "HuXn",
    lastName: "WebDev",
    age: 18,
    printUserInfo: function (firstName, lastName, age) {
        return "Name: (".concat(firstName, " ").concat(lastName, ") Age: (").concat(age, ")");
    },
};
console.log(huxn.printUserInfo("HuXn", "WebDev", 18));
