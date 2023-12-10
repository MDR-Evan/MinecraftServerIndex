var buttons = document.querySelectorAll('input[type="button"]');
var Quotes = [
  "Simon is great!",
  "See all my pens!", 
  "Work in progress...", 
  "Minecraft!",
  "Hello World!"
];

function displayQuote() {
  var num = Math.floor(Math.random() * 5);
  document.getElementById("quote").innerHTML = Quotes[num];
}

function btnMinecraft() {
  var sound = document.getElementById("btnAudioClick");
  sound.play();
}


