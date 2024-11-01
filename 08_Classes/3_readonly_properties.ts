class Player1 {
  readonly first: string;
  readonly last: string;
  score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const dog2 = new Player1("Rocky", "Bhai");
console.log(dog2.score);
