// example 1: Location finder
//example -2

locationFinder = () => {
    train = 7
    return new Promise((resolve,reject)=>{
        if(train == 8)
        {
            resolve("Train has arrived");
        }
        else{
            reject("Train hasn't arrived");
        }
    })
}

locationFinder().then((resolveMsg)=>{
    console.log(resolveMsg);

}).catch(function (error){
    console.log(error);
})


//async function 
