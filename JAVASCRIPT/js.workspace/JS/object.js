//the idea in object is, there is couple of 
//varibles of data that describes one variable
//the object let you store to type of data in 
//one unit of storage of a variable
//every pair of name of the varible and value is called 
//KEY-VALUE PAIR
//two ways to pinpoint one data of an object
//by a point, name.value or by square brackets[] name[value]
///// hair.color
/////object.property

//Object Initialization
var John = {name: "John", age: 25};
var James = {name: "James", age: 21};


let storeItem = {
    description:"persian rice 100g",
    price:10,
    nutricional_value:[4, 44, 0.5]
};
//you can also change the data 
storeItem.price = 13;
console.log(storeItem.price);
////////*************************** */
//second way to pinpoint a data from an object
let storeItem = {
    description:"persian rice 100g",
    price:10,
    nutricional_value:[4, 44, 0.5]
};
//you can also change the data 
storeItem['price'] = 13;
console.log(storeItem["price"]);

//further more then  storing data objects can store actions like functions
//an action like functions in objects named 'metoda'
//also to separade between data you have to put comma , 
//at the end of every data you input
//for example

let user= {
    name: 'inon'
    email:'inonv31@gmail.com'
    age: 7
    login: function(){
        console.log("the user logged in");
    }
};
user.login();

//  this   s a word this can be used to reach out to the object from the inside 
//the object itself!
//and from out of the object itself you can call it by it name
//but if your in the object you have to use this for specific data to use it
//need to remember this do not always return the requested data 
//its depends on where it is whithin the code

/*let storeItem = {
    description:"persian rice 100g",
    price:10
};
console.log(storeItem);*/
let user= {
    name: 'inon',
    email: 'inonv31@gmail.com',
    age:  7,
    login: function(){
        console.log("the user logged in");
    },
    isUserOldEnough: function(){
        if(this.age>=16)
            console.log("the user is old enough");
        else
            console.log("the user is too young");
    } 
};
user.isUserOldEnough();

// you can also write it like this 
let user= {
    name: 'inon',
    email: 'inonv31@gmail.com',
    age:  7,
    login(){
        console.log("the user logged in");
    },
    isUserOldEnough(){
        if(this.age>=16)
            console.log("the user is old enough");
        else
            console.log("the user is too young");
    } 
};
user.login();


//my exercise

let storeItem = {
    description:"persian rice 100g",
    price:10,
    nutricional_value:[4, 44, 0.5],
    originalPrice(){
        console.log(this.price,"this is the original price")
    },
    applyDiscount(){
        if(this.price>10)
            newPrice=this.price-this.price*0.2
        console.log(newPrice,"this is the price after discount")
    } 
};
storeItem.originalPrice()
storeItem.applyDiscount()


// their exe
let storeItem ={
    description:"persian rice 100g",
    price:10,
    nutritional_value:[4,44,0.5],
    apply_discount(precent){
        this.price = this.price-this.price*precent/100;
    }
};
console.log("the original price is  ",storeItem.price);
storeItem.applyDiscount();
console.log("the price after sicount is  ",storeItem.price);


///simple object exe
var cuboid = {
    length: 25,
    width: 50,
    height: 200
};

//your code goes here
console.log(cuboid.height * cuboid.width * cuboid.length)






/////////////////////
///////////////////
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); 
document.write(p2.name);

/////////////////////////////////////////////

function person (name, age) {
    this.name = name;
    this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);

document.write(John.age);

////another exe
function main() {
    //take flight number and its status
    var flightNumber = readLine();
    var flightStatus = readLine();
    var flight1 = new Flight(flightNumber,flightStatus);
    
    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)
    
}

function Flight(flightNumber, status) {
    //fix the constructor
    this.number = flightNumber;
    this.status = status;
};


///////another exercise
/*A store manager needs a program to set discounts for products.
The program should take the product ID, price and discount as input and output the discounted price
. However, the changePrice method, which should calculate the discount, is incomplete. Fix it!*/ 
function main() {
    var prodID = readLine();
    var price = parseInt(readLine(),10);
    var discount = parseInt(readLine(),10);
    
    var prod1= new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);
    
    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        //your code goes here
        this.price=  price-((discount/100)*price)

    }
}