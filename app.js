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






