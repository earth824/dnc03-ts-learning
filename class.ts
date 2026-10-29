// PROTOTYPE (JavaScript): Array, String, Number, ...
// const arr = [1, 5, 3]; // arr is instance of array
// arr.map(() => {}); // map is a method, map called by instance: so map is instance method ex. filter, find, reduce, etc.
// arr.length; // length is a property: length is instance property
// const a = 'test';

// Array.isArray([]); // function called by Prototype itself: Static method

// Math => prototype
// Math.random(); // random is a method; random is a static method
// Math.PI; // PI is a static property

// const n = 20;
// n.map();
// n.length;

// function test() {} // test: Prototype => Function
// const d = new Date(); // Prototype: Date, d is instance of Date

// Prototype has a constructor function
// const d1 = new Date(1000); // Date() is a constructor
// const d1 = new Date('2026-01-01:12:0:0'); // ISO8601
// const d1 = new Date(2025, 1, 2 + 7);
// console.log(d1.getDay());
// console.log(d1);
// const a = new Array()

// Constructor, static, instance
// property, method(function)
//

// Object also a prototype
// const obj = new Object(); // { name: 'tw' }

// CLASS
// OOP (Object oriented programming)
// 1. Prototype(JavaScipt), 2. Class(Java, C#) JS introduce approximate: 2015 (limited feature), TS improve class feature
// Object has: 1. property, 2. method

// Class: constructor, property, method
// Class Date:
// const d = new Date(); // d has property, method
// const d1 = new Date(2000); // d has property, method

// CLASS DECLARATION
class Programmer {
  // PROPERTY
  name: string;
  dob: Date;
  skills: string[];
  programmingLanguages: string[];

  // CONSTRUCTOR
  constructor(n: string, d: Date) {
    console.log('Object creating');
    this.name = n;
    this.dob = d;
  }

  // METHOD
  write(instruction: string): void {
    console.log('Doing ..., ' + instruction);
  }

  copy(): void {}
}

const a = new Programmer('Por', new Date('2001-09-11')); // Programmer() called a constructor()
a.name; // Por
// a.write('Fixed bug');
const b = new Programmer('Mc', new Date('2015-05-05'));
b.name; // Mc
// b.copy();

class OwnArray {
  length: number;
}
