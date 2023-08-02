// **************** iterations 2 *******************

// Pulse Check

//1. Create a for in loop that works on the following object and console log the keys.

const object = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
  };
for(keys in object){
    console.log(keys)
  }

//2. Create a for in loop that works on the following object and console log the values.

for(keys in object){
    console.log(object[keys]);
  }

// Practice 

//1. Write a function keyValuePairs that accepts an object and returns an array of arrays that contains both the key and value.

const keyValuePairs = function (object) {
    // TODO: Your code here
    const arr=[];
    for(keys in object){
        arr.push([keys,object[keys]]);
    }
    return arr;
  };

//2. Write a function absoluteNumbers that accepts an object of grades and changes all negative numbers to become positive then returns the object after checking all the values.

const absoluteNumbers = function (grades) {
    // TODO: Your code here
    for(keys in grades){
        grades[keys]=Math.abs(grades[keys]);
    }
    return grades;
  };

//3. Write a function PassedOrFailed that accepts an object of student grades and returns a string The student have passed if all of the grades are equal or above 50% of the materials total grades otherwise return The student have failed.

const passedOrFailed = function (studentGrades) {
    // TODO: Your code here
    for(keys in studentGrades){
        const student=studentGrades[keys];
        if((student["grade"])<(student["total"]/2))return "The student have failed";
    }
    return "The student have passed";

  };

//4.Write a function convertToArray that accepts an object with numerical keys and returns an array containing the values with the corresponding index.
const convertToArray = function (object) {
    // TODO: Your code here
    const myArray=[];
    for(keys in object){
        myArray[keys]=object[keys];

    }
    return myArray;
  };

//5. Write a function safeToConsume that accepts an object of some of the chemicals compounds of the object, and returns a string Safe to consume if none of the chemical compounds is poisonous and if it does then return Poisonous do not consume, check the object bellow for more information on the poisonous compounds.

const poisonousCompounds = {
    daphnetoxin: true,
    mercury: true,
    cyanide: true,
  };
  
  const safeToConsume = function (object) {
    // TODO: Your code here
    for(keys in object){
        for(poison in poisonousCompounds){
            if(keys===poison)return "Poisonous do no eat";
        }
    }
    return "Safe to consume";
  };

//6. Write a function toString that accepts an object and return all of it's values in a string, solve it using for in loop.

const toString = function (object) {
    // TODO: Your code here
    const str=[];
    for(keys in object){
        str.push(object[keys]);
    }
    return str.join(", ");
  };

//7. Write a function totalBill that accepts an object representing separate bills and returns the sum of all bills.

const billsForJanuary = {
    waterBill: 25,
    electricityBill: 50,
    hospitalBill: 1000,
  };
  
  const billsForFebruary = {
    waterBill: 30,
    electricityBill: 45,
    insurance: 300,
  };
  
  const totalBill = function (billsObject) {
    // TODO: Your code here
    let bill=0;
    for(keys in billsObject){
        bill+=billsObject[keys];
    }
    return bill;
  };

//8. Write a function login that accepts two string arguments, username and password, and returns a message saying "Login Successful" or "Login Failed" depending on whether the login information matches the data in the given object.

const users = {
    userOne: { username: "Jane", password: "123456" },
    userTwo: { username: "admin", password: "abc123" },
  };
  
  const login = function (username, password) {
    // TODO: Your code here
    for(keys in users){
        const user=users[keys];
        if(user.username===username && user.password===password)return "Login Successful";
    }
    return "Login Failed";
  };

//9. Write a function createDog that accepts three string arguments, name, dogBreed, and furColor, and adds a new dog to the uniqueDogs object then returns a string Added the dog successfully if there is no other dog with the same name otherwise return The dog isn't unique enough :(

const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
  };
  
  const createDog = function (name, dogBreed, furColor) {
    // TODO: Your code here
    for(keys in uniqueDogs){
        if(name===keys.toString())return "The dog isn't unique enough :(";
    }
    uniqueDogs[name]={Breed:dogBreed,color:furColor};
    return uniqueDogs;
  };

//10. Write a function validateMessage that accepts an object representing a message and returns the object if it is valid and after removing any extra keys. The message will consist of three keys, username, message, and date, with all of their values as strings. Return the object only if all three keys are strings. If the number of keys is more than three then delete the extra keys, and if the message doesn't have the right data type then return invalid message.
const messageOne = {
    username: "John",
    message: "Hello",
    date: "01/01/2020",
    someKey: "someValue",
  };
  
  const messageTwo = {
    username: 10,
    message: "Hello",
    date: "01/01/2020",
  };
  
  const validateMessage = function (message) {
    // TODO: Your code here
    let i=0;
    const myObject={};
    for(keys in message){
        i++;
        if(i>3)break;
        if(typeof message[keys]!=="string") return "invalid message";
        myObject[keys]=message[keys];
    }
    message=myObject;
    return message;
  };

//Extra Practice

//1. Write a function compare that accepts an array and an object, and returns true if all the array values are present as object values.

const compare = function (array, object) {
    // TODO: Your code here
    let myArray=[];
    for(let i=0;i<array.length;i++){
    for(keys in object){
        if(array[i]===object[keys]){
            myArray.push(true);
            continue;
        }
    }
  }
    return myArray.length === array.length;
    
  };

//2. Write a function sumValues that accepts an object of nested objects, and returns the sum of all the numerical values in all the levels.

const nestedObject = {
    value1: 10,
    value2: 20,
    nextObj: {
      value3: 11,
      value4: "hello",
      nextObj: {
        value5: "12",
        value6: 8,
        nextObj: {
          value7: 19,
          nextObj: {},
        },
      },
    },
  };
  
  const sumValues = function (object) {
    // TODO: Your code here
    let sum=0;
    while(object){
    for(keys in object){
        if(typeof object[keys]==="number")
        sum+=object[keys];
    }
    object=object.nextObj;
    }
    return sum;
  };

//3. Write a function deleteKeys that accepts two objects and delete all the keys from the first object that are not present in the second objects then return the first object.

  const deleteKeys = function (firstObj, secondObj) {
    // TODO: Your code here
    const myObject={};
    for(keys0 in firstObj){
        for(keys1 in secondObj){
            if(keys0===keys1){
                myObject[keys0]=firstObj[keys0];
            }
        }
    }
    return myObject;
  };

//4. Write a function sameKeys that accepts two objects and checks if all the keys from both objects are present both objects then return the true if all keys are present or return false if not all keys are present in both objects

const sameKeys = function (firstObj, secondObj) {
    // TODO: Your code here
    const firstKeys=[];
    const secondKeys=[];
    for(keys in firstObj){
        firstKeys.push(keys);
    }
    for(keys in secondObj){
        secondKeys.push(keys);
    }
    return firstKeys.sort().join()===secondKeys.sort().join();
  };
  