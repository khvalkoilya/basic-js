module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj={};
    obj.turns=alg(disksNumber);
    obj.seconds=alg(disksNumber)/(turnsSpeed/3600);
    return obj;
}
function alg(a){
    if(a==1) return 1;
    else return 2*alg(a-1)+1;
}

