// This gets the time//
var currentTime= new Date(); 

var time= document.getElementById("cTime"); 
time.innerHTML= currentTime.toLocaleTimeString();  //gets local time in 05:00

//This gets the date//

var date= document.getElementById("cDate"); 
date.innerHTML= currentTime.toLocaleDateString(); //gets local dat in 05/06/2021

// //This gets the days of the week//

var weekDays= new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");
var daysOfTheWeek= document.getElementById("dayOfWeek")
daysOfTheWeek.innerHTML= weekDays[currentTime.getDay()]; //gets current date from the array. 
function countDown()
{   
// Sets The Timer End Date
    var today= new Date();
    var eventDate= new Date("December 25,2021 00:00:00");

// Gets Current Time 
    var currentTime= today.getTime();
    var eventTime= eventDate.getTime();

    var remTime = eventTime - currentTime; //count down 

// //Calculates Time
    var seconds= Math.floor(remTime/1000);
    var minutes= Math.floor(seconds/60);
    var hours= Math.floor(minutes/60);
    var days= Math.floor(hours/24);

// // Hours In A Day / Minutes In An Hour / Seconds In a Minute 
    hours = hours % 24;
    minutes%= 60;
    seconds%=60;
    // ? (if) :(else)
    hours=(hours<10) ? "0" + hours : hours;
    minutes=(minutes<10) ? "0" + minutes : minutes;
    seconds=(seconds<10) ? "0" + seconds : seconds;

//  //Connects To HTML IDs, Displays Time On Page
    document.getElementById("days").innerHTML =days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

    setTimeout(countDown,1000);

}

    countDown();


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
alert ("Today is " + day);









    // create an array of about 10 predictions
    var fortunes = [
        "You will be rich in 5 years!", 
        "You will be in an accident", 
        "You will get a raise in the next month!", 
        "You will get married next year!", 
        "You'll fall in love!",
        "You will get fired",
        "You will get a puppy!",
        "Careful, you're getting to comfortable..",
        "You will get cheated on",
        "You will visit your dream country!"
    ]; 

    // create a function called 'tellFortune' that will randomly select a prediction 
    // from the array 
    // **hint Math.random 
    // Math. method (expression) Math.ceil(Math.random) Pg 708
    function tellFortune() {
        var randomNum= Math.floor(Math.random() * fortunes.length);
        document.getElementById('btn').innerHTML = fortunes[randomNum];
};

tellFortune();

    



     //target the ID from the html and insert the 
            // predictions on the document
    
   







// // Want to find out how old you'll be? Calculate it!

// // Store your birth year in a variable.

// // Store a future year in a variable.

// // Calculate your 2 possible ages for that year based on the stored values.
// // For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.

// // Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

// var birthYear= 1995;
// var futureYear= 2038; 

// var age= futureYear - birthYear; 

// document.write (`I will either be ${age} or ${age-1} by ${futureYear}`); 
// // ('I will be either  ' + ' ' + age + 'or  ' + (age-1) + 'by  ' +  ' ' + futureYear); 
// // Store your current age into a variable.
// // Store a maximum age into a variable.
// // Store an estimated amount per day (as a number).
// // Calculate how many you would eat total for the rest of your life.
// // Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// var currentAge= 27; 
// var maxAge= 100; 
// var perDay= 2; 
// var totalNeeded= (perDay * 365) * (maxAge - currentAge); 
// console.log (`You will need ${totalNeeded} to last you until the ripe old age of ${maxAge}`)
// console.log ('You will be' + totalNeeded + ' ' + 'to last you until the ripe age of ' + maxAge)

// // ES6 Template/string literals concatinate
// // ES6 const let 

// // The Fortune Teller
// // Why pay a fortune teller when you can just program your fortune yourself?
// // Store the following into variables: number of children, partner's name, geographic location, job title.
// // Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// //returns a random number * lowest number you set 
// var numKid= Math.floor(Math.random() * 11);
// var partner= 'Drake'; 
// var place= 'LA'; 
// var job= 'Doctor'; 

// document.write(`You will be a ${job} and married to ${partner} with ${numKid} kids in ${place}`); 


// //-1- Write an expression that uses at least 3 different arithmetic operators.

// // // The expression should equal 42.

// // // Hint: +, -, *, /, and % are possible arithmetic operators

// // // Your Code:

    




// // //-2- Create a string with the name of your favorite food. The first letter of the string should be capitalized.

// // // Your Code:


// // //-3- Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.

// // // Your Code:


// // //4-4 Fix the right side expression so it evaluates to true.
// // // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// // // Your Code:





// // //-5- Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// // //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
// // //F = C x 1.8 + 32
// // //Log the fahrenheit variable to the console.

// // // Your Code:



// // //-6- Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// // // Blowing from the west
// // // Fallen leaves gather
// // // In the east.

// // // Each string should be printed on its own line.
// // // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// // // Your Code: 





// // //-7- Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

// // // red blue
// // // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

// // // Your Code:



// //  //-8- Create a variable called fullName and assign it your full name as a string.

// // // Your Code:





// //  //-9- Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). 
// // //Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

// // // Print the total to the JavaScript console.

// // // Hint: 15% in decimal form is written as 0.15_._

// // // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

// // // Your Code:



// // //-10- Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
// // Concatinate and Print out the result in the console

// // // Your Code:


// // //-11- Use variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. 
// // Finally, print your awesome message to the JavaScript console.

// // // Your Code:

// //  //-12- Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
// // //'small' variable lowercase and the 'big' variable capital.
// // //console.log out the results

// // // Your Code:


// var d = new Date();


// var localTime = d.toString(-5);
// console.log(localTime);


// var currentTime= new Date();
// console.log (currentTime); 
// // var str1 = "Hello ";
// //   var str2 = "world!";
// //   var str3 = " Have a nice day!";
// //   var res = str1.concat(str2, str3);
// //   console.log(res);
//   var christmas= new Date("December 25, 2021");
//   var daysLeft= (christmas - new Date) /(1000*60*60*24);

//   document.getElementById("days").textContent= Math.floor(days);
// //   document.getElementById("hrs").textContent= Math.floor(hours);
// //   document.getElementById("mins").textContent= Math.floor(minutes);
// //   document.getElementById("secs").textContent= Math.floor(secs);





// //this will get the time 

// //what element do you want to get?
// var time = document.getElementById("time");
// time.innerHTML= currentTime.toLocaleTimeString();
// // what do you want to do with it? 



// // this will get the date
// var date= document.getElementById("date");
// date.innerHTML= currentTime.toLocaleDateString();


// // this will get the day of the week 
// var daysOfTheWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"); 
// var dow= document.getElementById("week-day");
// dow.innerHTML= daysOfTheWeek[currentTime.getDay()]; 
