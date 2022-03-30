
 let randomNumber1= Math.floor(Math.random() * 6 +1)

 if (randomNumber1==1) {
  document.querySelector("#dice1").setAttribute("src", "./images/dice1.png")
 } else if (randomNumber1==2){
  document.querySelector("#dice1").setAttribute("src", "./images/dice2.png")
 } else if (randomNumber1==3){
  document.querySelector("#dice1").setAttribute("src", "./images/dice3.png")
 } else if (randomNumber1==4){
  document.querySelector("#dice1").setAttribute("src", "./images/dice4.png")
 } else if (randomNumber1==5){
  document.querySelector("#dice1").setAttribute("src", "./images/dice5.png")
 } else {
  document.querySelector("#dice1").setAttribute("src", "./images/dice6.png")
 }

 let randomNumber2 = Math.floor(Math.random() * 6 +1)


 if (randomNumber2 ==1) {
  document.querySelector("#dice2").setAttribute("src", "./images/dice1.png")
 } else if (randomNumber2 ==2){
  document.querySelector("#dice2").setAttribute("src", "./images/dice2.png")
 } else if (randomNumber2 ==3){
  document.querySelector("#dice2").setAttribute("src", "./images/dice3.png")
 } else if (randomNumber2 ==4){
  document.querySelector("#dice2").setAttribute("src", "./images/dice4.png")
 } else if (randomNumber2 ==5){
  document.querySelector("#dice2").setAttribute("src", "./images/dice5.png")
 } else {
  document.querySelector("#dice2").setAttribute("src", "./images/dice6.png")
 }
 
if (randomNumber1== randomNumber2) {
document.querySelector(".title").innerHTML = "Draw Game! 😕"
console.log("draw game")
} else if (randomNumber1< randomNumber2) {
  document.querySelector(".title").innerHTML = 'Player 2 Wins! 🏆'
    console.log("player 2 wins")
} else {
  document.querySelector(".title").innerHTML = '🏆 Player 1 Wins!'
}
 