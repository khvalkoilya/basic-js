module.exports = class DepthCalculator {
    calculateDepth(arr,num){
        if(arguments.length==1) num=1;
        let n=num;
        for(let item of arr) {
            if(Array.isArray(item)){
                let k=this.calculateDepth(item,num+1);
                if(k>n) n=k;
            }
        }
        return n;
    }
    
};

// function calc(arr, num) {
//     //let newArr=[];
//     if(arguments.length==1) num=1;
//     let n=num;
    
//     //for(let item of arr) newArr.push(1);
//     for(let item of arr) {
//          if(Array.isArray(item)){
//             let k=calc(item,num+1);
//             if(k>n) n=k;
//          }
//     }
//     return n;
// }

// console.log(calc([[1],[[]]]));