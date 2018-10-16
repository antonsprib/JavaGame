

window.onload = function () {
    var wrap = document.getElementById('overlay_PlayersInfo');



    function openPlayerInfo(){
        wrap.style.display = 'block';
        changeOpacityIn(1);
    }

    function changeOpacityIn(x){
        var op = wrap.style.opacity ? parseFloat(wrap.style.opacity) : 0;

        if(op < x){
            op += 0.05;
            wrap.style.opacity = op;
            setTimeout(changeOpacityIn, 50, x)
        }
    }

    function changeOpacityOut(x){
        var op = wrap.style.opacity ? parseFloat(wrap.style.opacity) : 0;
    console.log(op);
        if(op > x){
            op -= 0.05;
            wrap.style.opacity = op;
            setTimeout(changeOpacityOut, 50, x)
        }
        if(wrap.style.opacity == 0){
            wrap.style.display = 'none';
        }
    }

    setTimeout(openPlayerInfo, 500);

    var submit = document.getElementById("infoSubmit");
    submit.onclick = function () {
        changeOpacityOut(0);
        move.innerHTML = "Вашь ход " + document.getElementById('player1Name').value;
    }

    var cancel = document.getElementById("cancel");
    cancel.onclick = function () {
        open(location, '_self').close();
    }

}

var player1 = document.getElementById('player1Name').value;
var player2 = document.getElementById('player2Name').value;
var move = document.getElementById('move');
var timesClicked = 0;
var movesArray = []

var move = document.getElementById('move');

function addValue(clicked_id) {
    var id = clicked_id;
    var elementHtmlCode = document.getElementById(id).innerHTML;
    console.log(elementHtmlCode.length);
    console.log(player1);
    if (elementHtmlCode.length == 1) {
        alert("Выбранная ячейка уже занята. Выберите другую")
    }  else if (timesClicked % 2) {
        document.getElementById(id).innerHTML = "O";
        timesClicked++;
        movesArray[id] = "O";
        move.innerHTML = "Вашь ход " + document.getElementById('player1Name').value;
        console.log(timesClicked);
    } else {
        document.getElementById(id).innerHTML = "X";
        timesClicked++;
        movesArray[id] = "X";
        move.innerHTML = "Вашь ход " + document.getElementById('player2Name').value;
    }

    console.log("nazali " + timesClicked);



    if(timesClicked >=9){
        move.innerHTML = "Некто не победил!!!"

    }
    console.log(movesArray);

    var win = checkWinner(movesArray[0], movesArray[1] ,movesArray[2]) || checkWinner(movesArray[3],movesArray[4],movesArray[5]) || checkWinner(movesArray[6],movesArray[7],movesArray[8]) || checkWinner(movesArray[0],movesArray[3],movesArray[6]) || checkWinner(movesArray[1],movesArray[4],movesArray[7]) || checkWinner(movesArray[2],movesArray[5],movesArray[8]) || checkWinner(movesArray[0],movesArray[4],movesArray[8])|| checkWinner(movesArray[2],movesArray[4],movesArray[6]);
}
function checkWinner(a,b,c){
    if(a == "X" && b == "X" && c =="X"){
        move.innerHTML = "Выйграл " + document.getElementById('player1Name').value + " !!!";

    }  else if (a == "O" && b == "O" && c =="O"){
        move.innerHTML = "Выйграл " + document.getElementById('player2Name').value + " !!!";
    }
}





