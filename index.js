
 let rand = Math.floor(Math.random() * 6 +1)

 if (rand ==1) {
  document.querySelector("#dice1").setAttribute("src", "./images/dice1.png")
 } else if (rand ==2){
  document.querySelector("#dice1").setAttribute("src", "./images/dice2.png")
 } else if (rand ==3){
  document.querySelector("#dice1").setAttribute("src", "./images/dice3.png")
 } else if (rand ==4){
  document.querySelector("#dice1").setAttribute("src", "./images/dice4.png")
 } else if (rand ==5){
  document.querySelector("#dice1").setAttribute("src", "./images/dice5.png")
 } else {
  document.querySelector("#dice1").setAttribute("src", "./images/dice6.png")
 }

 let rand2 = Math.floor(Math.random() * 6 +1)


 if (rand2 ==1) {
  document.querySelector("#dice2").setAttribute("src", "./images/dice1.png")
 } else if (rand2 ==2){
  document.querySelector("#dice2").setAttribute("src", "./images/dice2.png")
 } else if (rand2 ==3){
  document.querySelector("#dice2").setAttribute("src", "./images/dice3.png")
 } else if (rand2 ==4){
  document.querySelector("#dice2").setAttribute("src", "./images/dice4.png")
 } else if (rand2 ==5){
  document.querySelector("#dice2").setAttribute("src", "./images/dice5.png")
 } else {
  document.querySelector("#dice2").setAttribute("src", "./images/dice6.png")
 }
 
if (rand == rand2) {
document.querySelector(".title").innerHTML = "Draw Game!"
console.log("draw game")
} else if (rand < rand2) {
  document.querySelector(".title").innerHTML = 'Player 2 Wins! <img id="trophy" src="./images/winner.png">'
    console.log("player 2 wins")
} else {
  document.querySelector(".title").innerHTML = '<img id="trophy" src="./images/winner.png"> Player 1 Wins!'
}
 