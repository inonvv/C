// import java.util.Scanner;

// class MyClass {
//     public static void main(String[ ] args) {
//         Scanner myVar = new Scanner(System.in);
//         System.out.println(myVar.nextLine());
//     }
// }

// string var ;
// var ="hello";
// system.out.printIn(var);

// public


// class Program {
// public static void main(String[] args) {
// String firstName, lastName;
// firstName = "David";
// lastName = "Williams";

// System.out.println("My name is " + firstName +" "+lastName);
// }


// # Different exceptions are raised for different reasons.
// # Common exceptions:
// # ImportError: an import fails;
// # IndexError: a list is indexed with an out-of-range number;
// # NameError: an unknown variable is used;
// # SyntaxError: the code can't be parsed properly;
// # TypeError: a function is called on a value of an inappropriate type;
// # ValueError: a function is called on a value of the correct type, but with an inappropriate value.
// # Python has several other built-in exceptions, such as
// # ZeroDivisionError and OSError. Third-party libraries also often define their own exceptions.



// public class Program {
//     public static void main(String[] args) {
//         int x = 7;
//         if(x < 42) {
//             System.out.println("Hi");
//         }
//     }
// }

// import java.util.Scanner;

// public class Main {

//    public static void main(String[] args) {
       
//        Scanner scanner = new Scanner(System.in);
//        int price = scanner.nextInt();
//        //complete the code
//        if (price<12000){
//            System.out.println("yes");
//        }

     
//    }
// }

// public class Program {
//     public static void main(String[] args) {
//         int age = 30;
//         if (age < 16) {
//             System.out.println("Too Young");
//         } else {
//             System.out.println("Welcome!");
//         }
//     }
// }

// public class Program {
//     public static void main(String[] args) {
//         int age = 25;
//         if(age > 0) {
//             if(age > 16) {
//                 System.out.println("Welcome!");
//             } else {
//                 System.out.println("Too Young");
//             }
//         } else {
//             System.out.println("Error");
//         }
//     }
// }
//  let num =7;
//  let txt ="kipi";
//  let cmp =7>2;
//let str ='3';
//let cmp = (str==='hedgehog');
//console.log(num +' ,'+ typeof num);
//console.log(txt + ','+ typeof txt);
//console.log(cmp +', '+ typeof cmp);
// let str = 'hedgehog';
// let cmp1 = (str !== 'hedgehog');
// let cmp2 = (str !== 'hedgehog');
// let cmp3 = (str !== 'hedgehog');

// console.log(cmp1);
// console.log(cmp2);
// console.log(cmp3);
// function main() {


//     var age = parseInt(readLine(), 10)
//     // Your code here
//     console.log(age>=18);
// }

//document.write((4 > 2) && (10 < 15));
//var age = 42;
//var isAdult = (age < 18) ? "Too young": "Old enough";
//document.write(isAdult);


//comparison syntax
function main() {
    var hour = parseInt(readLine(), 10);
    // Your code goes here
    time = hour>= 0 && hour <=12 ? "am": "pm";
    console.log(time)
}

//convert mlies to minutes
function main() {
    var distance = parseInt(readLine(), 10);
    //your code goes here
    var hour = distance/40*60;
    console.log(hour)
}

//calling on input boxes and compare the user input
document.getElementById('cmpBtn').onclick =function(){
    let operand1 = document.getElementById('operand1').value;
    let operand2 =document.getElementById('operand2').value;
    let userSum = document.getElementById('sum').value;


    let actualSum = parseInt(operand1) + parseInt(operand2);
    let isEqual = parseInt(userSum)=== actualSum;
    document.getElementById('ResultBar').innerHTML= isEqual;
}

//another example of comparison 
document.getElementById('cmpBtn').onclick=function(){
    let box1 =document.getElementById('box1').value;
    let box2 =document.getElementById('box2').value;
    let box33 =document.getElementById('box33').value;

    let num1 = parseInt(box1);
    let num2 = parseInt(box2);



    let isTrue = (num1 >= 17 && num1 <= 27) ||
                 (num2> num1*10)            ||
                 (box33 === 'hedgehog');

    document.getElementById('ResultBar').innerHTML = isTrue; 
    

}

// save an input inside a variable
let x = prompt("please enter a value");

//diiferent phrases of if statement
let x = prompt("please enter a value");
let xVal =parseInt(x);
if(xVal>5){
    console.log('variable x holds a big value!');
}
//example 2 in a boolean expression
let xVal = parseInt(x);
let isBig = xVal>5;
if(isBig){
    console.log("variable holds a big value!")
} else{
    console.log("variable x holds a small value")
}


// A display number of clicks
let numOfClicks = 0;
 let square = 0;
 document.getElementById("btn1").onclick = function() {
     numOfClicks= numOfClicks + 1;
     square = numOfClicks * numOfClicks;
     console.log( numOfClicks);
     console.log( square);
 }
 // concatenation of strings and converting them
 let str1;
 let str2;
 let str3;
 let numVal1;
 let numVal2;
 let numVal3;
 let concatStr;
 document.getElementById("btn1").onclick = function(){
     str1 = document.getElementById("inp1").value;
     str2 = document.getElementById("inp2").value;
     str3 = document.getElementById("inp3").value;

     numVal1 = parseInt(str1);
     numVal2 = parseInt(str2);
     numVal3 = parseInt(str3);

     concatStr = numVal1 + numVal2 + numVal3;
     document.getElementById("p1").innerHTML = concatStr;
 }
 // concatation of string and reverse
document.getElementById('btn1').onclick=function()
{
    let inpStr1=document.getElementById("inp1").value;
    let inpStr2=document.getElementById("inp2").value;

    let concat;

    if (document.getElementById("cb1").checked){
        concat = inpStr2 + inpStr1;
    }else{
        concat = inpStr1 +" " +
        inpStr2
    }
    console.log(concat);
}
// basic actions with Math.
let num = 3.2;
if(Math.round(num)===num){
    console.log("num is integer");
}else {
    console.log("original number is", num,"/round num is",Math.round(num));
}