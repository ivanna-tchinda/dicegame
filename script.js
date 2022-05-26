let dicemove = document.getElementsByClassName('dicemove').innerHTML;
let roll = document.getElementById('roll');

function changeDice(){
    var num = num = Math.round(Math.random() * 5) + 1;
    alert(num);
    switch(num){
        case 6:
            dicemove.innerHTML += '<i class="fa fa-duotone fa-dice-six fa-10x"></i>';
            break;
        case 5:
            dicemove.innerHTML += '<i class="fa fa-duotone fa-dice-five fa-10x"></i>';
            break;
        case 4:
            dicemove.innerHTML += '<i class="fa fa-duotone fa-dice-four fa-10x"></i>';
            break;
        case 3:
            dicemove.innerHTML += '<i class="fa fa-duotone fa-dice-three fa-10x"></i>';
            break;
        case 2:
            dicemove.innerHTML += '<i class="fa fa-duotone fa-dice-two fa-10x"></i>';
            break;
        case 1:
            dicemove.innerHTML += '<i class="fa fa-duotone fa-dice-one fa-10x"></i>';
            break;
}};

roll.addEventListener('click', changeDice);

