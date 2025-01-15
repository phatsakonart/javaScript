function promiseTimeour(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}

async function run() {
    console.log("Start");
    await promiseTimeour(2000);
    console.log("Stop!!");
}
console.log("before run");
run();
console.log("After run");