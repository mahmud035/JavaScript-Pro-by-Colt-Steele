'use strict';

//* Getters

// Chat GPT 👇
// https://chatgpt.com/share/4467b597-8c70-428d-9aed-7a7abf66ddfa

/* 
{
  // 1. Defining a Getter

  // NOTE: Getters are defined using the "get" keyword inside an object or a class. You can think of a getter as a method that’s called when you attempt to read a property.

  const person = {
    firstName: 'Mahmud',
    lastName: 'Hasan',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  console.log(person.fullName); // Mahmud Hasan

  //? How Getters Work:
  // No Arguments: A getter does not take any arguments. Its job is simply to return a value based on other properties of the object.

  // Called Automatically: The getter method is automatically called when you access the property. In the above example, person.fullName looks like a regular property but is actually a method call that returns a string.

  // Cannot Set: A getter can only read the value. If you try to assign a value to a getter property, it will not work unless you define a corresponding setter.

  // 2. Using Getters in Classes

  // NOTE: You can also use getters inside classes. Here's an example where we define a Rectangle class with a getter for the area:

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    // Getter for calculating the area
    get area() {
      return this.width * this.height;
    }
  }

  const rect = new Rectangle(5, 10);
  console.log(rect.area); // 50

  // 3. Combining Getters with Setters

  // NOTE: Getters are often paired with setters, which allow you to define how properties should be set. While getters are used to access properties, setters are used to modify them.

  const user = {
    firstName: 'Mahmud',
    lastName: 'Hasan',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
      const [first, last] = name.split(' ');
      this.firstName = first;
      this.lastName = last;
    },
  };

  console.log(user.fullName); // Mahmud Hasan

  user.fullName = 'Ahmed Khan';
  console.log(user.fullName); // Ahmed Khan
}
 */

// Lecture Code

{
}

//* Setters

// Chat GPT 👇
// https://chatgpt.com/share/75634718-4bba-47a2-9380-45d8d41d1072

/* 
{
  const person = {
    firstName: 'Mahmud',
    lastName: 'Hasan',

    set fullName(name) {
      const [first, last] = name.split(' ');
      this.firstName = first;
      this.lastName = last;
    },
  };

  person.fullName = 'Ahmed Hossain'; // This will trigger the setter

  console.log(person.firstName); // "Ahmed"
  console.log(person.lastName); // "Hossain"

  // Use Cases of Setters

  // 1. Validation: Setters are useful when you want to validate the value being assigned to a property. For example, you can ensure that only numbers are assigned to an age property.

  const person2 = {
    _age: 25,

    get age() {
      return this._age;
    },

    set age(value) {
      if (typeof value === 'number' && value > 0) this._age = value;
      else console.log('Please enter a valid age');
    },
  };

  person2.age = 30; // valid
  person2.age = -5; // invalid
}
 */

// Lecture Code

{
}

//* Public Fields

// Chat GPT 👇
// https://chatgpt.com/share/b245b1a4-51ae-4ee0-9cee-971baf9f893c

{
  // Syntax for Public Fields

  // NOTE: Public fields are declared directly inside the class body. These fields are publicly accessible and can be initialized with or without default values.

  // Example 1: Class with Public Fields
  class User {
    // Public field (accessible from outside the class)
    name = 'John Doe';

    constructor(age) {
      this.age = age;
    }

    // Public method
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old`
      );
    }
  }

  const user = new User(25);

  console.log(user.name); // John Doe
  console.log(user.age); // 25
  user.greet(); // Hello, my name is John Doe and I am 25 years old.

  // Example 2: Class with Public Fields
  class Animal {
    // Public field
    type = 'Mammal';

    constructor(name) {
      this.name = name;
    }

    // Public method
    describe() {
      console.log(`${this.name} is a ${this.type}`);
    }
  }

  const lion = new Animal('Lion');

  console.log(lion.type); // Mammal
  lion.describe(); // Lion is a Mammal
}
