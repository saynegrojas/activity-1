var numVar = [1,8,9,4,6,16,2,3];
function highestNum(numVar){
    var high = 0;
    for(var i = 0; i < numVar.length; i++){

        if(high < numVar[i]){
            high = numVar[i];
        }
    }
    return high;
}
console.log("High number: " + highestNum(numVar));
