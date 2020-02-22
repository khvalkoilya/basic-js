module.exports = function repeater(str, options) {
    str= String(str);
    if(options.repeatTimes=== undefined) options.repeatTimes =1;
    if(options.separator===undefined) options.separator="+";
    if(options.addition===undefined) options.addition="";
    if(options.additionRepeatTimes===undefined) options.additionRepeatTimes=1;
    if(options.additionSeparator===undefined) options.additionSeparator="";
    let newStr="";
    for(let i=1;i<=options.repeatTimes;i++){
        if(i!=1)newStr+=options.separator;
        newStr+=str;
        newStr+=options.addition;
        for(let j=1;j<options.additionRepeatTimes;j++){
            newStr+=options.additionSeparator;
            newStr+=options.addition;
        }
    }
    return newStr;

};
function a(str,options){
    str= String(str);
    if(options.repeatTimes=== undefined) options.repeatTimes =1;
    if(options.separator===undefined) options.separator="+";
    if(options.addition===undefined) options.addition="";
    if(options.additionRepeatTimes===undefined) options.additionRepeatTimes=1;
    if(options.additionSeparator===undefined) options.additionSeparator="";
    let newStr="";
    for(let i=1;i<=options.repeatTimes;i++){
        if(i!=1)newStr+=options.separator;
        newStr+=str;
        newStr+=options.addition;
        for(let j=1;j<options.additionRepeatTimes;j++){
            newStr+=options.additionSeparator;
            newStr+=options.addition;
        }
    }
    return newStr;
}
console.log(a('i7v9VAiIYf', { repeatTimes: 1, separator: 'EJVVKb7ADk', addition: 'FeBa2b7RLL', additionRepeatTimes: 2, additionSeparator: 'TEn9kEcy0M' }));