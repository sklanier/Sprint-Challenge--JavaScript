// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(param1, param2, add) {
  console.log(add(param1, param2));

}
add = function() {
  return 2 + 2;
}

multiply = function() {
  return 10 * 16;
}

greeting = function() {
  return "Hello, " + "Mary" + " " + "Poppins" + ", nice to meet you!";
}

/* const add = (param1, param2) => {
  return param1 + param2;
}
const multiply = (param1, param2) => {
  return param1 * param2;
}
const greeting = (param1, param2) => {
  return "Hello, " + param1 + " " + param2 + ", nice to meet you!"
} */

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// Because 'nestedFunction' is literally nested within the 'myFunction' object, it is within the same scope. It therefore can access all properties within 'myFunction', such as the constant variable 'internal'.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();