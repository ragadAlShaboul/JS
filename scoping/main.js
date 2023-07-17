//************************************* Scoping ***************************************************** */

//1. Create a global variable `myFavoriteFood` and return its value in the function's local scope.


// make sure that the variable is in the global scope
let myFavoriteFood = "ccc";
const favoriteFood = function () {
  // TODO: Your code here
  return myFavoriteFood;
};
//2. Create a function `updateFavoriteFood` that updates the value of `myFavoriteFood`

const updateFavoriteFood = function (newValue) {
  // TODO: Your code here
  myFavoriteFood=newValue;
  
};
//3. Use the following closure function to create two separate counters
//4. Modify `createCounter` to take a parameter that represents the starting point for the counter


const createCounter = function (start) {
  let counter = start;
  // this anonymous function is a closure function that has access to its own closure variable
  return function () {
    return ++counter;
  };
};
let counter1=createCounter(2);
let counter2=createCounter(0);
counter1();
counter1();
/*1. Predict the value of the following variables and explain why.

   ```javascript
   let age = 25;
   if (true) {
     age = 30;
   }
   age; // 30

   const myName = "John";
   if (true) {
     const myName = "Jane";
   }
   myName; // John
   ```

2. Predict the value of the following function invocations.

   ```javascript
   let number = 10;
   const func1 = function () {
     let number = 15;

     if (true) {
       let number = 24;
     }

     return number;
   };

   func1(); // 15

   const func2 = function (age) {
     age = 10;
     if (true) {
       let age = 24;
       age = 20;
     }

     return age;
   };

   func2(26); // 10
   ```*/
   /*3. Write a function `countDown` that
    returns a number representing a count 
    down value. With each invocation the 
    number should be lower by one and at 
    zero it will no longer decrement and 
    instead it will return `"count down 
    is over"`.*/

    

   let count=5;
   const countDown = function () {
     // TODO: Your code here
     while(count>1){
        
        return --count;}
    return "count is over";
   };
   //4. Write a function `countUp` that should do the opposite of `countDown`. With every invocation the count value should be incremented by one.

   
   const countUp = function () {
     // TODO: Your code here
     
     return ++count;
   };
   //5. Write a function `resetCount` that accepts a number argument `start` and updates the count variable to equal the starting value and return a string implying that.

   
   const resetCount = function (start) {
     // TODO: Your code here
     return count=start;
   };
   
//6. Write a function `addToList` that accepts a string argument `toDo` and returns the current list as a string. Every time we invoke the function it should return the old toDo item plus the new one.

let toDoList=[];
const addToList = function (toDo) {
  // TODO: Your code here
  toDoList[toDoList.length]=toDo;
  return toDoList;
};
//7. Write a function `createToDoList` that works similarly to `addToList` function but instead of a global variable use a closure variable.


const createToDoList = function () {
  // TODO: Your code here
  let toDoList0=[];
  return function(toDo){
    toDoList[toDoList.length]=toDo;
  return toDoList;
  }
};

const toDoListOne = createToDoList();

//8. Write a function `deposit` that accepts a number argument `amount` and returns the current account balance after depositing the amount.

let balance=0;
const deposit = function (amount) {
   // TODO: Your code here
   balance+=amount;
   return balance;
};
//9. Write a function `withdraw` that accepts a number argument `amount` and returns the current account balance after withdrawing the amount.


const withdraw = function (amount) {
  // TODO: Your code here
  
  if(balance-amount<0){
    
    return `insufficient funds, current balance: ${balance}`
  }
  balance-=amount
   return balance;
};
/*10. Write a closure function `createAccount` that accepts a number argument
 `initialValue` that represents the starting value of the account balance and 
 return a closure function with two parameters, `transactionType` and `amount` 
 that deposit or withdraw from the account balance depending on the `transactionType`
 and returns the total balance amount. Make sure to prevent transactions that withdraw 
 more than the total balance.*/


const createAccount = function (initialValue) {
  // TODO: Your code here
  let balance=initialValue;
  return function(transactionType,amount){
    if(!(transactionType==="deposit" || transactionType==="withdraw")) return "invalid transaction type";
        if(transactionType==="deposit"){
            balance+=amount;
            return balance;
        }
        if(balance-amount<0){
            return `insufficient funds, current balance: ${balance}`
          }
        balance-=amount
        return balance;

  }
};
//1. Write a function `minMax` that accepts a number argument `number` and returns a string representing the maximum and the minimum numbers. Read the comments for more information.


// every time the function is called it must check if the passed argument is the maximum number, minimum number, or
// both, and preserve the result for later invocations
let exNumber=0;
const minMax = function (number) {
    let st="";
  // TODO: Your code here
  if(number>exNumber){
    st= `the maximum number is: ${number} and the minimum number is ${exNumber}`}
    else{st=`the maximum number is: ${exNumber} and the minimum number is ${number}`};
    exNumber=number;
    return st;

};
/*2. Modify the `rockPaperScissors` function from the previous lesson to save the score
 of how many times the user has won and how many the user has lost. Return the score 
 with every invocation.*/

// use your previous solution for `randomMove`
const randomMove = function (winnermove) {
  // TODO: Your code here
  let a =Math.floor(Math.random()*4);
     
     if(a<1)return "rock";
     if(a<2)return "paper";
     if(a<3)return winnermove;
     return "scissors";
};
let won=0;
let lost=0;
let lastwinner="user";
let randomMoveForComputer =randomMove("rock");
const rockPaperScissors = function (move,reset) {
  // TODO: Your code here
if(reset===true){
    won=lost=0;
    return "the game has been reset";}
  randomMoveForComputer = (lastwinner==="user"?randomMove(move):randomMove(randomMoveForComputer));
  // randomMoveForComputer; => rock (use it by referencing it's name, the random value should stay the same)
  // TODO: Your code here

  console.log(randomMoveForComputer);
   if(!(move ==="rock" || move ==="paper" || move ==="scissors"))return"invalid move";
   if(move === randomMoveForComputer)return "it is a draw";
   if(randomMoveForComputer ==="rock" && move==="scissors") {lose++;lastwinner="computer"}
   else if(randomMoveForComputer ==="rock" && move==="paper") {won++;lastwinner="user"}
   else if(randomMoveForComputer ==="paper" && move==="scissors") {won++;lastwinner="user"}
   else if(randomMoveForComputer ==="paper" && move==="rock") {lost++;lastwinner="computer"}
   else if(randomMoveForComputer ==="scissors" && move==="rock") {won++;lastwinner="user"}
   else if(randomMoveForComputer ==="scissors" && move==="paper") {lost++;lastwinner="computer"}

   return `won: ${won},lost: ${lost}`;
};
