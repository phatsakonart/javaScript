const promis =  new Peomise((resolve,reject) =>{
    const res =true;
    if (res){
        resolve("Resolved")
    }else{
        reject(Error("Fatal Error"));
    }

});

promis.then(
    (res) => console.log(res),
    (ree) => console.log(err)
);