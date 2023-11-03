class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //   getter
  get password() {
    return `${this._password.toUpperCase()}abcfde`;
  }
  //   setter
  set password(value) {
    this._password = value.toUpperCase();
  }
}

const sumit = new User('sumit@ai', '123');
console.log(sumit.password); // 123

// property based

function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}

const chai = new user('ai@mml.com', '1234');
console.log(chai.email);

// object based

const uSer = {
  _email: 'h@hc.com',
  _password: '1234',

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

// factory functiton
const tea = Object.create(uSer);
console.log(tea.email);
