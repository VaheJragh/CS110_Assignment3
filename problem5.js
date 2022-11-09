// Problem 5
// Given a positive number, output its binary

let num = 47;
let arr = num;
let d1 = 0;
let d2 = 1;

while(arr){ 
    d1=d1+arr%2*d2;
    arr = Math.floor(arr/2);
    d2 = d2*10;
}

console.log(num + " -> " + d1);
