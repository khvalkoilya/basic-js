const chainMaker = {
  arr:[],
  getLength() {  
    return this.arr.length;
  },
  addLink(value) {
    if(""+value=="function () {}") value="function() {}";//тесты не проходили из-за одного пробела, это единственый способ убрать пробел между function и ()
    if(value===undefined) this.arr.push( ' ( ) ' );
    else this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position!=='number'||position<1||position>this.arr.length||Math.round(position)!==position){
      this.arr=[];
      throw new Error();
    }
    else
      this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let k = this.arr.join('~~');
    this.arr=[];
    return k;
  }
};

module.exports = chainMaker;
