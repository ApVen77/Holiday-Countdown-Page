// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, 
// job title.
// outputs your fortune to the screen like so: "You will be a X in Y, 
// and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// function tellFortune(children, partner, place, career) {
//     var future= (`You will be a ${career} in ${place} and married to ${partner} with ${children} kids`)
//     console.log(future); 
// }

// tellFortune(9, "Drake", "LA", "Magician");
// tellFortune(0, "John", "CO", "Cashier");
// tellFortune(1, "Mr. Vick", "Dubai", "Housewife"); 




// // Write a function named calculateSupply that:
// // takes 2 arguments: age, amount per day.
// // calculates the amount consumed for rest of the life (based on a constant max age).
// // outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// // Call that function three times, passing in different values each time.
// // Bonus: Accept floating point values for amount per day, and round the result to a round number.

// function calculateSupply(age, amount) {
//     var maxAge= 100;
//     var total= (amount * 365) * (maxAge - age); 
//     var message= (`You will need ${total} to last you until the age of ${maxAge}`); 
//     console.log(message); 

// }

// calculateSupply(30, 2);
// calculateSupply(50, 1);
// calculateSupply(14, 3); 

// function dogCal(age) {
//     var dogAge= 7 * age; 
//     console.log (`Your dog will be ${dogAge} by next year`);
   
// }
// dogCal(5);
// dogCal(10);
// dogCal(12); 

//This gets the time//
// var currentTime= new Date(); 

// var time= document.getElementById("cTime"); 
// time.innerHTML= currentTime.toLocaleTimeString();  

// //This gets the date//

// var date= document.getElementById("cDate"); 
// date.innerHTML= currentTime.toLocaleDateString(); 

// //This gets the days of the week//

// var weekDays= new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");
// var dow= document.getElementById("dayOfWeek")
// dow.innerHTML= weekDays[currentTime.getDay()]; 

// Input
