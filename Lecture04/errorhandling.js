function criticalCode(){
    throw" thowimg an excption";
}

function logError(theException){
    console.log(theException);
}

//try..catch
console.log("\n***************************Try...Catch***********\n");

try {
    criticalCode();
 } catch (ex){
        console.log("Got an error");
        logError(ex);
    }

// HTrowing in Try..Catch
console.log("\n**********Throwing in Try..Catch**************\n")

try{
    throw"An exception that is throen every time";
} catch(ex){
    console.log("got an error");
    logError(ex);
}

console.log("\n**********Try..Catch...Finally**************\n")

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("")
}
