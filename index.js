Higher Order function- when we accept a function as input i.e.(callback) or when we return a function to another function i.e.(function returning function), 0r-when ur doing both work in same fun - lets say accepting a fun as input as well as returning a function, this is called higher order function.

// callback function

// creating a function 

// example 1- understanding
// function myFunc1(a) {
//   console.log('this is function 1');
//   console.log(a)
// }
// myFunc1([1,2,3,'array parameter']);
// myFunc1("this time parameter is string");
// myFunc1({key:'This time parameter is an obj'})

// here we have created a function - myFunc1 it accepts a paramter named as "a" and this "a" can be anything like array,string,object

// example 2 ----------------

// let us create an another function named as myFunc2() and try to pass it as an arg
// step 1 "creating a new function myFunc2"


// function myFunc2(){
//   console.log('this is function 2');
// }

// step-3 accepting that fun as parameter in myFunc1 with parameter named as callback


// function myFunc1(callback){
//   console.log('hey there');
//   // step-4 calling that recived parameter 
//   callback();
// }

// step 2 passing that function while calling myFunc1

// myFunc1(myFunc2);

// ->>>>function calling another function is called a callback fun


// Function returning another function--------------------------------------------------------------------------------

// example 1 - a function can return anything like number,array,object, 

// function aFunc(){
//   console.log('Function returning array')
//   return [1,2,3,4];
// }
// const returnedValue=aFunc();
// console.log(returnedValue);

// can it return a function - yes

// example 2- function returning another function

function aFunc(){
  console.log('Function returning another function')
  // another fun
  function anotherFunc(){
   return 'Hello world'
  }
  return anotherFunc;
}

const returnedValue=aFunc();
console.log(returnedValue())


