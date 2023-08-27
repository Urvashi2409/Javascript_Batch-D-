// console.log("Hello, Daniel");

// literals and variables 

// literals 
// 23.4 
// "Daniel"

// variables
// a = "Urvashi";
// b = 4;

// literals: It cannot be changed 
// variables: It can be changed 

// document.querySelector('#heading2').textContent = "yes";

// let name = "Daniel";
// console.log(name);

// let age = 23;
// console.log(age);

// age = 45;
// console.log(age);

// if we use let then we can modify the value of the variable 

// const last = "Guba";
// console.log(last);

// last = "Anand";
// console.log(last);

// you can change the value of let variable but not the const 

// var gender = "male";
// console.log(gender);

// gender = "female";
// console.log(gender);

// naming conventions for a variable:

// let YEERu = "you";

// data types in javascript 

// every number even if its an integer or a decimal, comes under number data type 
// let a = 34;
// console.log(typeof a);

// let a = 45.56;
// console.log(typeof a);

// let a = 34.3434423446942334623963636949634;
// console.log(typeof a);

// a single character and multiple characters, comes under the string data type 
// let a = 'r';
// console.log(typeof a);

// let a = "Hello, world!";
// console.log(typeof a);

// let a = false;
// console.log(typeof a);

// if no value is there = undefined 
// let a;
// console.log(typeof a);

// if empty value is there, then null 
// let a = null;
// console.log(typeof a);

// if you want to show a big integer then put a n at the end of the number 
// let a = 2424484923462342496823948626394n;
// console.log(typeof a);

// Arithematic operators 
// console.log(3+4);
// console.log(3-4);
// console.log(3*4);
// console.log(3/4);

// in modulo operation, 
// if dividend < divisor, then ans = dividend 
// if dividend > divisor, then ans = remainder 
// console.log(11%3);
// console.log(3%4);

// in javascript, exponentiation symbol is ** 
// console.log(2**3);

// conditional statements 
// age = 18;
// if (age < 18){
//     console.log("You are not eligible to vote");
// }
// else if(age > 18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("Go and apply for the voter id");
// }

// only one statement gets executed in the whole if else if else block 
// if(2 > 3){
//     console.log("2 is greater than 3");
// }
// else if(2 == 3){
//     console.log("2 is equal to 3");
// }
// else{
//     console.log("2 is less than 3");
// }

// if(2 != 3){
//     console.log("2 is not equal to 3");
// }
// if(2 == 2){
//     console.log("2 is equal to 2");
// }
// else{
//     console.log("2 is not equal to 2");
// }

// if(2 != 3){
//     console.log("2 is not equal to 3");
// }
// if(2 == 2){
//     console.log("2 is equal to 2");
// }
// if(3 == 4){
//     console.log("3 is not equal to 4");
// }
// else if(3 == 3){
//     console.log("3 is equal to 3");
// }
// else{
//     console.log("3 is not equal to 3");
// }

// if(2 > 3){
//     console.log("2 is greater than 3");
// }
// if(3 >= 3){
//     console.log("3 is greater than or equal to 3");
// }
// if(4 < 3){
//     console.log("4 is less than 3");
// }
// if(5 <= 3){
//     console.log("5 is less than or equal to 3");
// }
// else if(5 == 3){
//     console.log("5 is equal to 3");
// }
// else if(5 != 5){
//     console.log("5 is not equal to 5");
// }
// else if(4 == 0){
//     console.log("4 is equal to 0");
// }
// else{
//     console.log("4 is not equal to 0");
// }

// Relational operators 
// > , <, >=, <=, == , !=

// if(2 == 3){
//     console.log("equal");
// }
// if(2 == 4){
//     console.log("not equal");
// }
// if(2 == 5){
//     console.log("dont know");
// }
// if(false == true){
//     console.log("not possible");
// }
// if(true){
//     console.log("true");
// }
// else if(5 != 3){
//     console.log("not equal 5 and 3");
// }
// else if(4 != 4){
//     console.log("not equal 4 and 4");
// }
// else{
//     console.log("Default value!!");
// }

// x = 12;
// y = 3;
// z = 11;
// if(x == 2 && x < 3){
//     console.log(x);
// }
// if(x != 5){
//     console.log("whatever");
// }
// if(x != 5 && y >= 5){
//     console.log("its gonna happen");
// }
// if(z != 0 || x == 2){
//     console.log("you say");
// }
// if(!(y < 10)){
//     console.log(y);
// }
// else if(x < 10 || x < 5){
//     console.log("okkkkkkk");
// }
// else if(y < 10 || y <= 0){
//     console.log("pikachu");
// }
// else if(z == 0 && y ==5){
//     console.log("Pikaboo");
// }
// else{
//     console.log("Default value");
// }


// x = 2;
// y = 30;
// z = 12;
// if(x >= 4 && x <= 2){
//     console.log(x);
// }
// if(x  != -15){
//     console.log("whatever");
// }
// if(x == 5 && y <= 4){
//     console.log("its gonna happen");
// }
// if(z > x && x < y || x == 2 && y == 7 && z == 12){
//     console.log("you say");
// }
// if(!(y < 3)){
//     console.log(y);
// }
// else if(y < 10 || z < 5){
//     console.log("okkkkkkk");
// }
// else if(z > 10 || y <= 100){
//     console.log("pikachu");
// }
// else if(z == 0 && y == 5){
//     console.log("Pikaboo");
// }
// else{
//     console.log("Default value");
// }

// Bitwise operators 

// console.log(4&2);
// console.log(13&10);
// console.log(20&30);

// console.log(7&3);
// console.log(128&71);

// console.log(58|34);
// console.log(~(7&3));
// console.log(~(12&8));

// console.log(12^4);
// console.log(4^2);

// Arithematic operators = %, -, +, /, *, ** 
// logical operators = &&, ||, ! 
// Bitwise operators = &, |, ^, ~ 
// Relational operators = >, <, ==, !=, >=, <= 
// Assignment operator = =, +=, -=, *=, /=, %=, **= 

// Number, String, null, undefined, boolean,bigInt 

// Variable naming conventions
// no num at start 
// $, _ are only allowed symbols 
// uppercase and lowercase allowed  
// spaces are not allowed  

// let aa bb = 45; 

// functions 
// function greeting(name){
//     console.log("Hi", name);
//     console.log("You also got an F");
//     console.log("Failing is a part of life");
//     console.log("You study more");
//     console.log("Eat more chocolates!!!");
//     console.log("You didn't get all A+ Terrible!");
//     console.log("You didn't fail everything");
// }

// greeting("Ethan");
// greeting("Celina");
// greeting("John");
// greeting("Angelina");

// function definition 
// a, b = parameters 
// function add(a, b){
//     c = a + b 
//     console.log(c)
// }

// function call 
// (5, 5) = arguments 
// add(512, 5)

// function func(x){
//     x = 23
//     x += 2 
//     return x 
// }

// ans = func(2)
// console.log(ans)




// 23 2 1 2 23


// global scope 
// x = 23 
// console.log(x)

// function scope 
// function func(x){
//     console.log(x)
//     x--
//     console.log(x)
//     x++;
//     console.log(x)
//     x += 21
//     return x 
// }

// x = func(2)
// console.log(x)

// 12 23 12 

// global scope 
// x = 12
// console.log(x)
// function func(x){
    // function scoped 
//     x = 23
//     console.log(x)
// }

// func(x)
// console.log(x)

// 2 

// if we try to print function's variable a outside the function it will give error 
// function func(a){
//     console.log(a)
// }

// func(2)
// console.log(a)

// Justin = "I am the famous one"
// console.log(Justin) // "I am the famous one"
// function smallTown(){
//     Justin = "I am small town one"
//     console.log(Justin) // "I am small town one"
// }

// console.log(Justin) // I am the famous one
// smallTown()
// console.log(Justin) // I am small town one

// strings  
// mystr = "Raymond"
// newstr = "Raymond"

// if (mystr == newstr){
//     console.log("Equal")
// }
// else{
//     console.log("not equal")
// }


// if (mystr === newstr){
//     console.log("Equal")
// }
// else{
//     console.log("not equal")
// }

// mystr = "45"
// mynum = 45 

// if (mystr === mynum){
//     console.log("Equal")
// }
// else{
//     console.log("not equal")
// }

// == will return true if both values are equal even if both data types are unequal
// === will return true if values and data types both of the things are equal

// slicing in strings 

// let str1 = "I am a string. I am so ugly"
// console.log(str1.slice(0, 9))

// let str = "Daniel lives in los Angeles"
// console.log(str.slice(3, 8))

// we include the starting index value but not the ending index value
// let str = "Daniel lives in los Angeles"
// console.log(str.slice(2, 5))

// let str = "Daniel lives in los Angeles"
console.log(str.slice(-11, -8))
console.log(str.slice(-11, 19))
console.log(str.slice(16, -8))
console.log(str.slice(16, 19))

console.log(str.slice(13, 27))
console.log(str.slice(-14))
console.log(str.slice(13))
console.log(str.slice(-14, 27))

// let str = "tampa bay buccaneers"

console.log(str.slice(2, 9))
console.log(str.slice(-18, -11))
console.log(str.slice(2, -11))
console.log(str.slice(-18, 9))

console.log(str.slice(-13, -6))
console.log(str.slice(-12))
console.log(str.slice(-16, 5))
console.log(str.slice(17, 19))
console.log(str.slice(16, -3))
console.log(str.slice(-1))