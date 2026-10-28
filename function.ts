// PARAMETER TYPE ANNOTATION & RETURN TYPE ANNOTATION
// function test(a: number, b: number): string {
//   return a + b + '';
// }
// test(2, 8);

// const arrow = (a: string, b: boolean): boolean => Boolean(a + b);
// arrow('blabla', false);

// VOID
// function log(name: string): void {
//   console.log(`Hello ${name}`);
// }

// ANONYMOUS FN
// const friends: string[] = ['boom', 'ray', 'uiaye', 'toey'];
// const toUpper = friends.map((el: string): string => el.toUpperCase());
// console.log(toUpper);

// const ages: number[] = [55, 23, 31, 18];
// const below20 = ages.filter((el, i) => el < 20);
// console.log(below20);

// function calcPrice(
//   unitPrice: number,
//   quantity: number,
//   discount?: number // 0-1
// ): number {
//   return unitPrice * quantity * (1 - (discount ?? 0));
// }
// calcPrice(50, 2);

// function calcPrice(u: number, q: number, d = 0): number {
//   return u * q * (1 - d);
// }

// REST PARAMETER
// function sum(...nums: number[]) {}

// sum(2, 3); // nums: [2,3]
// sum(7, 8, 9); // nums: [7,8,9]
// sum(1, 3, 2, 5, 8, 7, 5); // nums: [1, 3, 2, 5, 8, 7, 5]

// PARAMETER DESTRUCTURING
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   description?: string;
// };

// function print({
//   name: productName,
//   price,
//   description = 'No description'
// }: Product): void {
//   console.log(
//     `name: ${productName}, price: ${price}, description: ${description}`
//   );
// }

// function print(p: Product): void {
//   console.log(
//     `name: ${p.name}, price: ${p.price}, description: ${p.description}`
//   );
// } // name: p.name, price: p.price, description: p.description

// EXCESS PROPERTY CHECKING
// type User = {
//   id: number;
//   email: string;
// };

// function test(u: User): void {}
// // test({ id: 1, email: 'a', pass: '123456' }); // ERROR
// const john = { id: 1, email: 'a', pass: '123456', gender: 'MALE' };
// test(john);

// FUNCTION TYPE
// type Func = Function;
// let a: Func = () => {};

// type Func = () => void;
// const a: Func = (a: number) => {
//   return 'TEST';
// };

// type CreateFn = (name: string) => string;
// const b: CreateFn = (input: string) => {
//   return 'HELLO';
// };

// interface User {
//   name: string;
//   // getName: () => string;
//   getName(): string;
// }
// const u: User = {
//   name: 'Jake',
//   // getName: () => {
//   //   return 'NAME';
//   // }
//   getName() {
//     return 'NAME';
//   }
// };

// FUNCTION OVERLOAD
// combine(1, 4) => 5
// combine('Hello', 'John') => 'Hello John'
// function combine(num1: number, num2: number): number;
// function combine(text1: string, text2: string): string;
// function combine(a: string | number, b: number | string): number | string {
//   if (typeof a === 'number' && typeof b === 'number') return a + b;
//   if (typeof a === 'string' && typeof b === 'string') return a + ' ' + b;
//   throw new Error('A must be same type as B');
// }

// combine(1, 3);
// combine('Hello', 'John');

// ASYNC FUNCTION (always return promise object)
async function run(): Promise<number> {
  return Math.random();
}
type User = {
  id: number;
  name: string;
};
const getUser = async (id: number): Promise<User> => {
  const result = { id: 2, name: 'abcd', pass: '123456' };
  return result;
};

getUser(1).then((data) => console.log(data));
