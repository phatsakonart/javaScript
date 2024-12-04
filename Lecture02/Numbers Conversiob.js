let num1 = '150';
let flol = '1.50';

console.log("*******Converting string to intrgrts*******");
//Coverting string to integers
console.log(parseInt(100));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); //Hexadecimal Number

console.log("**********Converting string to flooat********");
//Coverting string to float
console.log(parseFloat('1.25abc'));
console.log(parseFloat(flol));
console.log(parseFloat('ABC'));

console.log("***********More Converting Examplse");
//More Converaion Eamples
//Number after spcial characthers are ingored
console.log(parseInt('1.5'));
console.log(parseInt('1+1'));

//Using Template Literals
console.log(parent(`${1+1}`));

console.log("***********Converting number to string*********");
//Comverting number to strings
console.log(num1.toString());
console.log(flol.toString());
console.log((100).toString());
