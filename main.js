// Your code here.

const getFirstName = person => person.firstName;

const getLastName = person => person.lastName;

const getFullName = person => `${person.firstName} ${person.lastName}`;

const setFirstName = (person, newFirstName) => person.firstName = newFirstName;

/*
If you have more than one parameter, you have to put them in parenthesis in an arrow function
*/

const setAge = (person, newAge) => person.age = newAge;

const giveBirthday = person => {
  let ageExists = 'age' in person;

  if(!!ageExists) {
    person.age += 1;
  } else {
    person.age = 1;
  }
}

/*
8 Falsy Values: 'false', '0', '-0', '0n' for BigInt, '' Empty String, null, undefined, NaN
Double Bang (!!) checks if not one of JS' 8 falsy values
*/

const marry = function(spouse1, spouse2) {
  spouse1.married = true;
  spouse2.married = true;

  spouse1.spouseName = `${spouse2.firstName} ${spouse2.lastName}`;
  spouse2.spouseName = `${spouse1.firstName} ${spouse1.lastName}`;
}

const divorce = function(spouse1, spouse2) {
  spouse1.married = false;
  spouse2['married'] = false;

  delete spouse1.spouseName;
  delete spouse2['spouseName'];
}

/*
'delete' can only be used on objects
- Arrays are objects so 'delete' can be used on them.
not re-index the array and changes value to 'undefined'
In loops, delete is slow so it is better to set the value to 'undefined'
The only way to fully remote the properties of an object in JS is with 'delete'
If the property which you are trying to delete doesn't exist, nothing happens and returns 'true'
*/




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
