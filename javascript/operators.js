//Assignment operator

let a = 10;
let b = 20;

//Arithmetic operator
  
c = a+b;
console.log(c);

d = c-a;
console.log(d);

e = a*b;
console.log(e);

f = b/a;
console.log(f);

//unary operator

console.log(c++);
console.log(++c);
console.log(c--);
console.log(--c);

//conditional operator

let flt = 10.0;

if(b>a)
    {
       console.log("b is greater");
    }
if(a>=10)
    {
        console.log("a is greater than equal to b");
    }
if(a<b)
    {
        console.log("a is lesser than b");
    }
if(b<=c)
{
    console.log("b is greater than or equal to c");
}
if(b!=c){console.log("not equal");}
if(b==20)   console.log("equal");
if(b!==flt) console.log("!== operator");

//logical operator

if(a<b && a<c)  console.log("a is lesser");
if(b>a || a>b) console.log("Conditional OR");

//bitwise operator
console.log(a|b);
console.log(a&b);
console.log(~a);
console.log(a>>2);
console.log(a<<2);

//ternary operator
a<b?console.log(a):console.log(b);