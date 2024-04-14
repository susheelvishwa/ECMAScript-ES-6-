const person = {
  name: "Bob",
};

person.name = "Charlie"; // This is fine
console.log(person.name); // Outputs: Charlie

const numbers = [1, 2, 3];
numbers.push(4); // This is fine
console.log(numbers); // Outputs: [1, 2, 3, 4]
