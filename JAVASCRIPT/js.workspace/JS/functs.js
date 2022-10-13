//basic function call
function prodductsOfx(x, op){
    if(op === 'product'){
        console.log('x ='+ x);
        console.log('x*2='+x*2);
        console.log('x*3='+x*3);
    }else if(op === 'power'){
        console.log('x ='+ x);
        console.log('x**2='+x**2);
        console.log('x**3='+x**3);
    }else{
        console.log("Operation not supported, please use 'product' or 'power'");
    }

}
prodductsOfx(7, 'power');


//return in a simple function call

function add2(val1,val2){
    let result = val1 +val2;
    return result
}

let sumResult = add2(3,7);


//another example
function areDivisors(a,b){
    let ADividesB =(b % a === 0);
    let BDividesA =(a % b === 0);
    let result = ADividesB || BDividesA;
    return result;
}

let divisorsResult1 = areDivisors(18,3);
let divisorsResult2 = areDivisors(18,3);
console.log(divisorsResult1);
console.log(divisorsResult2);

//my wrong way of writing it):
function isDivided(a,b){
    if(a%b===0||
        b%a===0)
        return true
    else
    return false
}

isDivided(5,6);
console.log(isDivided)

//another yet better improved exe

function cutStr(str){
    if(str.length<4)
        return str;
    
    let Bstr = str.substring(0,2);
    let Estr = str.substring(str.length-2);
    return Bstr+Estr;
    
}

let testStr = "programming is good"
let chopedStr = cutStr(testStr); 
console.log(chopedStr);

//function with PASS BY VALUE 
//this is an example when you call up a function
//but nothing happend because its a copy of the value and not the value itself
//that why we need to declare the right placement of the value to change it localy or globaly
function doubleSTr(str,){
    str = str + str;
}
let nameVar = "boom";
doubleSTr(nameVar);
console.log(nameVar);// this will do nothing

//this is a right way of implement the variable to a value and make the function work
function doubleSTr(str, reps){
    str = str +str;
    return str;
}
let nameVar = "boom";
nameVar = doubleSTr(nameVar);
console.log(nameVar);

//exe

function cutStr(str){
    if(str.length<4)
        return str;
    
    let Bstr = str.substring(0,2);
    let Estr = str.substring(str.length-2);
    return Bstr+Estr;
    
}

let testStr = "programming is good"
let chopedStr = cutStr(testStr); 
console.log(chopedStr);




function main() {
    var num1 = parseInt(readLine(),10);
    var num2 = parseInt(readLine(),10);
    var num3 = parseInt(readLine(),10);
    
    //assign the average value to the variable average 
    var average= avg(num1,num2,num3);
    console.log(average)
}
//complete the function
function avg(a,b,c){
    return (a+b+c)/3
}




//////Currency Converter
function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    
    console.log(convert(amount, rate));
}
function convert(amount,rate){
    return amount*rate
}