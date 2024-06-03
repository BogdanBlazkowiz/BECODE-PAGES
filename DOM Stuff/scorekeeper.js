buttons = document.querySelectorAll("button");

function scoreKeeper(event) {
    button = event.currentTarget
    spans = document.querySelectorAll("span");
    player1 = spans[0];
    player2 = spans[1];
    console.log(player1);
    if (button.innerText == "+1 Player One") {
        if (parseInt(player1.innerText)+ parseInt(player2.innerText)<4) {
            player1.innerText = (parseInt(player1.innerText)+1).toString();
        }
        else if (parseInt(player1.innerText)+ parseInt(player2.innerText)==4) {
            player1.innerText = (parseInt(player1.innerText)+1).toString();
            if (parseInt(player1.innerText)>parseInt(player2.innerText)){
                player2.style.color = "red";
                player1.style.color = "green";
            }
            if (parseInt(player1.innerText)<parseInt(player2.innerText)){
                player1.style.color = "red";
                player2.style.color = "green";
            }
        }
    }
    if (button.innerText == "+1 Player Two") {
        if (parseInt(player1.innerText)+ parseInt(player2.innerText)<4) {
            player2.innerText = (parseInt(player2.innerText)+1).toString();
        }
        else if (parseInt(player1.innerText)+ parseInt(player2.innerText)==4) {
            player2.innerText = (parseInt(player2.innerText)+1).toString();
            if (parseInt(player1.innerText)>parseInt(player2.innerText)){
                player2.style.color = "red";
                player1.style.color = "green";
            }
            if (parseInt(player1.innerText)<parseInt(player2.innerText)){
                player1.style.color = "red";
                player2.style.color = "green";
            }
        }
    }
    if (button.innerText == "Reset") {
        player1.innerText = "0";
        player2.innerText = "0";
        player1.style.color = "black";
        player2.style.color = "black";
    }
}

buttons[0].addEventListener("click", scoreKeeper);

buttons[1].addEventListener("click", scoreKeeper);

buttons[2].addEventListener("click", scoreKeeper);