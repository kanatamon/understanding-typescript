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