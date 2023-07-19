//*******************************arrays************************* */
//1. Write a function addToArray that accepts two arguments, array and string, and returns the same array after adding the string element to the end of it.
const addToArray = function (array, string) {
    // TODO: Your code here
    array.push(string);
    return array;
  };

//2. Write a function convertToString that accepts an array of strings and returns a string made out of the array values.
const convertToString = function (array) {
    // TODO: Your code here
    return array.join(" ");
  };
  
//3. Write a function accessElement that accepts two arguments, array and index, and returns the corresponding array element depending on the passed index.
const accessElement = function (array, index) {
    // TODO: Your code here
    return array[index];
  };
//4. Write a function isInArray that accepts two arguments, array and string, and returns true or false depending on whether the string is an element in the array or not.
const isInArray = function (array, string) {
    // TODO: Your code here
    return array.indexOf(string)!==-1;
  };
//5. Write a function reverseWords that accepts a string argument and returns the same string if only one word was passed in. If more than one word is passed, it will return a string of the words in the reverse order. Check out the comments below before solving the question.
const reverseWords = function (string) {
    // TODO: Your code here
    return string.split(" ").reverse().join(" ");
  };
  //6. Write a function addToLast that accepts two arguments, array and value, and returns an array with the value added to the end of the array. Use unshift instead of push.
  const addToLast = function (array, value) {
    // TODO: Your code here
    array.unshift(value);
    array[array.length]=array[0];
    array.shift();
    return array;
  };
//7.Solve the following.
// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
const getLength = function (array) {
    // do not use array.length
    // TODO: Your code here
    a=array.push(0);
    array.pop();
    return a-1;
  };
// write a function `getFirstVal` that accepts an array and returns the
// first value of the array without using the index to access the value
const getFirstVal = function (array) {
    // do not use array[0]
    // TODO: Your code here
    a=array.shift();
    array.unshift(a);
    return a;
  };
//8. Write a function updateOrCreate that accepts three arguments, array, value, and index, and returns an updated array. Check the output for more information on the updated array.
const updateOrCreate = function (array, value, index) {
    // TODO: Your code here
    array[index]=value;
    return array;
  };
//9. Write a function sliceArray that accepts three arguments, an ordered numeric array (unique numbers), startVal, and endVal, and returns an array starting at the startVal and ending at the endVal.
const sliceArray = function (array, startVal, endVal) {
    // TODO: Your code here
    return array.slice(array.indexOf(startVal),array.indexOf(endVal));
  };
//10. Write a function randomFruit that accepts an array of fruits and returns a random element from that array.
const randomFruit = function (array) {
    // TODO: Your code here
    return array[Math.floor(Math.random()*array.length)];
  };
//// Extra Practice
//1. Write a function isPalindrome that accepts a string argument and returns whether the string is a palindrome or not.
const isPalindrome = function (string) {
    // TODO: Your code here
    a=string.split(" ").join("").split("").reverse().join("");
    b=string.split(" ").join("").split("").join("");
    return a===b;
  };
//2. Write a function arrayMiddle that accepts an array and returns the middle element of the array. If the array's length is even then return the average of both of the middle elements.
const arrayMiddle = function (array) {
    // TODO: Your code here
    l=array.length;
    return l%2===0?(array[l/2-1]+array[l/2])/2 : array[Math.floor(l/2)];
  };
//3. Write a function removeElement that accepts two arguments, array and index, and returns an array after removing the element that corresponds to that index.
const removeElement = function (array, index) {
    // TODO: Your code here
    a=array.slice(0,index);
    b=array.slice(index+1,array.length);
    return  a.concat(b);
  };
//4. Write a function combineArrays that accepts two arrays, arrayOne and arrayTwo, and returns a new array holding all the elements of both arrays.
const combineArrays = function (arrayOne, arrayTwo) {
    // TODO: Your code here
    return  arrayOne.concat(arrayTwo);
  };
//5. Write a function hasNestedArray that accepts an array that contains nested arrays of at least two elements and returns whether the array contains nested arrays or not.
  const hasNestedArray = function (array) {
    // TODO: Your code here
    return array.find(element => (Array.isArray(element)))?true:false;
   
  };