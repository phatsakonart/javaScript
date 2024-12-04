//Arrow function with two arguments
const sum = (fistParam, seconParam) =>{
    return fistParam+seconParam;
};
console.log(sum(2,5));//Prints :7

//Arrow function with no arguments
const printHello =() =>{
    console.log("hello");
};
printHello();//Prints hello

//Arrow fuuctions wuth a single argument
const checkWeight = (weight) =>{
    console.log(`Baggage weight :${weight} kilograms`)
};
checkWeight(25);//Prints:baggage weight : 25 kilograms

//Concisw arrow functions
const multiply = (a,b) => a*b;
console.log(multiply(2,30));//Prints 60