/**
 * This method also works as Overloaded method.
 * Function Parameter with Default Value
 */

function addition(p1=0, p2=0){
    return p1+p2;
}

let output1 = addition();      
let output2 = addition(15)   // return p1=15 + p2=0
let output3 = addition(15, 20); // return p1=15 + p2=20    
let output4 = addition(15, 20, 30); // 30 gets negligible.


console.log(output1, output2, output3, output4);