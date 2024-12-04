function circumference(r){
    if(Number.isNaN(Number,parseFloat(r))){
        return 0;
    }
    return parseFloat(r) * 2.0* Math.PI;
}

console.log(circumference("4.467abcdefgh"));
//expected output: 28.659301297883173

console.log(circumference("abcdefgh"));
//expected output:0