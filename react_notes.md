JavaScript: HOF:

A function , which calls the another function.

function test(name,age,callback){
console.log("My name: "+name+"); //My Name: sunitha
console.log("My age: ",age); //My age: 40
console.log(`My name: ${name} and My age: ${age}`)
const result = callback("karthik")
console.log("result")
}

function greet(name){
return "Hi "+name
}

test("sunitha",40,greet); // My name

Notes:

1. greet is a NORMAL function.
2. test function calls greet - another function.
3. So, test is a higher order function.

Live Example:
D:\my_work\ReactJs-Revision\javascript\hoc.js

React - HOC - Higher Order function/Component.
In React also we can create or make use of existing HOF.

1. MAP - reactJs\src\React.Memo\App_hof_map.jsx
2. FILTER -

React.Memo

React.memo is a Higher-Order Component (HOC) used to prevent unnecessary re-rendering of functional components.
In simple words:
React.memo remembers the previous component result and skips re-rendering when its props have not changed.
