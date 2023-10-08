function myFunction() {
  console.log("hello from module 1");
}

var myString = "Hello String";
module.exports.myString = myString;
module.exports.myFunction = myFunction;
