let title = "Project Title";
let count = 100;
let price = 99.99;
let availability = true;
let employee = { id: 1, name: "rohit" };
let list = [1, 2, 2];
let sum = () => {};

function sayHi(name) {
  // ...
  return `Helloo ${name}`;
}

function findRandomNumber() {
  // ...
  return 100;
}

function getMeMathFunction() {
  // ....
  // ....
  console.log("I am inside the Math Function");
  return (n1, n2) => {
    return n1 + n2;
  };
}

let sumFun = getMeMathFunction();
const total = sumFun();
console.log(total);
