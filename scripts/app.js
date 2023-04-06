// Assignment
// if-else
// let age = +prompt("What is your age");
// if(age <=10){
// document.write("Welcome!")
// }else{
//     document.write("You are not allowed")
// }


// Table
// let table = +prompt("Enter the number for table you want..");
// for(let i=1; i<=10; i++){
// console.log(table + "x"+ i + "=" + table*i);
// }

// Question:1
// Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = Number(prompt("Enter any number"));
let num2 = Number(prompt("Enter any other number"));
if(num1>num2){
    console.log( "First number is greater which is "+num1);
}else if(num1<num2){
    console.log( "Second number is greater which is "+num2 );
}


// Question:2
// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let x = +prompt("Enter any integer");
if (x > 0) {
    alert("The sign is +");
}
else {
    alert("The sign is -");
}

// Question:3
// Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let num1 = +prompt("Enter 1st number");
let num2 = +prompt("Enter 2nd number");
let num3 = +prompt("Enter 3rd number");
let num4 = +prompt("Enter 4th number");
let num5 = +prompt("Enter 5th number");
if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log("Your 1st number is greater than others")
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log("Your 2nd number is greater than others")
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    console.log("Your 3rd number is greater than others")
}
else if (num4 > num1 && num4 > num3 && num4 > num1 && num4 > num5) {
    console.log("Your 4th number is greater than others")
}
else {
    console.log("Your 5th number is greater")
}

// Question:4
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

for(i=0; i<=15; i++){
    if(i===0){
        alert(i+" is even")
    }
    else if(i % 2 ===0){
        alert(i + " is even")
    }
    else{
        alert(i +" is odd")
}
}

// Question:5
// Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade

let range = +prompt("Enter your average marks..");
if (range < 60) {
    console.log("Your grade is F")
}
else if (range < 70) {
    console.log("Your grade is D")
}
else if (range < 80) {
    console.log("Your grade is C")
}
else if (range < 90) {
    console.log("Your grade is B")
}
else {
    console.log("Your grade is A")
}

// Question:6
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz"

for(i=1;i<=100;i++){
if(i%3===0 && i%5===0){
    console.log("FizzBuzz")
}else if(i%3===0){
    console.log("Fizz")
}
else if (i%5===0){
    console.log("Buzz")
}
else{
    console.log(i)
}
}

// Question:7
// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

let i , j ;
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>")
}