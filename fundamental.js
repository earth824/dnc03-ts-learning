"use strict";
// let a: string;
// let b: number;
// let c: string = 'Hello';
Object.defineProperty(exports, "__esModule", { value: true });
// a = 'Hello TypeScript';
// b = 20;
// // c.toFixed(2);
// c.toUpperCase();
// console.log(c.toLowerCase());
// function test(a: any) {}
// test('aaaa')
// let b: unknown = 90;
// function test(a: string) {}
// test(b);
// TYPE ANNOTATION
// let a: string;
// a = 40;
// TYPE INFERENCE
// let a = 20;
// a = 'TEST';
// let b = 'World'
// const c = 'World'
// PRIMITIVE TYPE
// let a: string;
// let b: number;
// let c: boolean;
// let d: null;
// d = 6;
// let e: bigint;
// let f: symbol;
// ANY, UNKNOWN
// let a: any;
// a = 6;
// // a = 'kkjj';
// console.log(a.toUpperCase());
// let b: unknown;
// b = 6;
// // b = 'kkjj';
// if (typeof b === 'string') {
//   console.log(b.toUpperCase());
// }
// UNION
// let a: string | number;
// a = 'Hello';
// a = 90;
// a = null;
// let user: string | null;
// let age: number | undefined;
// let c: string | number | null;
// user = prompt('TEST');
// if (user) {
//   user;
// }
// TYPE ALIAS
// type Alphanumeric = string | number;
// let a: Alphanumeric;
// a = true;
// react-hook-form, zod, react, etc. : has own Type alias
// LITERAL TYPE
// let a: 'Hello';
// let theme: 'DARK' | 'LIGHT';
// theme = 'DARK';
// let priority: 'LOW' | 'MEDIUM' | 'HIGH';
// priority = 'LOW';
// ENUM
// enum Priority {
//   LOW, // LOW = 0
//   MEDIUM, // MEDIUM = 1
//   HIGH // HIGH = 2
// }
// enum Priority {
//   LOW = 'LOW',
//   MEDIUM = 'MEDIUM',
//   HIGH = 'HIGH'
// }
const Priority = { LOW: 'LOW', MEDIUM: 'MEDIUM', HIGH: 'HIGH' };
let p;
p = Priority.LOW;
console.log(p);
console.log(Priority);
// ['LOW', 'MEDIUM', 'HIGH']
Object.values(Priority).forEach((el) => console.log(el));
