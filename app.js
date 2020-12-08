// function showMessage(firstName, lastName) {
//   // Code goes Here
//   var say= "Hello";
//   alert(say + " "+ firstName +" " + lastName);
// }

// showMessage("April", "Long"); 
// showMessage("Marvin", "Lara");
// showMessage("Sheily", "Perez");













// function times(num1, num2) {
//   // Code goes Here
//     return num1 * num2;
// }; 

// var result= times(10, 10);
// console.log (result); 

// //create a function called `findAverage`
// function findAverage(x, y) {
// //code goes here
// return x + y; 
// }

// var results= findAverage(10, 5);
// alert(results); 

//give it two parameters `x and y`

//give it a return value that adds the two parameters.

// create a variable that will run the result


// alert the result 

 

















// function tellFortune(jobTitle, geoLocation, partner, numKids) {
//     var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
//    partner + ' ' + ' with ' + numKids + ' kids.';
//     var place= document.getElementById("btn");
//     place.innerHTML= tellFortune();
// }

// tellFortune('bball player', 'spain', 'Shaq', 3);
// tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
// tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

// function square(x) {
//     return x * x;
//   }
  
//   function subtractFour(x) {
//     return square(x) - 4;
//   }
  
//   console.log(subtractFour(5));
// function add(num1,num2) {
   
//     return num1 + num2;
// };

// var result1= add (7, 10);
// var result2=add (15, 15);
// var result3=add(100,156);
// console.log(add(1,2));

// var no= false; 

// if (yes) {
//     console.log ("hello")
// } if(no) {
//     console.log ("goodbye") }; 

// var d = new Date();


// var localTime = d.toString(-5);
// console.log(localTime);


var currentTime= new Date();
// console.log (currentTime); 
// var str1 = "Hello ";
//   var str2 = "world!";
//   var str3 = " Have a nice day!";
//   var res = str1.concat(str2, str3);
//   console.log(res);
//   var christmas= new Date("December 25, 2020");
//   var daysLeft= (christmas - new Date) /(1000*60*60*24);

//   document.getElementById("days").textContent= Math.floor(days);
//   document.getElementById("hrs").textContent= Math.floor(hours);
//   document.getElementById("mins").textContent= Math.floor(minutes);
//   document.getElementById("secs").textContent= Math.floor(secs);

 



//this will get the time 

//what element do you want to get?
var time = document.getElementById("time");
time.innerHTML= currentTime.toLocaleTimeString();
// what do you want to do with it? 



// this will get the date
var date= document.getElementById("date");
date.innerHTML= currentTime.toLocaleDateString();


// this will get the day of the week 
var daysOfTheWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"); 
var dow= document.getElementById("week-day");
dow.innerHTML= daysOfTheWeek[currentTime.getDay()]; 







// Write an expression that uses at least 3 different arithmetic operators.

// // The expression should equal 42.

// // Hint: +, -, *, /, and % are possible arithmetic operators

// // Your Code:
// var x = 40;
// var y = 2;
// var z = x + y;
// console.log(x + y);

// var number = 7 * 6;
// console.log(number);

// console.log(40 + 10 - 10 + 2);



// // Create a string with the name of your favorite food. The first letter of the string should be capitalized.

// // Your Code:

// var food = "Seafood";
// console.log(food);
// console.log("Pasta!" + " " + food);

// // Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.

// // Your Code:

// var egFamily = ["Julia", "James", "Kevin"];
// console.log(egFamily);

// var egFamily2 = new Array('Julia', 'James', 'Mario');
// console.log(egFamily2);

// // var egFamily3{
// // "Julia"=[0], "James"=[1], "April"=[2];
// // }
// // console.log(egFamily3); 

// // Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// // Your Code:

// console.log("ALL Strings are CrEaTeD equal" != "All STRINGS are CrEaTED Equal");

// var boolean = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal"
// console.log(boolean);

// let answer = "ALL Strings are CrEaTeD equal" === "ALL Strings are CrEaTeD equal";
// console.log(answer);



// // Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
// //F = C x 1.8 + 32
// //Log the fahrenheit variable to the console.

// // Your Code:

// var celsius = 12;
// var farenheit = celsius * 1.8 + 32;

// console.log(farenheit);

// let c = 12;
// let F = c * 1.8 + 32;
// console.log(F);

// // Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// // Blowing from the west
// // Fallen leaves gather
// // In the east.

// // Each string should be printed on its own line.
// // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// // Your Code: 
// // var haiku= "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east"; 
// // var place= document.getElementById("testing");
// // place.innerHTML= haiku.toUpperCase(); 
// // console.log (haiku); 

// // var haiku = "Blowing from the west\n" + "Fallen leaves gather\n" + "In the east.";
// // console.log(haiku);

// // const haiku = 'Blowing from the west\n'+ 'Fallen leaves gather\n' + 'In the east';
// // console.log(haiku);


// // Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

// // red blue
// // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

// // Your Code:
// var thingOne= "red";
// var thingTwo= "blue";
// console.log(thingOne + " " + thingTwo);


//  // Create a variable called fullName and assign it your full name as a string.

// // Your Code:

// var fullName= "Destinee";
// var place2= document.getElementById("testing");

// // console.log(fullName.big());



//  // Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

// // Print the total to the JavaScript console.

// // Hint: 15% in decimal form is written as 0.15_._

// // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

// // Your Code:


//  // "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
// // "Hi, my name is James. I love baseball. In my spare time, I like to read."
// // Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).

// // Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.

// // Your Code:

//  //Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
// //'small' variable lowercase and the 'big' variable capital.
// //console.log out the results

// var big= "I am as big as an Elephant";
// var small= "I am as small as a mouse";

// console.log(big.toUpperCase() + " "+ small.toLowerCase()); 
  
