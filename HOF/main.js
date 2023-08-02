// Callbacks and higher order functions

//Pulse check

//1. Write a function that accepts two arguments, number and callback, and using the callback return the number squared.

const callbacks = function (number, callback) {
  return callback(number);
};

callbacks(7, function (number) {
  return number * number;
});

//2. Using forEach iterate over the following arrays and console log all the indexes.

const numbers = [1, 2, 3, 4];
const animals = ["Cat", "Dog", "Bear", "Bat"];

numbers.forEach(function (element, index) {
  console.log(index);
});
animals.forEach(function (element, index) {
  console.log(index);
});

//3. Using map iterate over the following array and decrement all elements by 1.

const numbers0 = [1, 2, 3, 4];

numbers0.map(function (element, index) {
  return element + 1;
});

//4. Using filter iterate over the following array and return all string values

const array = [1, "two", "three", 4];

array.filter(function (element, index) {
  return typeof element === "string";
});

//5. Using reduce iterate over the following array and return the sum of all the numbers doubled.

const numbers1 = [1, 2, 3, 4];

numbers1.reduce(function (accumulator, number, index) {
  return accumulator + number;
});

//Practice

//1. Write a function countWords that accepts a string and returns an object that has all of the unique words from the string as keys, and the number of times a word was found in the string is shown as the value of that key.

const countWords = function (string) {
  // TODO: Your code here
  s = {};
  if (string !== "") {
    string = string.split(" ");
    string.map(function (element) {
      s[element] = 0;
    });
    string.map(function (element) {
      s[element] += 1;
    });
  }
  return s;
};

//2. Write a function averageGrade that accepts an array of student grades as values and returns the average grade. If an empty array was passed in return "Please enter at least one grade".

const averageGrade = function (grades) {
  // TODO: Your code here
  if (grades.join("") === "") return "Please enter at least one grade";
  return (
    grades.reduce(function (accumulator, number, index) {
      return accumulator + number;
    }) / grades.length
  );
};

//3. Write a function evenLengthOddIndex that accepts an array of strings and returns a new array of only the even length words that are in an odd index.

const evenLengthOddIndex = function (strings) {
  // TODO: Your code here
  return strings.filter(function (element, index) {
    return element.length % 2 === 0 && index % 2 !== 0;
  });
};

//4. Write a function incrementByIndex that accepts an array of nested arrays that hold numbers as values, and returns an array were each element of the nested arrays is incremented by the index of that nested array.

const incrementByIndex = function (array) {
  // TODO: Your code here
  return array.map(function (element, index) {
    return element.map(function (nestedElement, nestedIndex) {
      return nestedElement + index;
    });
  });
};

//5. Write a function orderByType that accepts an array of mixed type values and returns a new array with the same values but ordered by type, meaning all the strings first, then all the numbers, and all the booleans last.

const orderByType = function (array) {
  // TODO: Your code here
  return array
    .filter((element, index) => typeof element === "string")
    .concat(array.filter((element, index) => typeof element === "number"))
    .concat(array.filter((element, index) => typeof element === "boolean"));
};

//6. Write a function convertToString that accepts an array of letters and returns all the letters combined.

const convertToString = function (array) {
  // TODO: Your code here
  return array.reduce((accumulator, element, index) => accumulator + element);
};

//7. Write a function gradeExam that accepts an array of objects and return an array of only the passed subjects with modified value, instead of the grade saying passed, the passing grade is 50 or above.

const gradeExam = function (array) {
  // TODO: Your code here
  array = array.filter((element, index) => element.grade >= 50);
  return array.map(function (element, index) {
    element["grade"] = "passed";
    return element;
  });
};

//8. Write a function allNumbers that accepts an array and returns true if all the values are numbers and returns false if it is not.

const allNumbers = function (array) {
  // TODO: Your code here
  array = array.map((element, index) => typeof element === "number");
  return array.reduce((accumulator, element, index) => accumulator && element);
};

//9. Write a function convertToObject that accepts an array of key-value pairs arrays, and return an array of objects with the corresponding keys and values.

const convertToObject = function (array) {
  // TODO: Your code here
  return array.map(function (element, index) {
    return { [element[0]]: element[1] };
  });
};

//10. Write a function fibonacci that accepts a number argument, and returns an array that it's indices are Fibonacci numbers (from zero till the number) and it's values are the values of the sequence at that index, you may use the helper function range to help you solve the question.

const range = function (number) {
  const array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
  }
  return array;
};
//[0,1,2,3]

const fibonacci = function (fibNumber) {
  // TODO: Your code here
  /* const array = [0, 1];
  for (let i = 2; i <= fibNumber; i++) {
    array.push(
      array.slice(i - 2, i).reduce(function (accumulator, element, index) {
        return accumulator + element;
      })
    );
  }
  return array; */

  return range(fibNumber).reduce((acc, item) => {
    if (item < 2) {
      acc.push(item);
    } else {
      acc.push(acc[item - 1] + acc[item - 2]);
    }
    return acc;
  }, []);
};

//Extra Practice
//1. Write a function loop that accepts two arguments an array and a callback function. The function loop should enable us to access all the values in the array and gives us the ability to modify the elements by using the callback function (Just like forEach).

const loop = function (array, callback) {
   // TODO: Your code here
   for (let i = 0; i < array.length; i++) {
     callback(array[i]);
   }
 };
 
 //2. By using the function loop, write a function filter that accepts two arguments, array and callback, and iterates over the array returning a new array of all the elements that passed the filter condition that was returned by the callback function (Just like filter)
 
 const filter = function (array, callback) {
   // TODO: Your code here
   const arr = [];
   loop(array, (item) => {
     if (callback(item)) {
       arr.push(item);
     }
   });
   return arr;
 };
 
 //3. By using the function loop, write a function map that accepts two arguments, array and callback, and iterates over the array returning a new array after modifying every element from the original array by using the callback function (Just like map).
 
 // DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
 const map = function (array, callback) {
   // TODO: Your code here
   const arr = [];
   loop(array, (item) => {
     arr.push(callback(item));
   });
   return arr;
 };
 
 //4. By using the function loop, write a function reduce that accepts two arguments, array and callback, and iterates over the array returning an accumulated value depending on what is returned in the callback function (Just like reduce).
 
 const reduce = function (array, callback) {
   // TODO: Your code here
   let acc = 0;
   loop(array, (number) => {
     acc=callback(acc,number);
   });
   return acc;
 };

//5. Modify the loop, filter, map, and reduce functions you just made to work with objects. If the input is an object then iterate over it and return an object instead of an array.


//1. Write a function loop that accepts two arguments an array and a callback function. The function loop should enable us to access all the values in the array and gives us the ability to modify the elements by using the callback function (Just like forEach).

const loopObj = function (object, callback) {
  // TODO: Your code here
  for ( keys in object) {
    callback(object[keys],keys);
  }
};

//2. By using the function loop, write a function filter that accepts two arguments, array and callback, and iterates over the array returning a new array of all the elements that passed the filter condition that was returned by the callback function (Just like filter)

const filterObj = function (object, callback) {
  // TODO: Your code here
  const obj = {};
  loop(object, (item,key) => {
    if (callback(item)) {
      obj[key]=item;
    }
  });
  return obj;
};

//3. By using the function loop, write a function map that accepts two arguments, array and callback, and iterates over the array returning a new array after modifying every element from the original array by using the callback function (Just like map).

// DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
const mapObj = function (array, callback) {
  // TODO: Your code here
  const obj = [];
  loop(object, (item,key) => {
    obj[key]=callback(item);
  });
  return arr;
};

//4. By using the function loop, write a function reduce that accepts two arguments, array and callback, and iterates over the array returning an accumulated value depending on what is returned in the callback function (Just like reduce).

const reduceObj = function (object, callback) {
  // TODO: Your code here
  let acc = 0;
  loop(object, (number,key) => {
    acc=callback(acc,number);
  });
  return acc;
};



