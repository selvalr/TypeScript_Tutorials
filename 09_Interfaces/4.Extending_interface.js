var movie1 = {
    name: "John Wick",
    ratings: 7,
    printMovieInfo: function (name, price, ratings) {
        return "Name: ".concat(name, ", Price: ").concat(price, ", Ratings: ").concat(ratings);
    },
    genra: "Action",
};
var res = movie1.printMovieInfo("John Wick", 100, 8);
console.log(res);
