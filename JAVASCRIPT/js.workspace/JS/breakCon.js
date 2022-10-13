//example of a break 
for(let i=0;i<13;i++){
    console.log(i);
    if(i==7)
    break;
}

//another example prime number and break
let testedNumber =3953;
let isPrime=true;
for(let i=2;i<testedNumber;i++)
{
    if(testedNumber%i===0){
        isPrime=false;
        break;
    }
}
if(isPrime)
    console.log(testedNumber + "is a prime number");
else
    console.log(testedNumber + " is composite number");

// put q to break the loop
let input = undefined;
while(true){
    input = prompt("please enter some text(q to quit)");
    console.log(input);
    if(input==='q')
    break;
}


//another example
let input = undefined;
while(input !== 'q') {
    input = prompt("please enter a string");
    if(input.length<2)
        continue;
    let secondChar = input[1];
    console.log("Second char is " + secondChar );
    if(input.length<3)
        continue;
    let thirdChar = input[2];
    console.log("Third char is " + thirdChar); 
}