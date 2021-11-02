import getClasses from "./getClasses";

console.log("ran from index.js");
getClasses();

const obj = { a: "alpha", b: "bravo" };
const newObj = { ...obj, c: "charlie" };
console.log(newObj);

// WARNING: this wouldn't get transpiled. It'll still work in a modern browser.
console.log(["a", "b", "c"].includes("b"));
