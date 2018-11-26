var array = [];
var numbersOfBingo = [];

exports.init = function(){
    numbersOfBingo = [];
    array = [];
    for(var i = 0; i<90; i++){
        numbersOfBingo[i] = i+1;
    }
}
init();


exports.extract = function(){
    if(bag.length === 0){
        return null;
    }
    index = parseInt(Math.random() * numbersOfBingo.length);
    var result = numbersOfBingo.splice(index, 1);
    n = result[0];
    array.push(n);
    return n;
}

exports.getExtracted = function(){
    return array;
}

exports.getBag = function(){
    return numbersOfBingo;
}