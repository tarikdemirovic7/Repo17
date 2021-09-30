const { get } = require("lodash");
const _ = require("lodash");

var users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female",
  },
  {
    id: 3,
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male",
  },
  {
    id: 4,
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female",
  },
];

function getUsers() {
  var output = "";

  _.forEach(users, function (value) {
    output += `${value.id} - ${value.firstName} ${value.lastName} is ${value.age}, ${value.gender}\n`;
  });
  console.log(output);
  return output;
}

function findUserById(id) {
  try {
    var user = _.find(users, { id });
    var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
    console.log(iFindUser);
    return iFindUser;
  } catch (error) {
    console.log(`Cannot read property 'id'`);
    return `Cannot read property 'id'`;
  }
}

getUsers();
findUserById(4);

module.exports = findUserById;
