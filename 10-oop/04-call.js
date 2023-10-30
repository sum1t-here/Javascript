function SetUsername(username) {
  // complex db calls
  this.username = username;
}

function createUser(username, email, password) {
  // add .call to access and this in parameter
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser('chai', 'chai@fb.com', '123');
console.log(chai);
// username cannot be accesed as it is not called
// createUser { email: 'chai@fb.com', password: '123' }
