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
function myFunc2(){
  console.log('this is function 2');
}

// step-3 accepting that fun as parameter in myFunc1 with parameter named as callback 
function myFunc1(callback){
  console.log('hey there');
  // step-4 calling that recived parameter 
  callback();
}

// step 2 passing that function while calling myFunc1

myFunc1(myFunc2);

// ->>>>function calling another function is called a callback fun





