//
// var array1 = ['THIS', 'IS', 'SPARTA']
// var array2 = [ 'This is', 'madness']
// // debugger;
//
// for (var i = 0; i < array2.length; i++) {
//   console.log(array2[i]);
// }
//
// for (var i = 0; i < array1.length; i++) {
//   console.log("Leonidus: " + array1[i]);
// }
//
// var j = 0;
// while (j < 5) {
//   console.log('This loop has run ' + j + 'times');
//   j++
// }
// var number;
//
// do {
//   number = Math.random();
//   console.log(number);
// }  while (number < 0.5)
//
// var myObject = new Object();
//
// myObject.a = '1';
// myObject.b = '2';
// myObject.c = '3';
//
// for ( var key in myObject) {
//   console.log(key);
//   // console.log(myObject[key]);
// }

// This is a classic test given to computer programmers to screen out those with insufficient basic coding skills.
//
// ##### For each number in the range of 1 to 100, write code that will do the following:
//
// * If the number is divisible by 3, print "Fizz" to the console.
// * If the number is divisible by 5, print "Buzz" to the console.
// * If the number is divisible by 3 AND 5, print "FizzBuzz" to the console.
// * Otherwise, print out the number itself to the console.
//
// Think about how you're going to get all the numbers out to the console first, and then work on implementing each of the other three rules.

for (var i = 1; i < 101; i++) {
  console.log(i);
  while (Number.isInteger(i/3) === true) {
    console.log('Fizz');
    break;
  }
  while (Number.isInteger(i/5) === true) {
    console.log('Buzz');
    break;
  }
  while (Number.isInteger(i/5) === true && Number.isInteger(i/3) === true ) {
    console.log('FizzBuzz');
    break;
  }
}
