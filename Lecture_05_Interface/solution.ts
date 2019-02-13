namespace Solution {
  interface NamedPerson {
    firstName: string;
    // Add property `age` as optional to fix sticky checking.
    age?: number;

    // We can define property that we as the present don't know its name yet.
    [propName: string]: any;

    greet(lastName: string): void;
  }
  
  function greet(person: NamedPerson) {
    console.log('Hello, ' + person.firstName);
  }
  
  const person: NamedPerson = {
    firstName: 'Nunan',
    age: 25,
    greet(lastName: string) {
      console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    },
  }; 
  
  greet(person);

  // This can be solved by add property `age` as optional in the interface.
  greet({
    firstName: 'Nunan',
    age: 25,
    hobbies: ['Cooking', 'Sports'],
    greet(lastName: string) {
      console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    },
  });  

  person.greet('Phondee');

  class Person implements NamedPerson {
    firstName: string = '';
    lastName: string = '';
    greet(lastName: string) {
      console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    }
  }

  const myPerson = new Person();
  myPerson.firstName = 'Nanthapat';
  myPerson.lastName = 'Phondee';
  greet(myPerson);
  myPerson.greet(myPerson.lastName);



  // Function Types

  interface DoubleValueFunc {
    (number1: number, number2: number): number;
  }

  let myDoubleFunction: DoubleValueFunc;
  myDoubleFunction = function(v1: number, v2: number) {
    return (v1 + v2) * 2;
  };

  console.log(myDoubleFunction(10, 20));



  // Interface Inheritance

  interface AgedPerson extends NamedPerson {
    age: number;
  }

  const oldPerson: AgedPerson = {
    age: 25,
    firstName: 'Nunan',
    greet(lastName: string) {
      console.log('Hello!');
    },
  };
  console.log(oldPerson);
}
