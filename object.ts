// const a: { id: number; email: string } = {
//   id: 1,
//   email: 'a@mail.com'
// };

// let b: { id: number; email: string };

// TYPE ALIAS
// type User = {
//   id: number;
//   email: string;
// };
// let c: User;
// // c = { name: 'Jame', id: 2, email: 'a@mail.com' }; //ERROR
// // c = { id: '2', email: 'a@mail.com' }; // ERROR

// INTERFACE
// interface User {
//   id: number;
//   email: string;
// }
// let d: User;
// d = { id: 9, email: 'd@mail.com' };

// NESTED
// type Person = {
//   id: number;
//   name: string;
// };

// type Book = {
//   id: number;
//   title: string;
//   author: Person;
// };

// OPTIONAL PROPERTIES & READONLY PROPERTIES
// interface User {
//   readonly id: number;
//   name: string;
//   gender?: 'MALE' | 'FEMALE';
// }
// let u: User = { id: 1, name: 'A' };
// u.id = 99;

// INDEX SIGNATURE
// type Scores = {
//   [k: string]: number;
// };
// RECORD TYPE
// type Scores = Record<string, number>;

// const scores: Scores = {
//   por: 10,
//   max: 9
// };

// scores.nuke = 5;
// scores.mhee = 7;
// scores.palm = 6;

// INTERSECTION TYPE (&)
// MERGE: { id: number; email: string }
// type A = { id: number };
// type B = { email: string };
// type C = A & B;
// const y: C = { id: 8, email: 'y@mail.com' };

// BE CAREFUL: Conflict
// type A = { id: number };
// type B = { id: string };
// type C = A & B; // { id: never }

// INTERFACE
// interface Book {
//   id: number;
//   title: string;
//   // publish: () => boolean;
//   publish(): boolean;
// }

// INTERFACE EXTENDS
// interface A {
//   id: number;
// }
// interface B {
//   email: string;
// }
// interface C extends A, B {}
// const y: C = { id: 3, email: 'A@mail.com' };

// interface A {
//   id: number;
// }
// interface B {
//   id: string;
// }
// // ERROR: conflict id type
// interface C extends A, B {}

// COMPARE TYPE ALIAS vs. INTERFACE ***
// TYPE ALIAS: Duplicate Identifier
// type A = {
//   id: number;
// };
// type A = {
//   email: string;
// };
// INTERFACE: Declaration Merging
// interface A {
//   id: number;
// }
// interface A {
//   email: string;
// }
// // Final A (Declaration merging): interface A { id: number, email: string }
// const test: A = { id: 1, email: 'a@mail.com' };

// Lib, Package, Module: ex. express, next-auth has own Interface
// use case: i want to extends Request(express)
// interface Request {
//   user: string;
// }

// type A = string;
// interface B {
//   id: number;
// }
// type C = A | B;

// BUILT IN OBJECT
// const d = new Date();
// const e = new Error();

// MAP, SET
// const m = new Map<number, string>();
// m.set(0, 'Tan');
// m.set(9, 'Por');
// m.get(1);

// const s = new Set<number>();
// s.add(1); // BOX: 1
// s.add(5); // BOX: 1,5
// s.add(7); // BOX: 1,5,7
// s.add(5); // BOX: 1,5,7
// s.has(5); // true
