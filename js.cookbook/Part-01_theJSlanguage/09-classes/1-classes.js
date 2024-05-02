/**
 * Creating a reusable class
 */

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  //   this is  a method
  swapNames() {
    // Use a handy shortcut (destructuring assignment) to assign both properties at once
    [this.firstname, this.lastname] = [this.lastname, this.firstname];
  }

  /**
   * Using the Constructor Pattern to Make a Custom Class
   */

  // Add a nested function to represent a method
  // this.swapNames = function() {
  //     [this.firstName, this.lastName] = [this.lastName, this.firstName]
}

const newPerson = new Person('John', 'Doe');

console.log(newPerson.firstname); // John

newPerson.swapNames();
console.log(newPerson.firstname); // Doe

/**
 *  Adding properties to a class
 */

class Human {
  constructor(firstname, lastname, dateOfBirth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dateOfBirth = dateOfBirth;
  }
  // this is a getter for the age property
  getAge() {
    if (this.dateOfBirth instanceof Date) {
      // calculate difference in years
      const today = new Date();
      let age = today.getFullYear() - this.dateOfBirth.getFullYear();

      // if the birthday didnot happened this year
      const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff == 0 && today.getDate() < this.dateOfBirth.getDate())
      ) {
        age -= 1;
      }
      return age;
    }
  }
}

const person = new Human('john', 'Doe', new Date(2002, 3, 11));
console.log(person.getAge()); // 22

class Person2 {
  constructor(firstName, lastName, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.setDateOfBirth(date);
  }
  getDateOfBirth() {
    return this._dateOfBirth;
  }
  setDateOfBirth(value) {
    if (value instanceof Date && value < Date.now()) {
      // This is a valid date
      this._dateOfBirth = value;
    } else {
      throw new TypeError('Birthdate cannot be in the future');
    }
  }
}
const people = new Person2('Luke', 'Takei', new Date(1990, 5, 22));
console.log(people.getDateOfBirth()); // 1990-06-21T18:30:00.000Z
// This change is allowed
people.setDateOfBirth(new Date(2010, 10, 10)); // 2010-11-09T18:30:00.000Z
console.log(people.getDateOfBirth()); //

// This change causes an error
// people.setDateOfBirth(new Date(2035, 10, 10));

// The leading underscore in a variable name like _dateOfBirth has another purpose.
// Currently, JavaScript doesn’t have any way to create private fields.
// But the underscore signals that a field is supposed to be private to the class

//   // A likely implementation of private field syntax in the near future
//   class Person { #firstName; #lastName;
//     constructor(firstName, lastName) { this.#firstName = firstName; this.#lastName = lastName;
//     }
//          // Wrap the fields in properties
//     get firstName() { return this.#firstName;
//          }
//          set firstName(name) {
//     this.#firstName = name; }
//          get lastName() {
//     return this.#lastName; }
//     set lastName(name) { this.#lastName = name;
//     } }

/**
 * Supporting Method Chaining in Your Class
 */

// The ability to directly call one method on the result of another method,
// in a single code statement, is known as method chaining.
// Here’s an example with a string and the replaceAll() method.
// Because replaceAll() returns a new string, you can call replaceAll() again on that string, and get a third string:

// const safePieceOfHtml =
// originalPieceOfHtml.replaceAll('<', '&lt;').replaceAll('>', '&gt;');

class Book {
  constructor(title, author, price, publishedDate) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.publishedDate = publishedDate;
  }
  raisePrice(percent) {
    const increase = this.price * percent;
    this.price += Math.round(increase) / 100;
    return this;
  }
  releaseNewEdition() {
    // Set the pulishedDate to today
    this.publishedDate = new Date();
    return this;
  }
}
const book = new Book(
  'I Love Mathematics',
  'Adam Up',
  15.99,
  new Date(2010, 2, 2)
);
// Raise the price 15% and then change the edition, using method chaining
console.log(book.raisePrice(15).releaseNewEdition());

// Book {
//     title: 'I Love Mathematics',
//     author: 'Adam Up',
//     price: 18.39,
//     publishedDate: 2024-05-02T06:48:32.296Z
//   }

class BookStatic {
  constructor(isbn, title, author, publishedDate) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.publishedDate = publishedDate;
  }
  static isEqual(book, otherbook) {
    if (book instanceof BookStatic && otherbook instanceof BookStatic) {
      // Books are deemed equal if their ISBNs match,
      // irrespective of dashes
      return (
        book.isbn.replaceAll('-', '') === otherbook.isbn.replaceAll('-', '')
      );
    } else {
      return false;
    }
  }
}

const firstPrinting = new BookStatic(
  '978-3-16-148410-0',
  'A.I. Is Not a Threat',
  'Anne Droid',
  new Date(2019, 2, 2)
);
const secondPrinting = new BookStatic(
  '978-3-16-148410-0',
  'A.I. Is Not a Threat',
  'A. Droid',
  new Date(2021, 2, 10)
);

// Compare the books with the static method
const sameBook = BookStatic.isEqual(firstPrinting, secondPrinting);
console.log(sameBook); // true
