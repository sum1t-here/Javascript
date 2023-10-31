class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User('Chai', 'chai@fb.com', '123');
console.log(chai); // User { username: 'Chai', email: 'chai@fb.com', password: '123' }
console.log(chai.encryptPassword()); // 123abc
console.log(chai.changeUsername()); // CHAI

// behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

class ME {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`Username is ${this.username}`);
  }
}

class teacher extends ME {
  constructor(username, email, password) {
    // earlier we used .call()
    // in class we use super , super does automatically what does .call() do
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was introduced by ${this.username}`);
  }
}

const me = new teacher('chai', 'chai@teacher.com', '123');
me.addCourse(); // New course was introduced by chai

const you = new ME('anbv', '12345678', 'asdfg');
// you.addCourse(); -- no permission
you.logme(); // Username is anbv

console.log(me === teacher); // false
console.log(me instanceof teacher); // true
console.log(me instanceof ME); // true

class User1 {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log('Logged in');
  }

  // not given acces
  static createId() {
    return '123';
  }
}

const Sumit = new User1('Sumit');
// console.log(Sumit.createId()); - not accessible

class Teacher extends User1 {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const mac = new Teacher('Macair', 'mac@apple.com');
mac.logMe(); // Logged in
// console.log(mac.createId());
