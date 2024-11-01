var Player = /** @class */ (function () {
    function Player(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    Player.prototype.secretMethod = function () {
        console.log("Secret Method");
    };
    return Player;
}());
var dog1 = new Player("Elton", "Steele");
//console.log(dog1.score);
// dog1.secretMethod();
