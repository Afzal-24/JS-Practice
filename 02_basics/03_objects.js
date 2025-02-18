// Singleton
// Object.create() Create object through constructor method and is singleton object


// object literals

const sym = Symbol("my symbol");

const jsUser = {
    name: "Afzal",
    "full name": "Afzal Kapadwala", //can't access this using dot notation, use square brackets
    [sym]: "my symbol 1", //symbols should be declared in square brackets only so that it is not confused with string
    age: 25,
    location: "Bangalore",
    email: "afzal@gmail.com",
    isLoggedIn: false,
    courses: ["JS", "React", "Node", "MongoDB"]
    
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["full name"]);

console.log(typeof jsUser[sym]); //accessing symbol using square brackets only

jsUser.email = "afzal@google.com" //updating email using dot notation in object
// Object.freeze(jsUser); //freeze object, no changes can be made to object
jsUser.email = "afzal@yahoo.com" //no changes can be made to object
console.log(jsUser.email);

jsUser.greeting = function(){
   console.log("Hello JS User"); 
}
jsUser.greetingTwo = function(){
   console.log(`Hello JS User ,${this.email}`); 
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

