var fibonnaciNums = require('./../even_fib_nums.js');
var chai = require('chai');
var should = chai.should();

describe("Sum of even numbers in the Fibonnacci sequence", function () {

  it("should return the sum of all even Fibonacci numbers when given 13", function () {
    var sum = fibonnaciNums.sumOfEvenFibonacciNumbers(13);
    sum.should.equal(10);
  });

  it("should return the sum of all even Fibonacci numbers when given 34", function () {
    var sum = fibonnaciNums.sumOfEvenFibonacciNumbers(34);
    sum.should.equal(44);
  });

  // when your tests pass, uncomment the next test and
  // change the expected value to the correct result

  // it("should return the sum of all even Fibonacci numbers when given 4,000,000", function () {
  //   var sum = fibonnaciNums.sumOfEvenFibonacciNumbers(4000000);
  //   sum.should.equal('X'); // CHANGE THE VALUE OF 'X' to the correct number
  // });
});

// if you finish early, write another function called highestFibonacciNumber() in even_fib_nums.js that takes a
// single number input and returns the highest Fibonnaci number less than the given input

//describe("Highest number in Fibonacci sequence", function() {
////uncomment the following test to test your highestFibonacciNumber() function
//  it("should return the highest Fibonacci number less than the given input", function() {
//    var highest = fibonnaciNums.highestFibonacciNumber(100);
//    highest.should.equal(89);
//  });
//});


//STRETCH GOALS: Define another way you could write a function for a fibonacci number and write passing tests