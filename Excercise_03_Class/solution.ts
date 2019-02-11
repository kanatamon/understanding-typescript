// Exercise 1 - How was your TypeScript Class?
class Car {
  acceleration: number = 0;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  honk(): void {
    console.log('Toooooooo!');
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
  constructor(
    public width: number = 0,
    public length: number = 0,
  ) {}
}

class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}
const rectangle: Rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
  private _firstName: string = '';

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
}

var person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);