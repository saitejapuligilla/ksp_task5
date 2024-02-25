let a=20,b=10;
console.log("a=",a);
console.log("b=",b);
function arthematic(){
    console.log("a+b=",a+b);
    console.log("a-b=",a-b);
    console.log("a*b=",a*b);
    console.log("a/b=",a/b);
    console.log("a**b=",a**b);
    console.log("a%b=",a%b);
    console.log("a++=",a++);
    console.log("++a=",++a);
    console.log("a--=",a--);
    console.log("--a=",--a);
}
function assignment(){
    console.log("a=5");
    console.log("a+=5=>",a+=5);
    console.log("a-=5=>",a-=5);
    console.log("a*=5=>",a*=5);
    console.log("a/=5=>",a/=5);
    console.log("a%=5=>",a%=5);
    console.log("a**=5=>",a**=5);
}
function comparison(){
    console.log("(a==b)=>",a==b);
    console.log("(a===b)=>",a===b);
    console.log("(a!=b)=>",a!=b);
    console.log("(a>b)=>",a>b);
    console.log("(a<b)=>",a<b);
    console.log("(a>=b)=>",a>=b);
    console.log("(a<=b)=>",a<=b);
}

function logical(){
    console.log("(a>=b)&& (a!=b)=",(a>=b) && (a!=b));
    console.log("(a>=b)||(a!=b)=",((a>=b) || (a!=b)));
    console.log("!(a!=b)=>",!(a!=b));

}
function stringfunctions(){
    let string1="abcd ekcndfjf",string2="dknvagivuwh vuvdnkvsnavavaev";
    console.log("string1=",string1);
    console.log("string2=",string2);
    console.log("string length()::\nstring1.length=",string1.length);
    console.log("string charat()::\nstring1.charAt(0)=",string1.charAt(0));
    console.log("string []::\nstring1[0]=",string1[0]);
    console.log("string slice()::\nstring1.slice(7,13)=",string1.slice(7,13));
    console.log("string uppercase()::\nstring1.toUpperCase()=",string1.toUpperCase());
    console.log("string tolowercase()::\nstring1.ToLowerCase()=",string1.toUpperCase());
    console.log("string concat::\nstring1.concat(string2)=",string1.concat(string2));
    console.log("string repeat::\nstring1.repeat=",string1.repeat(2));
    console.log("string split::\nstring1.split=",string1.split(" "));
    console.log("string trim::\nstring1.trim=",string1.trim());

}
