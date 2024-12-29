class ClassEg{
    a = 10;
    methodEg = () =>{
        console.log("Welcome to OOP's");
        return this.a;
    }
}
obj = new ClassEg();
console.log(obj.a);
console.log(obj.methodEg());