// NUMBER
// Define variable `myAge` with type of number.
let myAge: number = 25;
// If re-assign `myAge` with some string then we will get error of Type '"Pond"' is not assignable to type 'number'.
// myAge = 'Pond';

// BOOLEAN
// Define variable `hasHobbies` with type of boolean.
let hasHobbies: boolean = false;
// If re-assign `hasHobbies` with number then we will get an error, because number is NOT type of boolean.
// hasHobbies = 1;

// ARRAY
// Define variable `hobbies` with type of array of string.
let hobbies: string[] = ['Cooking', 'Sports'];
// If re-assign `hobbies` with array of number then we will get an error.
// hobbies = [100, 200];

// Define variable `hobbies2` with type of array of any.
let hobbies2: any[] = ['Cooking', 'Sports'];
// Now we can re-assign array of number to `hobbies2`, because array of number is acceptable for array of any.
hobbies2 = [100, 200]
// If re-assign `hobbies2` with type of any other than array then we will get an error.
// hobbies2 = 100;

// TUPLES
// Define a format of data as array of mixed type.
let address: [string, number] = ['Superstreet', 99];
// If re-assign with other format than the defining then we will get an error.
// address = [99, 'Superstreet'];

// ENUM
enum Color {
  Gray,       // 0
  Green,      // 1
  Blue = 100, // 100
  Red,        // 101 --> will be increment of previous value by 1.
  Violet = 5, // 5
  Salmon,     // 6
}

let myColor: Color = Color.Green;
console.log(myColor);

// ANY
// Define `car` with type any
let car: any = 'BMW';
console.log(car);
// So we can assign any type to `car`
car = { brand: 'BMW', series: 3 };
console.log(car);

// FUNCTION TYPE
function multiply(a: number, b: number): number {
  return a * b;
}

function sayHello(): void {
  console.log('Hello!');
}

// We define `myFunction` implicitly type any.
let myFunction;
// So we can assign any type to it.
myFunction = sayHello;
myFunction();
myFunction = multiply;
console.log(myFunction(2, 3));
myFunction = 1;
console.log(myFunction);

let myMultiply: (a: number, b: number) => number;
// This will show an error because () => void can't assign to `myMultyply`.
// myMultiply = sayHello;
myMultiply = multiply;
console.log(myMultiply(2, 3));

// OBJECT
let userData = {
  name: 'Pond',
  age: 25,
};

// This will show an error, because new assign value is not the same type as defined on the first place.
// userData = {
//   a: 'Kantapon',
//   b: 25,
// };

// We can define with type explicitly like this.
let userDataExplicitly: { name: string, age: number } = {
  name: 'N____',
  age: 25,
}

// COMPLEX OBJECT
type Complex = {
  data: number[],
  output: (all: boolean) => number[],
};

let complex: Complex = {
  data: [2, 3, 31],
  output: function(all: boolean): number[] {
    return this.data;
  },
};
console.log(complex.output(true));

// UNION TYPES
let myRealAge: number | string = 25;
// So we can assign either string or number to `myRealAge`.
myRealAge = '25';
// But we can't assign any other into it.
// myRealAge = true;
