function databaseSharing  () {
    console.log("Data stored successfully");
}

function submitForm(formMsg,dbs){
    setTimeout(()=>{
        dbs();
        console.log(formMsg);
    },1000);
}
submitForm("Form submitted successfully",databaseSharing);

function blast(){
    console.log("The crakers blasted successfully");
}

function fireCracks(msg,bls)
{
    bls();
    console.log(msg);

}
fireCracks("The crakers are light up",blast);