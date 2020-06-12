////Template Literals and Default Parameters Value
//Declare a new function named favMovie that takes in one parameter (Note: Use template literals)
let myName = (`Stacey`);
let movie = (`The Room`);

// Add another parameter to your function with default value of “The Room”
//Add another parameter to your function with a default value of “world”
//Update the string so that you include your name in the message
let favMovie = ( name = 'world', movie = 'The Room') => console.log(`my name is ${name} and my favorite movie is ${movie}`)
favMovie('Stacey', 'Valerian'); 
favMovie()

////Arrow Functions
//Change the favMovie function to an ES6 Arrow Function with the shorthand "concise body" syntax for this arrow function so that the console.log statement is on the same line as the arrow
// update the parameter of the function favMovie to have a default value of “The Room”.

//Create a new arrow function called getFirstName
let p1 = {
    firstName: 'Stacey',
    lastName: 'Tannehill',
};
let getFirstName = person => `${person.firstName}`;
let result = getFirstName(p1);
console.log(result);
//Create a second arrow function called getFirstNameConcise using the concise body syntax
        let getFirstNameConcise = (a,b) => ({
            sum: a + b,
        });
        let result = getFirstNameConcise(Stacey, Tannehill);
        console.log(result);


//Create a new function that will take in two parameters and return an object literal. It should have two properties, the exponent result (x^y) and the product of the two numbers.
let newFunc = (x, y) => ({
    squared: Math.pow(x, y),
    product: x * y,
})


////Spread Syntax
//Write a function that takes 3 parameters
function bird (name, location, favFood){
    console.log(name, location, favFood);
}
//array with 3 values that match
let arr = ["Big Bird", "Sesame Street", "Birdseed"];
// Using a spread operator, insert the values of the array into the function
bird(...arr);

//Create a variable and set the value to your name
let toots = 'Stac';

//function that takes a parameter, name the parameter whatever, spread it into an array
let betty = 'white' 
    let spread = [...betty];
        console.log(spread);