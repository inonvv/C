//simp exe1
var month = readLine()
//your code goes here
if(month === 'August'){
    console.log("vacation")
}
//simp exe2
var score = parseInt(readLine(), 10)
/*
88 and above => excellent
40-87   => good
0-39 => fail
*/
// your code goes here
if(score>=88){
    console.log("excellent")
}else if(score>44 && score<87){
    console.log("good")
}else if(score<=39) 
    console.log('fail')



// an simple if and  boolean expression
let x = prompt("please enter a value");
let xVal= parseInt(x);
let isBig = xVal>5;
if(isBig){
    console.log("variable x holds a big value!");
} else if(xVal>2){
    console.log("variable x holds a medium sized value");
}else{
    console.log("variable x holds a small value!")
}

//an arithmatic calculation of simple 3 boxes
document.getElementById("btn1").onclick = function(){
    let str1 = document.getElementById("inp1").value;
    let str2 = document.getElementById("inp2").value;
    let op = document.getElementById("inp_op").value;
    
    let inpVal1 = parseInt(str1);
    let inpVal2 = parseInt(str2);
    let result;
    
    if(op === '+'){
        result = inpVal1 + inpVal2;
    } else if(op === '-'){
        result = inpVal1 - inpVal2;
    } else if(op === '*'){
        result = inpVal1 * inpVal2;
    } else if(op === '/'){
        result = inpVal1 / inpVal2;
    } else if(op === '^'){
        result = inpVal1 ** inpVal2;
    } else{
        result= "Operation not supported!";
    }
    console.log(result);
}
// An example with modulu
let num = 21;
 if(num%7===0){
    console.log("NUM^3 =",num**3)
 }else
    console.log("NUM^2 =",num**2)
 
    function main() {
        var goalsTeam1 = parseInt(readLine(), 10);
        var goalsTeam2 = parseInt(readLine(), 10);
        // function call
        finalResult(goalsTeam1, goalsTeam2)
        
    }
    //complete the function
    function finalResult(goalsTeam1, goalsTeam2) {
        if(goalsTeam1>goalsTeam2){
            console.log("Team 1 won")
        }else if(goalsTeam2>goalsTeam1){
            console.log("Team 2 won")
        }else if(goalsTeam1==goalsTeam2){
            console.log("Draw")
        }
    };