function rollDice() {
    var randomNumber1 = 1 + Math.floor(Math.random() * 6);
    var randomNumber2 = 1 + Math.floor(Math.random() * 6);
    console.log(randomNumber1, randomNumber2);
 
    randomNumberA = "images/dice" + randomNumber1 + ".png";
    randomNumberB = "images/dice" + randomNumber2 + ".png";

    document.getElementById("one").src = randomNumberA;
    document.getElementById("two").src = randomNumberB;

    if(randomNumber1 == randomNumber2) {
        document.getElementById("title").innerHTML = "DRAW";
    }

    else if(randomNumber1 <= randomNumber2){
        document.getElementById("title").innerHTML = "Player 2 Wins";
    }


    else {
        document.getElementById("title").innerHTML = "Player 1 Wins";
    }

}