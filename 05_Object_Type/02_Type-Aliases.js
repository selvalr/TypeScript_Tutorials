var printUserInfo = function (user) {
    return "Name: (".concat(user.name, ") Age: (").concat(user.age, ") Location: (").concat(user.location, ")");
};
var result = printUserInfo({ name: "Alex", age: 20, location: "USA" });
console.log(result);
