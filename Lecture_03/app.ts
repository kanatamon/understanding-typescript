namespace MyMath {
  const PI = 3.14;

  export function calculateCircumference(diameter: number) {
    return diameter * PI;
  }

  export function calculateRectangle(width: number, length: number) {
    return width * length;
  }
}

// This is registered in the global scope
// And `MyMath.PI` is scoped in individual `MyMath` namespace
// So variable `PI` in global and MyMath's namespace won't get any conflict
const PI = 2.99;

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(10));
console.log('Gobal scope PI = ' + PI);
