var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

function imgGen(a, b){
    if(a === 1){
        document.getElementsByClassName(b)[0].setAttribute("src","./images/dice1.png");
    }else if(a === 2){
        document.getElementsByClassName(b)[0].setAttribute("src","./images/dice2.png");
    }else if(a === 3){
        document.getElementsByClassName(b)[0].setAttribute("src","./images/dice3.png");
    }else if(a === 4){
        document.getElementsByClassName(b)[0].setAttribute("src","./images/dice4.png");
    }else if(a === 5){
        document.getElementsByClassName(b)[0].setAttribute("src","./images/dice5.png");
    }else if(a === 6){
        document.getElementsByClassName(b)[0].setAttribute("src","./images/dice6.png");
    }
}

imgGen(randomnumber1, "img1");
imgGen(randomnumber2, "img2");

if(randomnumber1 > randomnumber2){
    document.getElementsByTagName("h1")[0].textContent = "Player 1 wins!";
}else if(randomnumber1 < randomnumber2){
    document.getElementsByTagName("h1")[0].textContent = "Player 2 wins!";
}else{
    document.getElementsByTagName("h1")[0].textContent = "Draw!";
}
