// Problem 1
// Print a n*n matrix, where all elements are "+"-s

let n=4;

for(let row=0; row<n; row++){
    let str = "";
    for(let col=0; col<n; col++){
        str += "+";
    }
    console.log(str);
}
