var inputNameElement = document.getElementById("inputName");
var executeButtonElement = document.getElementById("executeButton");
var outputElement = document.getElementById("outputText");


var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana",
   "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
     "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
      "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
       "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin",
        "Wyoming"];

var fonts = ["Acme, sans-serif", "Gloria Hallelujah, cursive", "Saira, sans-serif"];

function generateDest(userNameInput) {
  var randomIndex = Math.floor(Math.random() * states.length);
  outputElement.innerText = "Hey " + userNameInput + "! Prepare yourself for an exciting journey to " + states[randomIndex] + "!";
}

executeButtonElement.addEventListener("click", function(){
  var userNameInput = inputNameElement.value;
  generateDest(userNameInput);
  restyle();
});


function restyle() {
  // Style Background Color, avoid dark colors
  var randBGR = Math.random() * 127 + 128;
  var randBGG = Math.random() * 127 + 128;
  var randBGB = Math.random() * 127 + 128;
  var randBGA = Math.random();
  var randBGColor = "rgb("+randBGR+","+randBGG+","+randBGB +","+randBGA+")";
  outputElement.style.backgroundColor = randBGColor;

  // Style Font Color, avoid light colors
  var randFTR = Math.random() * 128;
  var randFTG = Math.random() * 128;
  var randFTB = Math.random() * 128;
  var randFTColor = "rgb("+randFTR+","+randFTG+","+randFTB+")";
  outputElement.style.color = randFTColor;

  // Style transform
  var randDegree = -10 + Math.random() * 20;
  outputElement.style.transform = "rotate(" + randDegree + "deg)";

  // Style Font
  var randFontIdx = Math.floor(Math.random() * fonts.length);
  outputElement.style.fontFamily = fonts[randFontIdx];
}
