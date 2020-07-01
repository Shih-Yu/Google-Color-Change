// Declaring Id Elements
var letterG = document.getElementById("G");
var letterOOne = document.getElementById("o1");
var letterOTwo = document.getElementById("o2");
var letterGTwo = document.getElementById("g");
var letterL = document.getElementById("l");
var letterE = document.getElementById("e");


// Listen for Mousemove Event
document.addEventListener("mousemove", runEvent);

// Function using x and y offset coordinates as rgb color paramenters
function runEvent(e) {
  console.log(e.type);

letterG.style.color = "rgb("+e.offsetX+", "+e.offsetY+", 60)";
letterOOne.style.color = "rgb("+e.offsetX+", "+e.offsetY+", 150)";
letterOTwo.style.color = "rgb("+e.offsetX+", "+e.offsetY+", 0)";
letterGTwo.style.color = "rgb("+e.offsetX+", "+e.offsetY+", 200)";
letterL.style.color = "rgb("+e.offsetX+", "+e.offsetY+", 250)";
letterE.style.color = "rgb("+e.offsetX+", "+e.offsetY+", 75)";
}