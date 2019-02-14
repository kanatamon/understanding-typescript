// Simple Generic
function echo(data: any) {
  return data;
}

/* 
  Try to write the following code.

  ```
  console.log(echo('Nunan'));
  ```

  We want to get length of given string of `Nunan`.
  Then we do by appending `.length` after.

  ```
  console.log(echo('Nunan').length);
  ```

  You will get noticed that while typing `.length`
  the IDE doesn't know type of the given parameter, which is string of `Nunan`,
  because of type of `any`, which we difined as the parameter,
  so, the IDE won't serve you some a solid auto-complete after typing `.`
*/
console.log(echo('Nunan').length);


// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

// With generic type <T> the IDE will recognize type of the given parameter implicitly.
console.log(betterEcho('Nunan').length);

// And you can even write generic type <T> explicitly by the following code.
console.log(betterEcho<number>(27).toString());



// Built-in Generics
const numbers: Array<number> = [1.94, 2.33];
// numbers.push('Nunan');
numbers.push(-2.99);
console.log(numbers);



// Arrays
function printAll<T>(args: T[]) {
  args.forEach(e => console.log(e));
}
printAll<string>(['Apple', 'Banana']);



// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2('Nunan'));



// Generic Class
class SimpleMath<T extends number | string> {
  base: T | null = null;
  multiply: T | null = null;

  calculate(): number {
    const base = this.base ? +this.base : 0;
    const multiply = this.multiply ? +this.multiply : 0;
    return base * multiply;
  }
}

const simpleMath = new SimpleMath<string>();
simpleMath.base = '5';
simpleMath.multiply = '5';
console.log(simpleMath.calculate());