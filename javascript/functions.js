//1)function without arguments with return type
arrowFun = ()=>{
    var dept = "AIML";
    return dept;
}
console.log(arrowFun());

//2)function with an arguments without return type
arrowFun = (foodItems)=>{
    console.log(foodItems);
}
arrowFun(["Biriyani","Friedrice","Parotta"]);

//3)function with arguments with return type
arrowFun = (foodItems)=>{
    return foodItems[2];
}
console.log(arrowFun(["Biriyani","Friedrice","Parotta"]));

//4)function without arguments without return type
arrowFun = ()=>{
    var dept = "AIML";
    console.log(dept);
}
arrowFun(["AIML","CSE","IT"]);
