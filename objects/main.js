// ******************* objects *********************
//Pulse Check

//1. Define the following objects.
//Define an object person_1 containing three attributes: name, age, gender.
const person_1={name:"john",age:23,gender:"male"};
//Define an object store containing two attributes, name and address. Address is an object with two attributes, buildingNumber and street
const store={name:'store',address:{buildingNumber:2,street:1}};

//2. Access the following values.
//Access the value of the key Mars in the following objects:
// a- using a dot notation
const orderedSolarSystem = {
  Mercery: "first",
  Venus: "second",
  Earth: "third",
  Mars: "fourth",
};
orderedSolarSystem.Mars;
// b- using a bracket notation
const unorderedSolarSystem = {
  Mars: "fourth",
  Earth: "third",
  Mercery: "first",
  Venus: "second",
};
unorderedSolarSystem["Mars"];
//Access the value of the key koala in the following object:
const animalDiet = {
  mammals: {
    cat: "carnivore",
    dog: "carnivore",
    koala: "herbivore",
  },
  fish: {
    shark: "carnivore",
  },
};
animalDiet.mammals.koala;
//3. Assign the following values to the corresponding object.

//Add the math grade (80) to the student using a dot notation.
// Change the english grade to a 90 using a dot notation.
// Add an attribute average with the average of the score of all three grades using a dot notation.
const studentOne = {
  englishGrade: 80,
  scienceGrade: 90,
};
studentOne.mathGrade=80;
studentOne.englishGrade=90;
studentOne.average=(studentOne.englishGrade+studentOne.scienceGrade+studentOne.mathGrade)/3;
// Add the math grade (80) to the student using a bracket notation.
// Change the english grade to an 90 using a bracket notation.
// Add an attribute average with the average of the score of all three grades using a bracket notation.
const studentTwo = {
  englishGrade: 80,
  scienceGrade: 90,
};
studentTwo["mathGrade"]=80;
studentTwo["englishGrade"]=90;
studentTwo["average"]=(studentTwo["mathGrade"]+studentTwo["englishGrade"]+studentTwo["scienceGrade"])/3;
//Assign the following variables as a key-value pair to the object. Make sure to use the name of the variables.
const objectKey = "key";
const objectValue = "value";

const object = {};
object[objectKey]=objectValue;

//Practice

//1. Figure out the syntax errors in the following, and fix them.
// const person_2 = (name: john, age:20)

// const car = {brand "Toyota", model: 2020}

// const employee ={name: "Jane", position: developer}
const person_2 = {name: "john", age:20};

const car = {brand :"Toyota", model: 2020};

const employee ={name: "Jane", position: "developer"};

//2. Check the following objects and solve the requirements.
const person_3 = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};
// Access the age property.
person_3.age;
// Modify the person_3's age to be 23 years old.
person_3.age=23;
// Add a property called work with the value of an object with two keys, position and salary.
person_3.work={position:"",salary:""};

const employees = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Doe",
    },
    position: "Designer",
  },
  {
    id: 2,
    name: {
      first: "Jane",
      last: "Doe",
    },
    position: "Engineer",
  },
];
// Access the first name property of both employees.
employees[0].name;
employees[1].name;
// Add an employee object with your name and the position of full-stack developer.
employees[2]={
  id: 3,
  name: {
    first: "John",
    last: "Doe",
  },
  position: "full-stack developer",
}


const cars = {
  toyota: {
    name: "prius",
    model: 2019,
  },
  nissan: {
    name: "leaf",
    model: 2020,
  },
};
// Access the model value of both cars.
cars.toyota.model;
cars.nissan.model;
// Change the prius model from 2019 to 2020.
cars.toyota.model=2020;
// Add a new car of your choice.
cars.car={ name: "",
model: 2020,}
// Add a property isAutomatic for all three cars
cars.toyota.isAutomatic=true;
cars.nissan.isAutomatic=true;
cars.car.isAutomatic=true;

//3. Write a factory function createUser that accepts two string arguments, firstName and lastName, returning an object representing the user.
const createUser = function (firstName, lastName) {
  // TODO: Your code here
  return {firstName:firstName, lastName:lastName};

};

//4. Write a factory function createCar that accepts three string arguments, brand, name, and color, returning an object representing the car.
const createCar = function (brand, name, color) {
  // TODO: Your code here
  return {brand:brand,name:name,color:color};
};

//5. Write a function getFullName that accepts an object representing a person and returns that person's full name in a string.
const getFullName = function (person) {
  // TODO: Your code here
  return `${person.first} ${person.middle} ${person.last}`;
};

//6. Write a function olderThan that accepts two objects, personOne and personTwo, and returns a string that represent who is older than the other.
const olderThan = function (personOne, personTwo) {
  // TODO: Your code here
  return personOne.age > personTwo.age? `${personOne.name} is older than ${personTwo.name}`:`${personTwo.name} is older than ${personOne.name}`;
};

//7. Write a function isPropertyOf that accepts a string and an object and returns true if the string is a property of the object. Return false if it isn't.
const isPropertyOf = function (string, object) {
  // TODO: Your code here
  return object[string]?true:false;
};

//8. Write a function numberOfKeys that accepts an object and returns the number of keys present in the object.
const numberOfKeys = function (object) {
  // TODO: Your code here
  return Object.keys(object).length;
};

//9. Write a function valuesToString that accepts an object and returns a string of all the values from the object separated by an empty space.
const valuesToString = function (object) {
  // TODO: Your code here
  return Object.values(object).join(" ");
};

//10. Write a function keyInObject that accepts two arguments, object and key, and checks if the key is present within the object. Return true if the key is present and false if it is absent.
const keyInObject = function (object, key) {
  // TODO: Your code here
  return object.hasOwnProperty(key);
};

//Extra Practice

//1. Check the following object and solve the requirements.
const family = {
  name: "John",
  children: [
    {
      name: "Bill",
      children: [
        {
          name: "Mark",
          children: [],
        },
        {
          name: "Sarah",
          children: [
            {
              name: "Smith",
              children: [],
            },
            {
              name: "Stan",
              children: [],
            },
          ],
        },
        {
          name: "Samuel",
          children: [],
        },
      ],
    },
    {
      name: "Jane",
      children: [],
    },
  ],
};
// Access the value of Sarah's children and the value of Samuel's children.
family["children"][0]['children'][1]['children'];// sarah's children
family["children"][0]['children'][2]['children'];//Samuel's children.
// Add a child for Samuel named Sam that has two children Marry and Gwen.
family["children"][0]['children'][2]['children']=[
  {
    name: "Sam",
    children: [
      {
        name: "Marry",
        children: [],
      },
      {
        name: "Gwen",
        children: [],
      },
    ],
  },
];
// Delete the children property from the people who don't have children.
delete family.children[1].children;
delete family.children[0].children[0].children;
delete family["children"][0]['children'][1]['children'][0].children;
delete family["children"][0]['children'][1]['children'][1].children;

//2. Write a factory function createIceCream that accepts Three arguments, coneType, flavour, and topping, and returns an object representing the ice-cream.
const createIceCream = function (coneType, iceCreamFlavour, topping) {
  // TODO: Your code here

  return {coneType:coneType?coneType:"none",iceCreamFlavour:iceCreamFlavour?iceCreamFlavour:"none",topping:topping?topping:"none"};
};

//3. Try the following code and explain the results
const employeeOne = {
  id: 0,
  name: "John",
  position: "",
};

const employeeTwo = {
  id: 1,
  name: "Jane",
  position: "Developer",
};

if (employeeOne.id) { //id is falsy value 0
  console.log(employeeOne.name);
}

if (employeeTwo.id) {
  console.log(employeeOne.name);
}

if (employeeOne.position) { //position is falsy value ""
  console.log(employeeOne.name);
}

if (employeeTwo.position) {
  console.log(employeeOne.name);
}

if (employeeOne.salary) { //salary is falsy value undefined
  console.log(employeeOne.name);
}

//4. Write a function isValidUser that accepts an object representing login information and returns true if the user is valid otherwise return false. Read the comments for more information.
// things to validate:
// 1- length of the email is greater than or equal to 6
// 2- length of the password is greater than or equal to 8
// 3- email contains `@` and `.com`
// 4- the user must be in the users object
// 5- both of the passwords match
// 6- when you compare information make sure to reference the users object and access the value form there
const users = {
  mrpotato: {
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  },
  thewiseman: {
    email: "wiseMan9999@gmail.com",
    password: "12345678",
  },
};

const isValidUser = function (loginInfo) {
  // TODO: Your code here
  if(loginInfo.email.length>=6){
    if(loginInfo.password.length>=8){
    if(loginInfo.email.indexOf("@")!==-1){
    if(loginInfo.email.indexOf(".com")!==-1){
    for(const u in users){
      if(loginInfo.username.toLowerCase()===u.toLowerCase()){
        if(loginInfo.password===users[u].password){
          return true;
        }
      }
      
    }
    }
    }
    }
  }
  return false;
};

//5. Write a function compareKeys that accepts two objects and returns true if the key names and their order match. Return false if they don't
const compareKeys = function (objectOne, objectTwo) {
  // TODO: Your code here
  
  return Object.keys(objectOne).join(" ").toString()===Object.keys(objectTwo).join(" ").toString();
};
