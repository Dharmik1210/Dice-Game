var randomNumber1=Math.floor(Math.random()*6) +1;
var randomaDice="dice"+ randomNumber1 + ".png";
var randomImgsource= "images/" + randomaDice;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImgsource);

var randomNumber2=Math.floor(Math.random()*6) +1;
var randomImgsource2="images/dice" +randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgsource2);

if (randomNumber1>randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML="Player 1 wins!";
} else if(randomNumber1<randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML="Player 2 wins!";
    
}
else{
    document.querySelectorAll("h1")[0].innerHTML="Draw!!";
}