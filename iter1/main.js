// ****************** iteration 1 *******************
// pulse check 
//1. Fix the following loops so they work as intended.

for (let i = 0; i < 10; i++) {
   console.log(i);
 }
 
 for (let i = 0; i < 10; i++) {
   console.log(i);
 }
 
 //2. Create a while loop with the starting value of 0 and end value of 5. Console log all numbers in between including the start and end.

 let value=0;
 while(value<=5){
   console.log(value);
   value++;
 }

 //3. Create a for loop with the starting value of 10 and end value of 20. Console log all numbers in between including the start and end.

 for(let x=10;x<=20;x++){
   console.log(x);
 }

 //4. Create a for loop that works on the following array and console log both the index and values.

 const galaxies = ["Andromeda", "Milky Way", "Magellanic Clouds"];
 const iter=function(arr){
   for(let i=0;i<arr.length;i++){
      console.log(`${i} ${arr[i]}`);
   }
 }
iter(galaxies);

 //5. Create a for loop that works on the following string and console log all the letters that are not an a.
 const randomString = "bwaxaawqaacasghwera";
 const iter0=function(str){
   for(let i=0;i<str.length;i++){
      if(str[i]!=="a")
         console.log(str[i]);
   }
 }
 iter0(randomString);

 // practice

 //1. Write a function sum that accepts an array of numbers and returns the sum of the numbers.
 const sum = function (numbers) {
   // TODO: Your code here
   let localSum=0;
   for(let i=0;i<numbers.length;i++){
      localSum+=numbers[i];

   }
   return localSum;
 };
 
//2. Write a function login that accepts two string arguments, username and password, and returns a message saying "Login Successful" or "Login Failed" depending on whether the login information matches the data in the given array.

const users = [
   { username: "Jane", password: "123456" },
   { username: "admin", password: "abc123" },
 ];
 const login = function (username, password) {
   // TODO: Your code here
   for(let i=0;i<users.length;i++){
      if(users[i].username===username && users[i].password===password){
         return "Login Successful";
      }
      return "login Failed";
   }
 };

 //3. Write a function onlyStrings that accepts an array of strings, numbers, and booleans, and returns a new array with only the strings.

 const onlyStrings = function (array) {
   // TODO: Your code here
   const myArray=[];
   let x=0;
   for(let i=0;i<array.length;i++){
      if( typeof array[i]==="string"){
         myArray[x]=array[i];
         x++;
      }
   }
   return myArray;
 };
 
 //4. Write a function range that accepts two number arguments and returns a string of all the numbers in between the two values in an acceding order, start and end are included and if only one value is provided then consider that the other value is zero.
 const range = function (start, end) {
   // TODO: Your code here
   if(end===undefined){
      if(start>0){
         end=start;
         start=0;
         
      }
      else{
         end=0;
      }
   }
   for(let i=start;i<=end;i++){
      console.log(i);
   }
 };

 //5. Write a function onlyOddNumbers that accepts an array of numbers and returns a new array with only the odd numbers.

 const onlyOddNumbers = function (numbers) {
   // TODO: Your code here
   const myArray=[];
   let x=0;
   for(let i=0;i<numbers.length;i++){
      if(numbers[i]%2!==0){
         myArray[x]=numbers[i];
         x++;
      }
   }
   return myArray;

 };

 //6. Write a function maximumNumber that accepts an array of numbers and returns the highest number in the array.

 const maximumNumber = function (numbers) {
   // TODO: Your code here
   let maxNumber=numbers[0];
   for(let i=1;i<numbers.length;i++){
      if(maxNumber<numbers[i]){
         maxNumber=numbers[i];
      }
   }
   return maxNumber;
 };

 //7. Write a function reversString that accepts a string and returns the string reversed, don't use .reverse().

 const reversString = function (string) {
   // TODO: Your code here
   const myArray=[];
   for(let i=0;i<string.length;i++){
   myArray[i]=string[string.length-1-i];
   
   }
   return myArray.join("");
 };

//8. Write a function onlyEven that accepts an array of numbers and returns the same array with only the even numbers, make sure not to create a new array.

const onlyEven = function (numbers) {
   // TODO: Your code here
 
const myArray=[];
   let x=0;
   for(let i=0;i<numbers.length;i++){
      if(numbers[i]%2===0){
         myArray[x]=numbers[i];
         x++;
      }
   }
   return myArray;
};

//9. Write a function createUser that accepts two string arguments, username and password, and adds the new user to the allUsers array returning a message "Registration successful". Make sure to check if the username of the new user matches any of the usernames from existing users, if it does, return a message saying "That username is not available" instead.

const allUsers = [
   { username: "Jane", password: "123456" },
   { username: "admin", password: "abc123" },
 ];
 
 const createUser = function (username, password) {
   // TODO: Your code here
   for(let i=0;i<allUsers.length;i++){
      if(allUsers[i].username===username){
         return "That username is not available";
      }
   }
   allUsers[allUsers.length]={username:username,password:password};
   return "Registration successful";
 };

 //10. Write a function convertToObject that accepts an array and returns an object containing the values with the corresponding index as keys.

 const convertToObject = function (array) {
   // TODO: Your code here
   const object={};
   for(let i=0;i<array.length;i++){
      object[i]={[i]:array[i]};
   }
   return object;
 };

 //Extra practice

 //1. Write a function sumArguments that returns the sum of all arguments passed to the function. Make sure not to use parameters.

 const sumArguments = function () {
   // TODO: Your code here
   let localSum=0;
   for(let i=0;i<arguments.length;i++){
      localSum+=arguments[i];
   }
   return localSum;
 };

 //2. Write a function sort that accepts an unordered array of numbers and returns the same array in a descending order. Do NOT use the built-in method sort.

 const sort = function (numbers) {
   // TODO: Your code here
   for(let i=0;i<numbers.length;i++){
      
      for(j=i;j<numbers.length;j++){
         if(numbers[i]>numbers[j]){
            let tmp=numbers[i];
            numbers[i]=numbers[j];
            numbers[j]=tmp;
         }
      }
   }
   return numbers;
 };

 //3. Write a function compareArrays that accepts two array, and returns true if all the array values are present in both arrays.

 const compareArrays = function (arrayOne, arrayTwo) {
   // TODO: Your code here
   return arrayOne.sort().join("")===arrayTwo.sort().join("");
 };

 //4. Write a function isPalindrome that accepts a string and returns true or false depending whether the string is a palindrome or not, before solving read below the criteria for the right way to solve it.
 const isPalindrome = function (string) {
   // TODO: Your code here
   string=string.split(" ").join("");
   for(let i=0;i<string.length/2;i++){
      if(string[i]!==string[string.length-1-i])return false;
   }
   return true;
 };
