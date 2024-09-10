'use strict';

//* Introducing "this" (Understanding JavaScript "this")

// Chat GPT 👇
// https://chatgpt.com/share/9728e8ab-4e16-4f4e-b7fd-c1e0419b2f75

/* 
{
  // ==============================================
  // IMPORTANT: Key Points To Remember: 👇

  // 1. In the global context, "this" refers to the global object.

  // 2. Inside a function (in non-strict mode), "this" is the global object, while in strict mode, it is undefined.

  // 3. In methods, "this" refers to the object the method belongs to.

  // 4. Inside constructor functions and classes, "this" refers to the instance of the object.

  // 5. Arrow functions do not have their own "this"; they inherit it from the lexical context.

  // 6. Event listeners set "this" to the element that triggered the event.

  // 7. You can manually set "this" using bind(), call(), or apply().

  // ==============================================

  // Examples:

  // 1. Global Context (Outside of Any Function)
  console.log(this); // window

  // 2. Inside Functions (Non-Strict Mode)
  // 3. Inside Functions (Strict Mode)
  function sayHello() {
    console.log(this);
  }
  sayHello(); // undefined

  // 4. Inside Object Methods
  const person = {
    name: 'Mahmud',
    greet() {
      console.log(this.name);
    },
  };

  person.greet(); // 'Mahmud'

  // In this case, "this" refers to the person object, so this.name is 'Mahmud'.

  // 5. Constructor Functions

  // NOTE: When a function is used as a constructor (i.e., when it's invoked using the new keyword), "this" refers to the newly created object.

  function Person(name) {
    this.name = name;
  }

  const mahmud = new Person('Mahmud');
  console.log(mahmud.name); // 'Mahmud'

  // Here, "this" inside the constructor refers to the new object that is being created (mahmud).

  // 6. Arrow Functions

  // NOTE: Arrow functions behave differently when it comes to "this". Instead of having their own "this", arrow functions inherit "this" from the surrounding (lexical) context in which they were defined. This is particularly useful when working inside methods or callbacks, as it avoids confusion over the value of "this".

  const person2 = {
    name: 'Mahmud',
    greet() {
      const sayHello = () => {
        console.log(this.name);
      };
      sayHello();
    },
  };

  person2.greet(); // 'Mahmud'

  // Here, the arrow function "sayHello" uses the "this" value from the "greet" method’s context, which is person.

  // 7. Event Listeners

  // NOTE: In event handlers, "this" refers to the element that received the event.

  const button = document.querySelector('button');

  button.addEventListener('click', function () {
    console.log(this); // refers to the button element
  });

  // WARNING: However, if you use an arrow function in an event listener, "this" will refer to the lexical scope rather than the element.

  button.addEventListener('click', () => {
    console.log(this); // refers to the surrounding context (likely window in the global scope)
  });

  // 8. Using bind(), call(), and apply()

  // NOTE: You can explicitly set the value of "this" using bind(), call(), and apply():

  // NOTE: call() and apply(): These methods immediately invoke a function with a specified "this" value. The only difference is that call() accepts arguments one by one, while apply() takes them as an array.

  function greet() {
    console.log(this.name);
  }
  const user = { name: 'Mahmud' };

  greet.call(user); // 'Mahmud'
  greet.apply(user); // 'Mahmud'

  // NOTE: bind(): This method creates a new function with a specific "this" value, without immediately invoking it.

  const boundGreet = greet.bind(user);
  boundGreet(); // 'Mahmud'

  // 9. Class Methods

  // NOTE: In ES6 classes, "this" behaves like it does with constructor functions. It refers to the instance of the class.

  class PersonCl {
    constructor(name) {
      this.name = name;
    }

    greet() {
      console.log(this.name);
    }
  }

  const john = new PersonCl('John');
  john.greet(); // 'John'
}
 */

// Lecture Code

{
}

//* The Mystery of The Keyword "this"

// Chat GPT 👇
// https://chatgpt.com/share/9728e8ab-4e16-4f4e-b7fd-c1e0419b2f75

{
  // See Above Code 👆
}

//* Global Objects and "this"

// Chat GPT 👇
// https://chatgpt.com/share/43a12d25-c84e-4398-9d3c-1a5fe3f3880f

{
  // See Above Code 👆
}

//* The "Left Of The Dot" Rule

// Chat GPT 👇
// https://chatgpt.com/share/93856aa8-20f3-417d-81ae-4e4ed6c8e5d5

{
  // See Above Code 👆
}

//* "this" and Classes

// Chat GPT 👇
// https://chatgpt.com/share/9728e8ab-4e16-4f4e-b7fd-c1e0419b2f75

{
  // See Above Code 👆
}

//* The Call Method

// Chat GPT 👇
// https://chatgpt.com/share/895772d6-c42f-4480-962f-280854e1251d

/* 
{
  // NOTE: Syntax:
  //       ==>   functionName.call(thisArg, arg1, arg2, ...)

  // where,
  // functionName: The function you want to call / invoke.
  // thisArg: The value you want to set as "this" inside the function.
  // arg1, arg2, ...: The arguments you want to pass to the function.

  // ==============================================
  // IMPORTANT: When to Use call():

  // 1. Function borrowing: If you want to use a function from one object on another object.

  // 2. Setting explicit context: When you need to ensure a function runs with a particular "this" value.

  // 3. Passing arguments: When you want to pass arguments individually and not as an array (use call() over apply()).
  // ==============================================

  {
    // Example 1: Using call() to Set "this"

    // Here’s an example of using call() to invoke a function with a different "this" context.

    const person1 = {
      name: 'Alice',
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      },
    };

    const person2 = {
      name: 'Bob',
    };

    // Use greet method of person1, but change the context of person2
    person1.greet.call(person2); // Hello, my name is Bob

    // In this example, the "greet" function is defined inside the "person1" object. By default, the "this" value inside the "greet" method refers to "person1". However, by using call(), we explicitly set "this" to refer to "person2", which changes the behavior of the function when invoked.
  }

  {
    // Example 2: Borrowing a Method Using call()

    // You can also use the call() method to borrow functions from one object and use them with another object.

    const person1 = {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
    };

    const person2 = {
      firstName: 'John',
      lastName: 'Doe',
    };

    // Borrow the fullName method from person1 for person2
    console.log(person1.fullName.call(person2)); // John Doe

    // Here, the "fullName()" method is defined for "person1", but we use it for "person2" by calling "person1.fullName.call(person2)". The "this" context is set to "person2", so it uses person2's properties.
  }

  {
    // Example 3: Passing Arguments with call()

    function introduce(age, city) {
      console.log(
        `Hello, my name is ${this.name}. I am ${age} years old and I live in ${city}.`
      );
    }

    const person = {
      name: 'Charlie',
    };

    // Call the introduce function with specific arguments and set this to person
    introduce.call(person, 25, 'New York');
    // Output: Hello, my name is Charlie. I am 25 years old and I live in New York.

    // In this example, the "introduce" function is invoked with "person" as its "this" value and also with two arguments ("age" and "city"). The call() method passes these arguments in a comma-separated list after the "thisArg".
  }
}
 */

//* The Apply Method

// Chat GPT 👇
// https://chatgpt.com/share/8e3aab39-fe22-4e94-98d3-c6f92f9a58d5

{
  // NOTE: Syntax:
  //       ==>   functionName.apply(thisArg, [argsArray])

  // where,
  // functionName: The function you want to call / invoke.

  // thisArg: This refers to the value you want to set as "this" inside the function you're calling. It determines the context in which the function will execute. You can pass any object here, or even null or undefined (in strict mode, null/undefined will be passed as it is; in non-strict mode, they'll default to the global object, such as window in browsers).

  // argsArray: This is an array or array-like object that contains the arguments you want to pass to the function when it's called. If no arguments are required, you can pass an empty array or null.

  // ==============================================
  // IMPORTANT: Why Use apply() Instead of Direct Function Calls?
  // 1. Dynamic Arguments: If you have arguments in an array or array-like structure, "apply()" allows you to pass them all at once, without needing to explicitly unpack them.

  // 2. Changing Context ("this"): It allows you to run a function in the context of any object by setting a different "this" value.

  // 3. Borrowing Methods: You can use it to borrow methods from one object and apply them to another, which can be useful for code reuse.
  // ==============================================

  {
    // Example 1: Basic Usage
    function greet(name, age) {
      console.log(`Hello, my name is ${name} and Iam ${age} years old`);
    }

    greet.apply(null, ['Mahmud', 25]); // Hello, my name is Mahmud and I am 25 years old.

    // Explanation:

    // The greet function takes two arguments: name and age.
    // The apply() method allows you to call greet and pass null for thisArg (since this isn't needed here), and an array ["Mahmud", 25] for the arguments.
  }

  {
    // Example 2: Using apply() to Borrow Methods

    // You can use apply() to "borrow" methods from one object and apply them to another.

    const person1 = {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
    };

    const person2 = {
      firstName: 'John',
      lastName: 'Doe',
    };

    console.log(person1.fullName.apply(person2)); // John Doe

    // Explanation:

    // Here, "person1" has a method "fullName".
    // "apply()" is used to call "person1.fullName()" with "person2" as the "this" context.
    // As a result, it outputs the full name based on person2's properties.
  }

  {
    // Example 3: Using apply() with Math Functions

    const numbers = [5, 6, 2, 3, 7];

    const maxNumber = Math.max.apply(null, numbers);
    console.log(maxNumber);
  }

  {
    // Difference Between apply() and call()

    function introduce(name, age) {
      console.log(`Hello, I'm ${name} and I'm ${age} years old.`);
    }

    introduce.call(null, 'Ali', 30); // call() takes arguments individually

    introduce.apply(null, ['Ali', 30]); // apply() takes arguments as an array
  }
}
