console.log("while loop");

let a = 10;
while(a>0)
{
    console.log(a);
    a--;
}

console.log("do while");

do{
    console.log(a);
    a++;
}while(a<10)

console.log("for loop");

for(b = 2;b<11;b=b+2)
{
    console.log(b);
}

let arr = [10,20,30,40,50,60,70,80,90,100];

console.log("for in loop");

for (x in arr){
    console.log(x);
}

console.log("for of loop");

for(x of arr)
{
    console.log(x);
}