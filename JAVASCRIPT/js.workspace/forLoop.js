var i = 0;
for (; i < 10; ) {
    document.write(i);
    i++;
}

let x =0;
for(console.log("start here!");x<=10;){
    console.log(x);
    x++
}

//more efficient way of writing
for(let x=0;x<10; x++;){
    console.log(x);
} 

//classic example
let originStr= 'home';
for(let i=0;i<originStr.length;i++){
    for(let j=i+1;j<originStr.length+1;j++){
        let subs =originStr.substring(i,j);
        console.log(subs);
    }
    console.log(originStr[i]);
}

// an arithmatich sequence chceck 
//with for  loop and boolean
let originStr= "258";
let isArithSeq= true;
let seqDiff= parseInt(originStr[1])- parseInt(originStr[0]);
for(i=0;i<originStr.length-1;i++){
    let charDigit =originStr[i];
    let charNextDigit= originStr[i+1];

    let digit= parseInt(charDigit);
    let nextDigit = parseInt(charNextDigit);

    let diff =nextDigit - digit;
    if(diff !==seqDiff)
        isArithSeq=false;
}
if(isArithSeq)
    console.log("Difference is " + seqDiff);
else
    console.log("string is not an arithmatic sequence");
    function main() {
        var depth = parseInt(readLine(), 10);
        //your code goes here
        for(i=0;i<32;i++){
            i+=i+7-2
             
        }
    }
    console.log(main)
    
    // The Snail in the Well problem
    /* function main() {
        var depth = parseInt(readLine(), 10);
        for(dis = 7, day = 1; dis < depth; dis += 7, day++) {
            dis -= 2
        }
        console.log(day);
    }
    A key part of understanding this lies in knowing the order in which a for
     loop is evaluated and executed.
    There are four parts of a for loop (I’ll include the corresponding code from
         the answer in parentheses for clarity):
        - initialization (dis = 7, day = 1)
        - condition (dis < depth)
        - final-expression (dis += 7, day++)
        - statement (dis -= 2)
    Although they are presented in the order listed above, they actually run in this order:
        1. initialization
        (“dis” is declared and given a value of 7, “day” is declared and given a value of 1)
        2. condition
        (if “dis < depth” is true, the for loop will continue onto steps 3 and 4. If it is false, the for loop will stop immediately without executing steps 3 and 4)
        3. statement
        (“dis” is decreased by 2)
        4. final-expression 
        (“dis is increased by 7, “day” is increased by 1)
    From here, the loop will run again, but it starts with step 2 (“dis < depth”), not the first one. This is evaluated, once again looking for either true or false.
    Going through it step by step. Let’s say “depth = 11”.
    First time through the loop:
        - dis is set to 7, day is set to 1
        - dis (which is 7) < depth (which is 11) = true (the for loop continues to steps 3 and 4)
        - dis (which is 7) is decreased by 2, so dis is now 5
        - dis (which is 5) is increased by 7, so dis is now 12; and day (which is 1) is increased by 1, so day is now 2
    Second time through the loop:
        - dis (which is 12) < depth (which is 11) = false (the for loop does not continue to steps 3 and 4)
        - the for loop ends, console.log(day) is executed, and at this moment, day has a value of 2
    With more space this could be explained further, but this is why extra conditionals, variables, while loops, and arrays aren't necessary here.*/
    function main() {
        var depth = parseInt(readLine(), 10);
        //your code goes here
        i = 0;
        
        for (; depth > 0;) {
            i++;
            
            depth -= 7
            if (depth > 0) {
                depth += 2
            }
        }
        console.log(i);
    }
    
    