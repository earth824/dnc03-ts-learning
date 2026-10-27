// let a: string;
// let b: number;
// let c: string = 'Hello';

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

// const Priority = { LOW: 'LOW', MEDIUM: 'MEDIUM', HIGH: 'HIGH' } as const;
// let p: (typeof Priority)[keyof typeof Priority];
// p = Priority.LOW;
// console.log(p);
// console.log(Priority);
// // ['LOW', 'MEDIUM', 'HIGH']
// Object.values(Priority).forEach((el) => console.log(el));

// ARRAY
// const a: number[] = [7, 3, 5, 'TEST'];
// const b = [7, 3, 5, 'TEST']
// const c: Array<number> = [8, 3, 'Hello'];
// const d = []
// let e: [];
// e = ['s']

// TUPLE (Array: fixed length and type)
// const a: [string, number] = ['Por', 88];
// a[0] = 9
// ex. useState => [state, state function]

// NEVER
// let a: never;
// a = true

// type Z = 'DARK' | 'LIGHT' | 'SYSTEM';
// let z: Z = Math.random() > 0.5 ? 'DARK' : Math.random() ? 'LIGHT' : 'SYSTEM';

// switch (z) {
//   case 'DARK': {
//     console.log(z);
//     break;
//   }
//   case 'LIGHT': {
//     console.log(z);
//     break;
//   }
//   default: {
//     let a: never = z;
//     console.log(z);
//   }
// }
// function createError(): never {
//   throw new Error('Something went wrong');
// }

// TYPE ASSERTION
let a: { name: string };
a = { name: 'Ben' };

const raw = '{"name":"John"}';
const obj = JSON.parse(raw) as unknown; // { name: 'John' }

if (Array.isArray(obj)) {
  obj.map((el) => el);
}

console.log(obj);

const Role = { USER: 'USER', ADMIN: 'ADMIN' } as const;
const Months = ['JAN', 'FEB', 'MAR'] as const;

const nums = [9, 5, 4, 6];
const result = nums.find((el) => el > 20)!;
