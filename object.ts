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
type Scores = {
  [k: string]: number;
};

const scores: Scores = {
  por: 10,
  max: 9
};

scores.nuke = 5;
scores.mhee = 7;
scores.palm = 6;
