function printLength(strOrArray: string | string[]) {
  if (typeof strOrArray === "string") {
    console.log(strOrArray.length); // OK
  } else {
    console.log(strOrArray.length); // OK
  }
}
