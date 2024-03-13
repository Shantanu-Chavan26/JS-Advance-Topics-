//variables week 1
// Js is a loosely typed language

//  Declare a variable by 'var'
//  eg: 
 var x="";
 var a = "ECMA Script6"; 
 var b= "ECMA Script7";

 var MyNum =5;
 var MyOtherNum=6;

 var sum = MyNum + MyOtherNum;  

//   The "+" sign add numbers and strings as well DOUBLE DUTY
  
  console.log(sum);
  typeof(MyNum); //Displays the type of the MyNum.

  //ARRAY in Javascript

  var colors1 = ["Red" , "Yellow" , "Blue"];
  console.log(colors1[1]);

  var animals = ["Cat" , "Chicken" , "Dog"];
  animals.push("Llama");
  animals.slice(1);
  animals.sort();

  animals[animals.length-1]; //gets the final element in the array no matter how large the array is.

  console.log(animals[2]);

  //Operators (Week 2)

  var happy = true;
  var sad = false;
  var green=""; //undefined function 

  if(happy)
  {
    console.log("Happy");
  }
  else 
  {
    console.log("False");
  }
  

  //javascript is loosely coupled and gives type coercion due to which we have 5 and "five" considered true

  var num=5;
  var Notnum="five";

  if(num === Notsum) //=== is a better practice
  {
    console.log("No type coercion");
  }
  else 
  {
    console.log("Type corecion");
  }
  
  //LOOPS 

  //*For*
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }

  //*For in*
  for (variable in array) {
    code
  }

  //*While*
  while (i < 10) {
    text += "The number is " + i;
    i++;
  }

  //Functions in JS 

  function Alteration(message){  //Parameter functions

    var upperline= message.toUpperCase();
    console.log(upperline);
  }

  Alteration("here is it"); 

  function checkSum()
  {
    var userNum= prompt("Ënter a whole number");

    if(userNum>10)
    {
      prompt("Whole number big");
    }
    else 
    {
      prompt("Small whole number");
    }

  }

  checkSum();
 
  //Generating Random floor values.
  var foods = ["A" , "B" , "C"];
  function randomInt(min , max)
  {
    var num= max - min+1;
    console.log(num);
    var randomnum = Math.random();
    var randomVal = Math.floor(randomVal); //rounding of random decimal number.

    var finalnum = min + randomVal; // desired number from the decicde range.
    return finalnum;
}
console.log(foods[randomInt(0,2)]);
  
//Anonymous Functions

var grettings = function(){
  console.log("Hello");
}
grettings();

 
   
  
  



 

