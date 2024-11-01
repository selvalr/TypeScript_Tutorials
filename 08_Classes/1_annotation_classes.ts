//class #1 (properties annotations)

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("selva", 24);
console.log(person);

// class #2 (class fields)
class Person2 {
  name: string;
  age: number;
  location: string = "USA"; // 👈 class field

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new Person2("John", 30);
console.log(person2);

// class #3 (readonly props)
class Person3 {
  readonly name: string;
  readonly age: number;
  location: string = "USA";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person3 = new Person3("John", 30);
console.log(person3.age);
person.age = 20; // ERROR ⚠️

// class #4 (public modifier)
class Person4 {
  public name: string;
  public age: number;
  location: string = "USA";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person4 = new Person4("John", 30);
person4.age = 20;
console.log(person4.age);
