//Data function return milliseconds that have elapsed
//sin midnight on January 1,1370 UTC
//this example takes 2 sconds to run 
const start = Date.now();

console.log('starting timer....');
// expected output: starting timer....

setTimeout(()=>{
    const mills = Date.now() -start;

    console.log(`seconds elapsed = ${Math.floor(mills/1000)}`);
    //expected output: seconda elapsed =2
},2000);