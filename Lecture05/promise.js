function promiseTimeour(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    })
}
promiseTimeour(2000)
.then(() =>{
    console.log("Done!!");
    return promiseTimeour(1000);
})
.then(() =>{
    console.log("Also done!!");
    return Promis.resolve(42);
})
.then((result) =>{
    console.log(result);
})
.then(() =>{
    console.log("Error!!");
})