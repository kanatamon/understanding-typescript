// Decorator function will received only `constructorFn` parameter, which typed Function.
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log('Hi!');
  }
}



// Factory
function logging(value: boolean) {
  return value ? logged : () => null;
}

@logging(false)
class Car {

}



// Advanced
function printalbe(constructorFn: Function) {
  constructorFn.prototype.print = function () {
    console.log('Thanks to Nunan :)');
  };
}

@logging(true)
@printalbe
class Pond {
  name = 'Kantapon Sritiyot';
}

const pond = new Pond();
/* 
  class `Pond` doesn't recognize method `print`
  , which be added in the decorator function,
  so, we need to cast the instance `pond` to be type `any`
*/
(<any>pond).print();



// Method Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.writable = value;
  }
}

class Project {
  constructor(
    public name: string = '',
  ) {}

  calBudget() {
    console.log(1000);
  }

  @editable(false)
  calBudgetWithNonEditable() {
    console.log(1000);
  }
}

const project = new Project('Nanthapat Project');

project.calBudget();  // log: 1000
// Try to over-write method `calBudget`.
project.calBudget = function() {
  console.log(2000); 
}
project.calBudget();  // log: 2000

project.calBudgetWithNonEditable(); // log: 1000
// Try to over-write method `calBudgetWithNonEditable`.
try {
  project.calBudgetWithNonEditable = function() {
    console.log(2000);
  }
} catch (e) {
  console.error(e);
}
project.calBudgetWithNonEditable(); // log: 1000



// Parameter Decorator
function printInfo(
  target: any,
  methodName: string,
  paramIndex: number,
) {
  console.log('target: ', target);
  console.log('methodName: ', methodName);
  console.log('paramIndex: ', paramIndex);
}

class Course {
  constructor(
    public name: string = '',
  ) {}

  learn(mode: string, @printInfo printAll: boolean) {
    // Carry a heart that nerver hates.
    // Carry a smile that nerver fades.
    // Carry a touch that nerver hurts.
    // I promised to myself that I'll suppport you, Nunan for the rest of my lifetime :)
    console.log(':)');
  }
}

const course = new Course('How to love Nunan without hurt');