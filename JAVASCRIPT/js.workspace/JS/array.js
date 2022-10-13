//arrays in j.s. can be with differnt types of variables
//such as boolean,string and integers.
//example 
let animalss = ["horse",17,"fox",true,23,false,false];
for(let i=0;i<animalss.length;i++){
    if(typeof animalss[i] ==='boolean'){
        console.log(animalss[i]);
    }
}

//also can extend the array to a specific requirment of your need
//unlike other program language when you need to make a new array and store the 
//old array with the new variable
let animals = ["horse",17,"fox",true,23,false,false];
animals[5]= 'elephant';
console.log(animals)
// more elegant way of instore new variable an array
animals.push("zebra");
// and the other way around, to remove from an array 
animals.pop()



//to put at the beginning of an array is unshift
//and to remove from the start of the array is shift
let animals = ["horse",17,"fox",true,23,false,false];
console.log("original array:");
console.log(animals);
animals.unshift("giraffe");
console.log("Array after addition: unshift ");
console.log(animals);
animals.shift();
console.log("array after removal: shift");
console.log(animals);

//concantation of arrays from array1 +array2

let origiArray = ["lo", "yodea","tichnut"];
let newArray = [];
for(let i=0; i< origiArray.length;i++) {
    newArray.unshift(origiArray[i]);
    newArray.push(origiArray[i]);
}
console.log(newArray);

//concantation of arrays from array2 +array1
let origiArray = ["lo", "yodea","tichnut"];
let newArray = [];
for(let i= origiArray.length-1; i>=0 ;i--) {
    newArray.unshift(origiArray[i]);
    newArray.push(origiArray[i]);
}
console.log(newArray);
