var p1 = prompt("Enter name of Player 1:")
var p2 = prompt("Enter name of Player 2:")
document.querySelector(".p1").innerHTML=p1;
document.querySelector(".p2").innerHTML=p2;



const button = document.querySelector('button');

button.addEventListener('click', function() {

    var random = Math.random();
    random=(random*6)+1;
    random=Math.floor(random);
    var random2 = Math.random();
    random2=(random2*6)+1;
    random2=Math.floor(random2);
    document.querySelector(".img1").setAttribute("src","dice"+random+".png");
    document.querySelector(".img2").setAttribute("src","dice"+random2+".png");
    if(random>random2){
        document.querySelector("h1").innerHTML=p1+" Wins";

    }
    else if(random<random2){
        document.querySelector("h1").innerHTML=p2+" Wins";

    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }

});