// different types of string syntax
let str1 = 'This string uses single quotes';
let str2 = "This string uses double quotes";
let str3 = `This string uses backticks`;

//concantation of string
let conc= str + ' ' + str2;

// use of sing/doub quotes in string
let exampStr= 'this is a  use "double quotes" but used with single'
//another example with \
let exampStr2= 'this string use \" but used with single'
//specifed str
let exampleStr3=" this is an example"
let specificChar = exampleStr3[0];
console.log(specificChar);
 
//finds in the index of string a specific char
let strg = "this is a string!"
if(str[0]==='!'
    ||str[1]==='!'
    ||str[2]==='!'){
   console.log("Affirmative");
}else{
   console.log("Negative");
}
// pulling out substring out of a string
let str ='hedgehog';
let ss = str.substr(2);
console.log(ss);

//checking if the third char is a number in a string
let originStr = 'hedgehog';
let firstPart = originStr.substring(0,2);
let secondPart;
if( originStr[2]=='0' ||
    originStr[2]=='1' ||
    originStr[2]=='2' ||
    originStr[2]=='3' ||
    originStr[2]=='4' ||
    originStr[2]=='5' ||
    originStr[2]=='6' ||
    originStr[2]=='7' ||
    originStr[2]=='8' ||
    originStr[2]=='9' )
    secondPart= '+';
else
    secondPart ='-';
    let thirdPart =originStr.substring(3);
    let updateStr = firstPart + secondPart + thirdPart;
    console.log(updateStr)  