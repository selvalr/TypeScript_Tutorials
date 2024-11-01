var Player = /** @class */ (function () {
    //   public readonly first: string;
    //   public readonly last: string;
    //   private score: number = 0;
    function Player(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
    Player.prototype.secretMethod = function () {
        console.log("Secret Method");
    };
    return Player;
}());
var dog1 = new Player("Elton", "Steele", 10);
console.log(dog1.first);
console.log(dog1.last);
