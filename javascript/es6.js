//Arrow function

arrowFun = (studentsDept)=>{
    return studentsDept[0];
}
arrowFun(["AIML","CSE","IT"]);

//Destructuring operator

var arr = [90,95,93];
var [a1,a2,a3] = arr;
console.log(a1);
console.log(a2);
console.log(a3);

//ternary operator

var a = 10;
var b = 20;
b = (a>b?"a is greater":"b is greater");
console.log(b);

//spread operator
var arr = [1,2,3,4,5];
var arr1 = [6,7,8,9,10];
var combined_arr = [11,1,2,13,14,...arr,...arr1];
console.log(combined_arr);

//rest operator
add = (...numbers) => {
    return numbers;
  }
console.log( add(1,2,3,4,5,6,7,8));

//hoisting
console.log(a);
const a = 10; 
console.log(a);

