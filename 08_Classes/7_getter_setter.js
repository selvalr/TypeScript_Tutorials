// --------------------------------------------------
var MyClass = /** @class */ (function () {
    function MyClass() {
        this._myProperty = 0;
    }
    Object.defineProperty(MyClass.prototype, "myProperty", {
        get: function () {
            return this._myProperty;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be negative");
            }
            this._myProperty = value;
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
// Create an instance of MyClass
var myInstance = new MyClass();
// Use the getter
console.log("Current value:", myInstance.myProperty);
// Use the setter
myInstance.myProperty = 42;
console.log("New value:", myInstance.myProperty);
// Attempt to set a negative value (will throw an error)
// myInstance.myProperty = -10;
// --------------------------------------------------
// --------------------------------------------------
// class Player {
//   constructor(
//     public first: string,
//     public last: string,
//     private _score: number
//   ) {}
//   private secretMethod(): void {
//     console.log("Secret Method");
//   }
//   get fullName() {
//     return `${this.first} ${this.last}`;
//   }
//   get score(): number {
//     return this._score;
//   }
//   set score(newScore: number) {
//     if (newScore < 0) {
//       throw new Error("Score cannot be negative");
//     }
//     this._score = newScore;
//   }
// }
// const dog1 = new Player("Elton", "Steele", 10);
// console.log(dog1.score);
// --------------------------------------------------
