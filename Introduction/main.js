/* START CODE UNDER THIS LINE */
//pulse check
//**************** Introduction ***************************
//Q1: Predict the value of the following expressions then try them out in the console
/*javascript
   9 + 1 * 5; // 14
   9 % 2; // 1
   (9 / 3) * (10 - 7); // 9
   21 / 3 + 3 * 9 * 9 + 5; // 255
   36 / 9 + 48 - 10 / 2; // 47
   */
//Q2: Figure out the syntax errors in the following variable declarations, and fix them.
/*
   ```javascript
   const @name = 'John'; //name (starting with digits or symbols other than $ and _)
   const 'age' = 10; //age 
   const const = "Constant"; // includes reserved keywords
   const variable 1 = "value"; // variable1 
   ```*/
//Q4: Before trying the following expressions try to predict the outcome.
/*
   ```javascript
   10 + "10"; // 1010
   "10" + "10"; // 1010
   10 + 10 + "5"; // 205
   "Hello" + 1; // Hello1
   "10" + 5 + 5; // 1055
   "20" - 10; // 10
   "9" - "5"; // 4
   "19" - "13" + 17; // 23
   5 + 6 + "4" + 9 - 4 - 2; // 1143
   ```*/
//5. Using string concatenation write an expression that represents your first name, last name, gender, and nationality.
const firstName="Ragad";
const lastName="Alshaboul";
const gender ="Female";
const nationality="Jordanian";
console.log("First name: "+firstName+",\nLast name: "+lastName
+",\nGender: "+gender+",\nNationality: "+nationality+".");

//Q6: Write an expression that represents the number of seconds in 30 days.
const secPerMonth = (30 //days
                * 24 //hour
                * 60 //minuite
                * 60 //second
);
console.log("Seconds Per Month: "+secPerMonth);

//Q8: Using the variables below write an expression that calculates the total amount for buying two coffee cups.

// tip and tax amounts are a percentage of the total billed amount
const tip = 0.1;
const taxRate = 0.08;
const coffeeCupPrice = 6;
const totalAmount=(tip+taxRate)*coffeeCupPrice+coffeeCupPrice;

/*9. Write an expression that represents the average grade of
 an exam, knowing that in a class of ten students,
  five of them got 24/30, two of them got 16/30 and
   the remainder got 29/30.*/

   const Avg=(5*24+2*16+3*29)/10;

   // **************************** Functions ************************************
   //1. Figure out the syntax errors in the following functions, and fix them.
   /* ```javascript
   const myFunction = function parameter) {}
   const my Second Function = function (parameter) {}
   const function = function (parameter) {}
   const functionName = function (paramOne paramTwo) {}
   ```*/
   const myFunction = function (parameter) {}
   const mySecondFunction = function (parameter) {}
   const function1 = function (parameter) {}
   const functionName = function (paramOne, paramTwo) {}

   //2. Write a function `sayHello` that returns `Hello` when executed.

   
   const sayHello = function () {
      //TODO Your code here
      return "Hello";
   };
  

   //3. Write a function `myAge` that accepts one argument `age` and returns the age when executed.

   const myAge = function (age) {
      //TODO Your code here
        return age;
   };
   //4. Write a function `incrementOne` that accepts one argument `number` and returns the number incremented by one when executed.

 
   const incrementOne = function (number) {
      //TODO Your code here
      return number++;
   };
   //5. Write a function `greet` that accepts one argument `name` and returns a string saying as shown below.

   const greet = function (name) {
      //TODO Your code here
      return "Hello "+name;
   };

   //1. Write a function `double` that accepts one argument `number` and returns the number doubled.

   const double = function (number) {
      //TODO Your code here
      return number*number;
   };
   //2. Write a function `fullName` that accepts string arguments, firstName and lastName then returns a string containing your full name combined.

   const fullName = function (firstName, lastName) {
      //TODO Your code here
    return firstName+ " "+lastName;
   };
   //3. Write a function `average` that accepts two number arguments and returns the average of these numbers.

   const average = function (a, b) {
      //TODO Your code here
      return (a+b)/2;
   };

//5. Write a function `totalBill` that accepts three arguments `total`, `taxPercentage`, `tip` and returns the total after adding the tax and the tip.


const totalBill = function (total, taxPercentage, tip) {
   //TODO Your code here
   return (tip+taxPercentage) *total+total;
};
//6. Write a function `ageInHours` that accepts a number argument `ageInYears` and returns the age in hours (ignore leap years).


const ageInHours = function (ageInYears) {
   //TODO Your code here
   return ageInYears*365*24;
};
//8. Write a function `floor` that accepts one number argument, `number` and returns the number as an integer.


const floor = function (number) {
   //TODO Your code here
   return Math.floor(number);
};
//9. Write a function `toThePowerOf` that accepts two number arguments, `base` and `exponent`, and returns the base to the exponent power.

const toThePowerOf = function (base, exponent) {
   //TODO Your code here
   return Math.pow(base,exponent);
};
//10. Write a function `upperCase` that accepts a string argument `string` and returns the same string in upper case.

const upperCase = function (string) {
   //TODO Your code here
   return string.toUpperCase();
};
//1. Write a function `randomNumber` that returns a random value between zero and one (includes 0 but not 1).

const randomNumber = function () {
   //TODO Your code here
   return Math.random();
};
//2. Write a function `oneOrZero` that uses `randomNumber` to return either the number zero or one.


const oneOrZero = function () {
   //TODO Your code here
   return Math.round(randomNumber());
};
//3. Write a function `randomRange` that accepts a positive number and returns a random number between zero and the passed in argument.


const randomRange = function (number) {
   //TODO Your code here
   return number*randomNumber();
};
//4. write a function `fromTo` that accepts two positive number arguments, `start` and `end`, returning a random number in between the `start` and the `end` value.


const fromTo = function (start, end) {
   //TODO Your code here
   return Math.random() * (max - min) + min;
};
//5. write a function `randomCharacter` that accepts a string argument `string` and returns a random character from that string.


const randomCharacter = function (string) {
   //TODO Your code here
   return string[Math.floor((string.length-1)*Math.random())];
};

//********************************* Conditions ************************************
//1. Figure out the syntax errors in the following, and fix them.

   
  
   // 1
   if (10 <= 10){
   }
   
   // 2
   if (5 > 3) {
   }
   
   // 3
   if (5 > 10){
   }
   else{
   }
   
   // 4
   if (2 < 3 && 7 > 10){
   }
   
   // 5
   if ("hello" === "hello"){
   }
   //2. Predict the value of the following expressions and explain why.

   
   true && true && false; //false

   true || (true && false); //true

   5 === 2 || 1 < 10; //true

   (!false && true) || (!true && true); // true
   //3. Write a function `legalAge` that accepts one argument `age` and returns `true` if the age is over or equal eighteen and `false` if it is below that.

   
   const legalAge = function (age) {
     // TODO: Your code here
     return age>=18;
   };
   //4. Write a function `isItMyName` that accepts one argument `name` and returns `true` if the `name` is the same as your name and return `false` if it is not.

   const isItMyName = function (name) {
     // TODO: Your code here
     return name ==="Ragad";
   };
   //5. Write a function `positiveOrNegative` that accepts one argument `number` and returns a string saying whether the number is positive, negative, or if it is a neutral number like zero.

   const positiveOrNegative = function (number) {
     // TODO: Your code here
     if(number>0)return "positive";
     if(number<0)return "negative";
     return "neutral";
   };
   //1. Write a function `toLowerOrUpperCase` that accepts two arguments, `string` and `strCase`, and returns the string in lower case or upper case depending on what was specified in the second parameter. Check out the following builtin methods then solve the question.
   const toLowerOrUpperCase = function (string, strCase) {
    // TODO: Your code here
    if(strCase ==="upper")return string.toUpperCase();
    return string.toLowerCase(); //else return lower case
  };
  //2. Write a function `howLong` that accepts one argument `word` and returns whether the word is `short`, `medium`, `long`, or `very long`. Check out the following examples about the length property then answer the question.
  // - words less than 5 are considered short words
   // - words in between 5 and 8 are considered medium words
   // - words in between 9 and 13 are considered long words
   // - words more than 13 are considered very long words
   const howLong = function (word) {
    // TODO: Your code here
    let n=word.length;
    if(n<5)return "short";
    if(n<8)return "medium";
    if(n<13)return "long";
    return "very long words";
  };
   //3. write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
   // starts with that character. It doesn't matter if it's lowercase or uppercase
   const startsWith = function (string, character) {
    // TODO: Your code here
    return string[0].toLowerCase() === character.toLowerCase();
  };
  //4. Write a function `endsWith` that accept two string arguments, `string` and `character`, and returns true if the string ends with that character.
  const endsWith = function (string, character) {
    // TODO: Your code here
    return string[string.length-1].toLowerCase() === character.toLowerCase();
  };
  /*5. Write a function `deposit` that accepts an argument `amount` and returns the deposited amount.
   The function should only accept positive number
   arguments otherwise return `"Please enter a positive number"` if it is not positive and return 
  `"Please enter a number"` if the type of the argument is not a number.*/
  const deposit = function (amount) {
    // TODO: Your code here
   return typeof(amount) !=="number"? "Please enter a number": (amount>0? "accepted":"Please enter a positive number");

  };
  //6. Write a function `oddOrEven` that accepts a number argument `number` and returns a string stating if the `number` is odd or even.

  
   const oddOrEven = function (number) {
     // TODO: Your code here
     return number%2==0?"even":"odd";
   };
   //7. Write a function `stringCase` that accepts a string argument `string` and returns whether the string is `all upper case` or `all lower case` or `mix case`.

   
   const stringCase = function (string) {
     // TODO: Your code here
    return string === string.toUpperCase()? "all upper case":(string===string.toLowerCase()?"all lower case":"mix case");
   };
   /*8. Write a function `isLeapYear` that accepts a number argument `year` and returns true if the year is a leap year.
    Leap years are divisible by 4 but non leap years are divisible by 100 for the exception of 400 (leap years are also divisible by 400).*/

   
   const isLeapYear = function (year) {
     // TODO: Your code here
     return (year%4===0 || year%400===0);
   };
   /*9. Write a function `login` that accepts two string arguments, `username` and `password`, and returns a string `login successful`
    if the username length is more than 6 and password length is more than or equal to 8 otherwise return `login failed`.*/

    /*10. Modify `login` to check whether the username and password match the corresponding
     values from the account list below. Make sure not to remove the length validation from the previous question and 
     to check the examples below for more information.*/

    
    // accounts:
    // 1- username: "john_doe", password:"koljgwEA"
    // 2- username: "jane_doe", password: "12345678"

   const login = function (username, password) {
     // TODO: Your code here
     let username0=["john_doe","jane_doe"];
     let password0=["koljgwEA","12345678"]
     if(username.length<6 ) return "username must be more than 6 characters long";
     if(password.length<8 ) return "password must be at least 8 characters long";
     for(let i=0;i<username0.length-1;i++){
        if(username0[i]=== username)
            if(password0[i]=== password)
                return "login Successful";
            else return "wrong password";
        else return "username doesn't exist"

     }
     
   };
   //1. Write a function `letterInString` that accepts two string arguments, `string` and `letter`, and returns `true` if the letter is inside the string and returns `false` if it doesn't.

   
   const letterInString = function (string, letter) {
     // TODO: Your code here
    return string.toLowerCase().indexOf(letter.toLowerCase())!==-1;
   };
   //2. Write a function `guessTheSquareRoot` that accepts two number arguments, `number` and `squareRoot`, and returns a string `"correct"` if the guess is correct and returns `"incorrect"` if the guess is incorrect.

   
   const guessTheSquareRoot = function (number, squareRoot) {
     // TODO: Your code here
     return Math.sqrt(number)===squareRoot;
   };
   //3. Write a function `randomMove` that when invoked would return a string `"rock"` or `"paper"` or `"scissors"` randomly.

   
   const randomMove = function () {
     // TODO: Your code here
     let a =Math.floor(Math.random()*3);
     if(a<1)return "rock";
     if(a<2)return "paper";
     return "scissors";
   };
   /*4. Write a function `rockPaperScissors` that accepts a string argument with 
   only the following values, `"rock"`, `"paper"`, `"scissors"` and returns `"invalid move"`
    if anything else is passed in. Otherwise return `"valid move"`.*/
     // game rules:
   // 1- rock beats scissors
   // 2- paper beats rock
   // 3- scissors beats paper

   // important:
   // use the `randomMove` function that you have created previously (it must be working correctly)
   // read the comments inside the function to know how to get the random value and save it in a variable to use it
   // if the user input would beat the random input then return `you win`
   // if the user input would lose against the random input then return `you lose`
   // if the user input is the same as the random input then return `it is a draw`
   // keep the move validation from the previous question

   
   const rockPaperScissors = function (move) {
     // use randomMove to get the value of the random move
     const randomMoveForComputer = randomMove();
     // randomMoveForComputer; => rock (use it by referencing it's name, the random value should stay the same)
     // TODO: Your code here
     console.log(randomMoveForComputer);
      if(!(move ==="rock" || move ==="paper" || move ==="scissors"))return"invalid move";
      if(move === randomMoveForComputer)return "it is a draw";
      if(randomMoveForComputer ==="rock" && move==="scissors") return "you lose";
      if(randomMoveForComputer ==="rock" && move==="paper") return "you win";
      if(randomMoveForComputer ==="paper" && move==="scissors") return "you win";
      if(randomMoveForComputer ==="paper" && move==="rock") return "you lose";
      if(randomMoveForComputer ==="scissors" && move==="rock") return "you win";
      if(randomMoveForComputer ==="scissors" && move==="paper") return "you win";
   };
