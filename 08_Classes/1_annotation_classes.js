//class #1 (properties annotations)
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person("selva", 24);
console.log(person);
// class #2 (class fields)
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.location = "USA"; // 👈 class field
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
var person2 = new Person2("John", 30);
console.log(person2);
// class #3 (readonly props)
var Person3 = /** @class */ (function () {
    function Person3(name, age) {
        this.location = "USA";
        this.name = name;
        this.age = age;
    }
    return Person3;
}());
var person3 = new Person3("John", 30);
console.log(person3.age);
person.age = 20; // ERROR ⚠️
// class #4 (public modifier)
var Person4 = /** @class */ (function () {
    function Person4(name, age) {
        this.location = "USA";
        this.name = name;
        this.age = age;
    }
    return Person4;
}());
var person4 = new Person4("John", 30);
person4.age = 20;
console.log(person4.age);
