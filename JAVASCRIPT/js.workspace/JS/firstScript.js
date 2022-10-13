function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
}

sayHello("John", 20)

function product(a, b) {
    return a * b;
}

var result= product(8, 11); 
console.log(result);

function addNumbers(a, b) {
    var c = a+b;
    return c;
}
document.write( addNumbers(40, 2) );
////////////////////////////////


var name = prompt("Enter your name:");
alert(name);

var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}