// GENERIC
// function getFirstElement(arr: string[]): string | undefined {
//   // repeat logic
//   return arr[0];
// }

// function getFirstElementNumber(arr: number[]): number | undefined {
//   // repeat logic
//   return arr[0];
// }

// function getFirst(arr: unknown[]): unknown | undefined {
//   return arr[0];
// }

// const result = getFirst(['Ray']);
// console.log(result);

// GENERIC similar to function parameter: insteadof variable or some value, we pass type
// Convention: T, U, V, ..., KEY: K
// function getFirstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// const result = getFirstElement<string>(['Mhee', 'Nook']);
// const result1 = getFirstElement<number>([6, 3, 5, 2]);
// console.log(result1?.toFixed(2));
// type User = { id: number; name: string };
// const result2 = getFirstElement<User>([{ id: 1, name: 'Toey' }]);
// console.log(result2?.name);

// GENERICT can use with: function, interface, type alias, class
// function getFirstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }
// typescript can infer generic type when use with a function
// const result = getFirstElement([8, 4, 2, 'aaa', true]);

// interface QueryResult<T> {
//   data: T;
// }
// // { data: string }
// const q: QueryResult<string> = { data: 'Booo' };

// type ErrorResponse<T> = {
//   error: T;
// };
// const e: ErrorResponse<number> = { error: 4090 };

// GENERIC CONSTRAINT (extends)
// type User = {
//   id: number;
//   email: string;
//   role: 'ADMIN' | 'USER';
// };
// function getUserData(key: 'id' | 'email' | 'role') {
//   const user: User = { id: 6, email: 'admin@mail.com', role: 'ADMIN' };
//   return user[key]; // user['id']
// }

// console.log(getUserData('id'));

// function getDataFromObject<T extends { id: number }>(obj: T) {
//   return obj;
// }

// getDataFromObject<Product>({ name: 'a', price: 90 });
// function getLength<T extends { length: number }>(input: T) {
//   return input.length;
// }
// const nums: number[] = [6, 0, 9];
// const n = 20;
// const s = 'Por';
// s.length;

// getLength<string>(s);
// type Product = { name: string; price: number };
// function getObjectData<T extends { [k: string]: unknown }>(input: T) {}
// getObjectData<User>({ id: 4, email: 'a', role: 'ADMIN' });
// getObjectData<Product>({ name: 'aa', price: 90 });

// function getKey<K extends 'name' | 'price'>(input: K) {}
// // getKey('namesksskj');
// type A = keyof Product; // 'name' | 'price'
// const a: A = 'price';

// type User = {
//   id: number;
//   email: string;
//   role: 'ADMIN' | 'USER';
// };
// // type B = keyof User; // 'id' | 'email' | 'role'
// // const b: B = 'email';

// function getObjectData<T extends { [k: string]: unknown }>(
//   obj: T,
//   key: keyof T
// ) {
//   return obj[key];
// }
// getObjectData<User>({ id: 1, email: 'a', role: 'ADMIN' }, 'role');

// GENERIC DEFAULT
// function getFirstElement<T = string>(input: T[]): T | undefined {
//   return input[0];
// }
// getFirstElement([4, 5]);

// interface Result<T = string> {
//   data: T;
// }
// const a: Result<number> = { data: 8 };
// const b: Result = { data: 'sksksks' };

// keyof
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description?: string;
// }
// type ProductKey = keyof Product; // 'id' | 'name' | 'price' | 'description'

// typeof: Type
// const product = {
//   id: 1,
//   name: 'Coca Cola',
//   price: 20
// };

// const result = typeof product; // 'object'
// type Product = typeof product; // { id: number; name: string; price: number }
// const p: Product = { id: 1, name: 'Pepsi', price: 55 };

// function sum(a: number, b: number): number {
//   return a + b;
// }
// type Fn = typeof sum;

// const HttpStatus = {
//   OK: 200,
//   CREATED: 201,
//   BAD_REQUEST: 400,
//   NOT_FOUND: 404
// } as const;
// type HttpStatus = typeof HttpStatus;

// INDEXED ACCESS TYPES
// type Car = {
//   id: number;
//   brand: string;
//   model: string;
// };

// type CarId = Car['id'];
// type A = Car['brand' | 'model'];
// type B = Array<string>['map']

// MAPPED TYPE
// type CreateUserInput = {
//   name: string;
//   pass: string;
//   age: number;
// };
// type UpdateUserInput = {
//   [K in keyof CreateUserInput]?: CreateUserInput[K];
// };
// // K in 'name' | 'pass' | 'age'
// // {
// //   name?: string
// //   pass?: string
// //   age?: number
// // }

// // type UpdateUserInput = {
// //   name?: string;
// //   pass?: string;
// //   age?: number;
// // };

// UTILITY TYPE
// Partial
// type User = {
//   name: string;
//   pass: string;
//   age: number;
// };
// type OptionalUser = Partial<User>;

// // Readonly
// type ReadonlyUser = Readonly<User>;

// // Pick
// type A = Pick<User, 'name' | 'age'>;

// // Omit
// type B = Omit<User, 'pass'>;

// // Record
// type Obj = Record<string, unknown>;
// type C = Record<'id' | 'name', string>;

// type OptionalBook = {
//   name?: string;
//   author?: string;
// };
// // Required
// type Book = Required<OptionalBook>;

// // Exclude
// type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
// type Urgent = Exclude<Priority, 'LOW'>;

type User = {
  id: number;
  email: string;
  pass: string;
  dob: Date;
  gender: 'MALE' | 'FEMALE';
  createdAt: Date;
};

type UpdateUserInput = Partial<Pick<User, 'dob' | 'gender'>>;
