const dice = document.getElementById('roll');
let pp1 = document.getElementById('pointsPlayer1');
let pp2 = document.getElementById('pointsPlayer2');
let affiche = document.getElementsByClassName('text')[0];
let gloPoints1 = document.getElementById('globalPlayer1');
let gloPoints2 = document.getElementById('globalPlayer2');

let global1 = 0;
let global2 = 0;

let score1 = 0;
let score2 = 0;

let tour = 1;






function diceGame(){
    //le dé change de face à chaque click sur roll
    let randomDice = Math.floor((Math.random()*6) + 1);
    var diceLocation = "D" + randomDice + ".png";
    var display = document.querySelectorAll("img")[0];
    display.setAttribute("src", diceLocation);


    //s'assurer que le score global est inferieur à 100
    if(global1 < 100 && global2 < 100)
    {

        //le joueur 1 joue
        if (tour == 1){


        //Premier cas: le joueur 1 appuie sur roll et tombe sur 1
            if(randomDice == 1){
                tour--;
                score1 = 0;
                pp1.innerHTML = score1;
                affiche.innerHTML = "Tu as perdu ton tour! C'est au tour du joueur 2";
            }
        //Deuxième cas cas: le joueur 1 appuie sur roll et ne tombe pas sur 1
            else
            {
                score1 +=randomDice;
                pp1.innerHTML = score1;
                affiche.innerHTML = " ";
            }
            global1 += score1;
            gloPoints1.innerHTML = global1;


        }   
    

        else{

        //le joueur 2 joue
            if(randomDice == 1){
                tour++;
                score2 = 0;
                pp2.innerHTML = score2;
                affiche.innerHTML = "Tu as perdu ton tour! C'est au tour du joueur 1";
            }
              
            else
            {
                score2 +=randomDice;
                pp2.innerHTML = score2;
                affiche.innerHTML = " ";
            }
            global2 += score2;
            gloPoints2.innerHTML = global2;
        }

    }
    else if(global1 >= 100){
        affiche.innerHTML = "Bravo, le joueur 1 a " + global1 + " points!";
        global1 = 0;
        global2 = 0;
        score1 = 0;
        score2 = 0;
        tour = 1;
        
    }
    else{
        affiche.innerHTML = "Bravo, le joueur 2 a " + global2 + " points!";
        global1 = 0;
        global2 = 0;
        score1 = 0;
        score2 = 0;
        tour = 1;
    }
}

function toGlobal(){
    if(tour == 1){
        global1 = global1;
        gloPoints1.innerHTML = global1;
        score1 = 0;
        pp1.innerHTML = score2;
        tour--;
        affiche.innerHTML = "Le joueur 1 garde son score, c'est au tour du joueur 2";
    }
    else{
        global2 = global2;
        gloPoints2.innerHTML = global2;
        score2 = 0;
        pp2.innerHTML = score2;
        tour++;
        affiche.innerHTML = "Le joueur 2 garde son score, c'est au tour du joueur 1";
    }
}

function newGame(){
    tour = 1;
    affiche.innerHTML = "Nouvelle partie! C'est au joueur 1 de commencer.";
    score1 = 0;
    pp1.innerHTML = score1;
    score2 = 0;
    pp2.innerHTML = score2;
    global1 = 0;
    gloPoints1.innerHTML = global1;
    global2 = 0;
    gloPoints2.innerHTML = global2;
}








