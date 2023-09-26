console.log("Hello GM");

// Now lets create a simple JS Class

// 1. Function Definition
function myFunction() {
  // camelCase
  console.log("Hello from myFunction");
}

// 2. Function Calling
myFunction();

class MyClass {
  // Pascal Case
  // 1. Property

  // 2. Constructor

  // 3. Method
  myfunc() {
    console.log("Hello from my function");
  }

  log() {
    console.log("Hello from log function");
  }
}

// You have to create object/instance of the class

// let object = new ClassName()

const std = new MyClass();

std.myfunc();

std.log();

let po = new Promise((resolve, reject) => {
  // Producing Code
  setTimeout(() => {
    reject("ERROR"); // 'OK actual argument
  }, 3000);
});

// Consuming Code

// Promise Object Chain
po.then((data) => {
  console.log("then block", data);
})
  .then()
  .catch((e) => {
    console.log("catch block", e);
  })
  .finally((all) => {
    console.log("all", all);
  });

async function sayHello() {
  let po = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello Srikanth!");
    }, 5000);
  });

  let result = await po;

  console.log(result);
}

sayHello();
