var n_players = 0;
var current = 0;
var scores = [];
var GAME = 501;

function createPlayers(){
    var s = document.getElementById('n_jugadores').value;
    var g = document.getElementById('games').value;
    GAME = parseInt(g);
    n_players = s;
    for(i=0;i<n_players;i++){
        scores.push(0);
    }
    showPlayers();
    document.getElementById("start").style.visibility ="hidden";
    document.getElementById("current_player").innerText  = "Jugador 0. Puntos: 0. Necesitas "+g;
    document.getElementById("Jugada").style.visibility = "visible";

;}

function showPlayers(){
    ul = document.getElementById("players_list");
    for(i=0;i<n_players;i++){
        var li = document.createElement('li');
        li.setAttribute('id','player_'+i);
        ul.appendChild(li)
        li.innerText = li.innerText + "Jugador "+i+" : 0"
    }
}

function update_player(){
    console.log("Hola");
    document.getElementById("player_"+current).innerText = "Jugador "+current+" : "+ scores[current];
}

function send(){

    var s1 = parseInt(document.getElementById('s1').value);
    var s2 = parseInt(document.getElementById('s2').value);
    var s3 = parseInt(document.getElementById('s3').value);
    
    total = s1+s2+s3;
    console.log(total);

    if ((GAME - scores[current] - total) > 0){
        scores[current] = scores[current]+ total;
    } else if (GAME - scores[current] - total == 0){
        alert("Has ganado!!!!");
        document.getElementById('strikes').reset();
        end_game();
        return
    }else{
        alert("Te has pasado "+(GAME - scores[current] - total)) 
    }
    update_player();
    current = (current + 1)%n_players;

    document.getElementById("current_player").innerText  = "Jugador "+ current+
                                    ". Puntos: "+scores[current]+". Necesitas "+ (GAME-scores[current]);

    document.getElementById('strikes').reset();

    }

    function end_game(){
        scores = [];
        current = 0;
        document.getElementById("start").style.visibility ="visible";
        document.getElementById("Jugada").style.visibility ="hidden";
        let list = document.getElementById("players_list");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }