function sayHello(name="morning!"){
    return `Hello ${name}`;   // return "Hello" + name
}

let output1 = sayHello();
let output2 = sayHello("mohit");

console.log(output1, output2);