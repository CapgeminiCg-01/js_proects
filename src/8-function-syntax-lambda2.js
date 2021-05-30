// 1. doing nothing.
let lm1 = () => {}
 console.log(lm1());
 
// 2. lamda with single line statment. just printing the value
let lm2 = () => console.log("Hello, I am Lambda");
  lm2();
// 3. doing addition; multiline statment
let lm3 = (n1, n2) =>  {
    return n1 + n2;
}
console.log(lm3(15,20));

// 4. doint addition; single line
let lm4 = (n1=0, n2=0) => n1 + n2;

let output1 = lm4();
let output2 = lm4(20);
let output3 = lm4(20,30);
let output4 = lm4(15,20);

console.log( output1, output2, output3, output4);
