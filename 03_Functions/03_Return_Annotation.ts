//Regular function

function double(x: number): number {
  return x * x;
}

const res = double(2);
console.log(res);

// Using Arrow Functions
const double2 = (x: number): number => x * x;
const res2 = double2(2);
console.log(res2);
