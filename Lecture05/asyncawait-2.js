function promiseTimeour(ms){
    return new Promise((reslove,reject)=>{
        setTimeout(reslove,ms);
    });
}

async function longRunningOpreation() {
    return 42;
}
async function run() {
    console.log("Strat !!");
    await promiseTimeour(2000);
    const response = await longRunningOpreation();
    console.log(response);

    console.log("Stop!!")
}

console.log("before run");
run();
console.log("After run");