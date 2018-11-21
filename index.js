var bingo = require ("teamexercise");
bingo.init();

var createTable = function(){
    var array = [];
    bingo.init();
    for(var i = 0; i<15; i++){
        array[i] = bingo.extract();
    }
    return array;
}

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
