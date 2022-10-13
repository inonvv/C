var i=0;
while (i<=10) {
    document.write(i + "<br />");
    i++;
}


//example of a while with increment
let x = "lokipo";
while(x.length<10){
    x += 'd';
}
console.log(x);

//another example of decrement
let y =10
while(y>0){
    y--;
}
console.log(y)

//example with modulo
let number =1;
while(number <=22){
    if(number%7 ===0)
       console.log("BOOM");
    else
       console.log(number);
    number++;
}

// while to switch upper case
let originStr = prompt();
let newStr = originStr.toLocaleUpperCase();
console.log(newStr);

//example of a manual upper case
let index =0;
while(index< originsStr.length){
    let curLEtter = originsStr[index];
    switch(curLEtter)
    {
        case 'a':
            curLEtter ='A';
            break;
        case 'b':
            curLEtter='B';
            break;
    } 
    newStr+=curLEtter
    index++
}
console.log(newStr);

//do while loop
/*he last loop we’re looking at in this module is the do...while loop,
 it's a variant of the while loop but with one important difference.
This loop will execute the code block once, before checking if the condition is true, 
and then it will repeat the loop as long as the condition is true.
Here’s the Syntax:*/
var i=20;
do {  
    document.write(i + "<br />");
    i++;  
}
while (i<=25); 