interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

function createUser(user: User) {
  return {
    id: Math.floor(Math.random() * 1000),
    name: user.name,
    age: user.age,
    email: user.email,
  };
}

function getUserSummary(user: User) {
  return `${user.name} - ${user.age} anos - ${user.email}`;
}

function isAdult(user: User) {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

module.exports = { createUser, getUserSummary, isAdult };
