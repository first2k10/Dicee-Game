var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generating random number

var randomDiceImage = "dice" + randomNumber1 + ".png"; // build the names used to store d pics in d folder. dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // building images/dice1.png to dice6.png

var image1 = document.querySelectorAll("img")[0]; // targeting d img element in html and only d 1st pics.

image1.setAttribute("src", randomImageSource); // changing d src attribute in html.

// Building the second image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player 1 wins
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player 1 wins!";
} 
else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
	document.querySelector("h1").innerHTML = "Draw";
}