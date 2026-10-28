// typeof
// if input is string => convert to upper case
// if input is number => format to two decimal
// function format(input: string | number): string {
//   if (typeof input === 'string') {
//     // inside if block: input narrow to string
//     return input.toUpperCase();
//   }
//   // after this line: input narrow to number
//   return input.toFixed(2);
// }

// Be careful: typeof null: object
// type User = { id: number };
// function test(input: User | null) {
//   // cannot use typeof: null
//   // if (typeof input === 'object') {
//   // }
//   if (input) {
//     // if block narrow input => User
//     return input;
//   }
//   // below this: input => null
//   input
// }

// function print(input: number | null) {
//   if (input) {
//     return input
//   }
//   // below input => null, 0
//   input
// }

// function setBackground(theme: 'DARK' | 'LIGHT' | null) {
//   if (theme === 'DARK') {
//     theme
//   }
//   if (theme !== null) {
//     theme
//   }
// }

// IN Operator
// const a = { id: 3 };
// console.log('id' in a);
// type Message = {
//   message: string;
// };
// type Data = {
//   data: unknown;
// };
// function send(res: Message | Data) {
//   if ('message' in res) {
//     // res narrow to Message
//     return;
//   }
//   // res narrow to Data
//   res
// }

// Instanceof
// const d = new Date();
// console.log(d instanceof Date); // true
// const e = new Error('Error Message');
// function logErrorMessage(input: unknown) {
//   if (input instanceof Date) {
//     // input narrow => Date
//   }
//   if (input instanceof Error) {
//     // input narrow => Error
//     console.log(input.message);
//   }
// }
// logErrorMessage(e);

// DISCRIMINATED UNION (narrow object)
// each object type has common property called: discriminator
// type Circle = {
//   type: 'circle'; // discriminator
//   radius: number;
// };
// type Rectangle = {
//   type: 'rectangle';
//   width: number;
//   height: number;
// };
// type Square = {
//   type: 'square';
//   sideLength: number;
// };
// type Triangle = {
//   type: 'triangle';
//   width: number;
//   height: number;
// };
// function calcArea(shape: Circle | Rectangle | Square | Triangle): number {
//   if (shape.type === 'circle') {
//     // shape => Circle
//     return Math.PI * shape.radius ** 2;
//   }
//   if (shape.type === 'rectangle') {
//     return shape.height * shape.width;
//   }
//   if (shape.type === 'square') {
//     return shape.sideLength ** 2;
//   }
//   return (shape.height * shape.width) / 2;
// }

// TYPE PREDICTATE (predictate function: function that return boolean)
type User = {
  id: number;
  email: string;
};

function isUser(input: unknown): input is User {
  return (
    input !== null &&
    typeof input === 'object' &&
    'id' in input &&
    'email' in input &&
    typeof input.id === 'number' &&
    typeof input.email === 'string'
  );
}

const a: any = { id: 'aaaa', email: 'a' };
if (isUser(a)) {
}
