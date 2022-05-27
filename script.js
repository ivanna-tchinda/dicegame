const dice = document.getElementById('roll');
let pp1 = document.getElementById('pointsPlayer1');
let pp2 = document.getElementById('pointsPlayer2');

let score1 = 0;
let score2 = 0;






function diceGame(){
    //le dé change de face à chaque click sur roll
    let randomDice = Math.floor((Math.random()*6) + 1);
    var diceLocation = "D" + randomDice + ".png";
    var display = document.querySelectorAll("img")[0];
    display.setAttribute("src", diceLocation);

    //le joueur 1 joue

    if(randomDice == 1){
        score1 = 0;
        pp1.innerHTML = score1;
    }
    else
    {
        score1 +=randomDice;
        pp1.innerHTML = score1;
    }

    //le joueur 2 joue

    if(randomDice == 1){
        score2 = 0;
        pp1.innerHTML = score2;
    }
    else
    {
        score2 +=randomDice;
        pp1.innerHTML = score;2
    }

    
    

    

}





