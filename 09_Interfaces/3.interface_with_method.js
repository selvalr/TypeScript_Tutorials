function greet(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName, "!"));
    person.sayHello();
}
var john = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello: function () {
        console.log("Hi there!");
    },
};
var huxn = {
    firstName: "HuXn",
    lastName: "WebDev",
    age: 18,
    sayHello: function () {
        console.log("What's good");
    },
};
greet(john);
greet(huxn);
var song1 = {
    songName: "Natural",
    singerName: "Imagin Drigon",
    printSongInfo: function (songName, singerName) {
        return "Song: (".concat(songName, ") Singer: (").concat(singerName, ")");
    },
};
console.log(song1.printSongInfo("Natural", "Imagin Drigon"));
// ---------------------------
