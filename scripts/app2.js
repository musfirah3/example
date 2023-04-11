// Assignment 2
// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function adder (num1){
//     return num1+5;
// }
// let num1=+prompt("Enter any number")
// let result = adder(num1)
// console.log (result);


// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// function searchArray(arr, val) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (arr[0] === val) {
//         return true;
//     }
//     return searchArray(arr.slice(1), val);
// }
// let friends = ["Musfirah", "Omama", "Omema", "Mariam", "Nuha", "Maham", "Misbah"];
// let val = prompt("Enter your friend name ")
// console.log(searchArray(friends, val));

// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// function change() {
//     const header = document.getElementById("head");
//     header.innerText="My introduction";
//     const para = document.getElementById("para");
//     para.innerText="My name is Musfirah Waseem";
//     const newText = document.createTextNode("I am a good girl");
//     const newElement = document.createElement("p");
//     newElement.appendChild(newText);
//     para.parentNode.appendChild(newElement);
//   }  


// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


// function changeText2(){
//     var firstname = document.getElementById('firstname').value;
//     document.getElementById('boldStuff2').innerHTML = firstname;
//     var node=document.createElement("LI");
//     var textnode=document.createTextNode(firstname);
//     node.appendChild(textnode);
//     document.getElementById("demo").appendChild(node);
//      }

// Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element,f and the second argument is a string representing the new background color.


// setInterval( function changeBackgroundColor(element, color) {
// const ele = document.getElementById("my-element");

// let color1 = Math.floor(Math.random()*16777215).toString(16);
// ele.style.backgroundColor = "#"+color1
// },500);

// Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

// function Record() {
//     return {
//         Name: "Musfirah",
//         Age: 22,
//         Education: "BS",
//         Subject: "Space Science"
//     };
// }
// localStorage.setItem(Record);

// Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.


// let stringify = JSON.stringify(Record);
// let record=prevRecord=localStorage.getItem("Record");
// let Record=prevRecord ? JSON.parse(stringify) :[];

// Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.
// let prevStudent=localStorage.getItem("student");
// let student=prevStudent ? JSON.parse(prevStudent):[];
// function StudentsRecord() {
//     let std= {
//         name: prompt("What's your name?"),
//         rollNumber: +prompt("Enter your roll number"),
//         batch: prompt("Enter your batch year"),
//         course: prompt("Enter your course")
//     };
//     student.push(std);
//     console.log(std);
//     let stringify=JSON.stringify(student);
//     localStorage.setItem("student",stringify);
//}