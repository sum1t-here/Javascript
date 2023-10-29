let myName = 'Sumit     ';

console.log(myName.length); // 10
console.log(myName.trim().length); // 5

// create a method truelength, that prints the original length
String.prototype.trueLength = function () {
  console.log(`${this}`); // current context
  console.log(`${this.trim().length}`);
};

myName.trueLength();
// Sumit
// 5

let myHeroes = ['thor', 'hammer'];

let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',

  grtSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// sumit method injected in prototype of object

// accessed the higher heirarchy(i.e object)
Object.prototype.sumit = function () {
  console.log('Present in all objects');
};

heroPower.sumit(); // Present in all objects

myHeroes.sumit(); // Present in all objects

Array.prototype.heySumit = function () {
  console.log('Sumit says hello');
};

myHeroes.heySumit(); // Sumit says hello

// heroPower.heySumit();
//  objeect cannot have the method defined for array prototype

// Inheritance

const teacher = {
  makevideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: 'js',
  isAvailable: true,
  __proto__: teachingSupport, // accessing properties of teachingSupport
};

// also this syntax can be used

// teacher.__proto__ = TAsupport;

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher); // accesing properties of teacher
