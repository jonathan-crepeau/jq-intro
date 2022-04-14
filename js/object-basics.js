// console.log('Fear is the mind killer ...');

const person = {
  // name: ['Bob', 'Smith'],
  name: {
    first: 'Jonathan',
    middle: 'Troy',
    last: 'Crepeau',
  },
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}`);
  },
};

const myDataName = 'height';
const myDataValue = '1.75m';

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};



// SECTION

// const personProtoype = {
//   greet(){
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// };

// function Person(name) {
//   this.name = name;
// };

// Person.prototype = personProtoype;
// Person.prototype.constructor = Person;

// const person1 = new Person('Jonathan');
// const person2 = new Person('Jeremy');

// console.log(person1, person2);

const petPrototype = {
  greet(){
    console.log(`Hello, my name is ${this.name}!`);
  },
  noise(){
    console.log(`${this.noise}! I mean it -- ${this.noise}!`);
  },
}

function Pet(name, noise) {
  this.name = name;
  this.noise = noise;
}

Pet.prototype = petPrototype;
Pet.prototype.constructor = Pet;

const animal1 = new Pet('Luna', 'meow');
const animal2 = new Pet('Momo', 'bark');

// console.log(animal1);
// console.log(animal2);

class Dog {
  constructor(name, color){
    this.name = name;
    this.color = color
  }
};

const tess = new Dog('Tess', 'tricolor');

class Person {
  constructor(name){
    this.name = name;
  }
  introduceSelf(){
    console.log(`Hello, my name is ${this.name}!`);
  }
}



// SECTION - Polymorphism in action with the introduceSelf() method on the subclass replacing the default method on the super class:

class Student extends Person {
  constructor(name, year){
    super(name);
    this.year = year;
  }
  introduceSelf(){
    console.log(`Hello, my name is ${this.name} and I am in year ${this.year} of school!`);
  }
};

const person1 = new Person('Jonathan');
// console.log(person1);

const student1 = new Student('Luna', '8');
// console.log(student1)

