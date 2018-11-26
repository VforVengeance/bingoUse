var bingo = require ("teamexercise");
bingo.init();
console.log("test")

exports.createTable = function(){
    bingo.init();
    for(var i = 0; i<15; i++){
        bingo.extract();
    }
    return bingo.getExtracted();
}

exports.createPlayers = function(n){
    var players = [];
    for (var i = 0; i < n; i++){
        players.push(createTable());
    }
    return players;
}

exports.createMatch = function(players){
    bingo.init();
    while(true){
        var extractedNumber = bingo.extract();
        for(var i = 0; i<players.length; i++){
            var index = players[i].indexOf(extractedNumber);
            if(index >= 0){
                players[i].splice(index, 1);
                if(players[i].length === 0){
                    console.log(bingo.getExtracted().length)
                    return i;
                }
            }
        }
    }
}
/*
var player1 = createTable();
var player2 = createTable();
var player3 = createTable();

bingo.init();


var counter;
var multiplayer = function(player){
    counter = 0;
    do {
        var number = bingo.extract();
        console.log(player);
        console.log('Numero estratto: ' + number); 
        if(player.includes(number)) {
            var numberToRemove = player.indexOf(number);
            player.splice(numberToRemove, 1);
        }
        counter++;
    } while (player.length >= 1);
    return counter;    
}
var p1 = multiplayer(player1);
var p2 = multiplayer(player2);
var p3 = multiplayer(player3);

if((p1 < p2) && (p1 < p3)){
    console.log("il player1 ha vinto!!!");
}
else{
    if((p2 < p1) && (p2 < p3)){
        console.log("il player2 ha vinto!!!");
    }
    else{
        console.log("il player3 ha vinto!!!");
    }  
} 
*/