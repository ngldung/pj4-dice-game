// random dice 1
var randomNumber1 = Math.floor(Math.random(0,1) * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

// random dice 2
var randomNumber2 = Math.floor(Math.random(0,1) * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
