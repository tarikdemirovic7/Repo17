const _ = require("lodash");

var users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female",
  },
  {
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male",
  },
  {
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female",
  },
];

function getUsers() {
  var output = "";

  _.forEach(users, function (value) {
    output += `${value.firstName} ${value.lastName} is ${value.age}, ${value.gender}\n`;
  });
  console.log(output);
  return output;
}

function findUser(lastName, gender) {
  try {
    var user = _.find(users, { lastName, gender });
    var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
    console.log(iFindUser);
    return iFindUser;
  } catch (error) {
    console.log(`Cannot read property 'firstName' of undefined`);
    return `Cannot read property 'firstName' of undefined`;
  }
}

getUsers();
findUser("Doe", "male");

module.exports = findUser;