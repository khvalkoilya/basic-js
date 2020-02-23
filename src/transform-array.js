module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error();
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="--double-next") {
            if(i==arr.length-1) i++;
            else newArr.push(arr[i+1]);
            continue;
        }
        else if(arr[i]=="--double-prev"){
            if(i==0);
            else newArr.push(arr[i-1]);
            continue;
        }
        else if(arr[i]=="--discard-next"){
            if(i==arr.length-1) i++;
            else i++;
            continue;
        }
        else if(arr[i]=="--discard-prev"){
            if(i==0);
            else newArr.pop();
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr;
};