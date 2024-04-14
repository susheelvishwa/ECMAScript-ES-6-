let age = 25;

if (true) {
  let age = 30;
  console.log(age); // Outputs: 30 (because this 'age' is inside the block)
}

console.log(age); // Outputs: 25 (because this 'age' is outside the block)
