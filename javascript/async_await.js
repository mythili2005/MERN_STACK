/*async function funName()
{
    setTimeout(()=>{
        console.log("Hello");
    },5000);
    console.log(await "Hello")
}
arrrowFunName = async()=>{
    setTimeout(()=>{
        console.log("Kec");
    },1000);
    console.log(await "kec");
}
 funName();
 arrrowFunName();*/


arrowFun = async()=>{
    setTimeout(()=>{

        console.log("Tree")
    },1000);
   return ("Tree")
}
arrowFun1 = async()=>{
    setTimeout(()=>{
        console.log("Wood")
    },1000);
    return("Wood")
}
arrowFun().then((a) =>{
    console.log(a)
});
console.log(arrowFun1());














