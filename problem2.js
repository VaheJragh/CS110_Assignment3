// Problem 2
// From 0-100 grades, print the letter grade

let n=75;

if (n>=0 && n<60){
    grade = "F";
}
else if(n>=60 && n<=62){
    grade = "D-";
}
else if(n>=63 && n<=66){
    grade = "D";
}
else if(n>=67 && n<=69){
    grade = "D+";
}
else if(n>=70 && n<=72){
    grade = "C-";
}
else if(n>=73 && n<=76){
    grade = "C";
}
else if(n>=77 && n<=79){
    grade = "C+";
}
else if(n>=80 && n<=82){
    grade = "B-";
}
else if(n>=83 && n<=86){
    grade = "B";
}
else if(n>=87 && n<=89){
    grade = "B+";
}
else if(n>=90 && n<=92){
    grade = "A-";
}
else if(n>=93 && n<=96){
    grade = "A";
}
else if(n>=97 && n<=100){
    grade = "A+";
}

switch (grade){
    case "F":
    case "D-":
    case "D":
    case "D+":
        console.log("Your grade is " + n + " which corresponds to " + grade +". You failed!");
        break;
    default:
        console.log("Your grade is " + n + " which corresponds to " + grade +". You Passed!");
}
