const dice = document.getElementById('roll');
let score1 = 0;




function diceGame(){
    //le dé change de face à chaque click sur roll
    var randomDice = Math.floor((Math.random()*6) + 1);
    var diceLocation = "D" + randomDice + ".png";
    var display = document.querySelectorAll("img")[0];
    display.setAttribute("src", diceLocation);

    //on ajoute les points aux deux joueurs
    score1 =+ randomDice;
    document.getElementById('pointsPlayer1').innerHTML =+ score1;
    return score1;
    
    
}



