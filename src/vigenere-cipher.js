class VigenereCipheringMachine {
    constructor(flag=true){
        this.flag=flag;
    }
    encrypt(text,key) {
        if(arguments.length!=2||typeof text!='string' || typeof key!='string')
            throw new Error();
        text=text.toUpperCase().split('');
        key=key.toUpperCase().split('');
        while(key.length<text.length) key=key.concat(key);
        let cipher='',i=0,j=0;
        for(i;i<text.length;i++){
            if(/[A-Z]/.test(text[i])){
                cipher+=String.fromCodePoint((text[i].codePointAt()-65+key[j].codePointAt()-65)%26+65);
                j++;
            } else cipher+=text[i];
        }
        return this.flag?cipher:cipher.split("").reverse().join("");
    }

    decrypt(cipher,key) {
        if(arguments.length!=2||typeof cipher!='string' || typeof key!='string')
            throw new Error();
        cipher=cipher.toUpperCase().split('');
        key=key.toUpperCase().split('');
        while(key.length<cipher.length) key=key.concat(key);
        let text='',i=0,j=0;
        for(i;i<cipher.length;i++){
            if(/[A-Z]/.test(cipher[i])){
                text+=String.fromCodePoint(((cipher[i].codePointAt()-key[j].codePointAt()+26))%26+65);
                j++;
            } else text+=cipher[i];
        }
        return this.flag?text:text.split("").reverse().join("");
    }
}
module.exports = VigenereCipheringMachine;
