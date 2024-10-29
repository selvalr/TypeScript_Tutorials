type Person1 = {
  name: string;
  age: number;
  readonly email: string;
};

const user2: Person1 = {
  name: "John",
  age: 20,
  email: "test@gmail.com",
};

console.log(user2.email); // Valid
// user.email = "john@gmail.com" // 🚫 Not Valid
