function test(name, age, callback) {
  console.log("My name: " + name); //My name: sunitha
  console.log("My age: ", age); //My age: 40
  console.log(`My name: ${name} and My age: ${age}`);
  const result = callback("karthik");
  console.log("result", result);
}

function greet(name) {
  return "Hi " + name;
}

test("sunitha", 40, greet);

console.log("-------------End-------------------");
