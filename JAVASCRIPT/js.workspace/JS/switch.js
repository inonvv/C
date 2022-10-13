let superheroID =6;
let superHeroName;

switch(superheroID)
{
    case 1:
        superHeroName="Batman";
        break;
    case 2:
        superHeroName="Superman";
            break;
    case 3:
        superHeroName="Spiderman";
            break;  
   case 4:
        superHeroName="X-man";
             break;  
    case 5:
        superHeroName="Ironman";
                    break;  
default:
    superHeroName = "Unknown"                                        
}

console.log("the superhero is " + superHeroName);



//example2 of switch & break

let thing = "Tractor";
let category;
switch(thing){
    case "Cat":
    case "Dog":
        category = "Animal";
        break;
    case "Tractor":
    case "Computer":
        category = "Machine";
        break;
    default:
        category ="Invalid selection";
}

console.log("Category is  " + category);


//simp exe
function main() {
    var themeNumber = parseInt(readLine(), 10)
    /*
    1 - Light
    2 - Dark
    3 - Nocturne
    4 - Terminal
    5 - Indigo
    */
   switch(themeNumber){
       case 1:
            console.log('Light')
       break;

       case 2:
            console.log('Dark')
       break;

       case 3:
            console.log('Nocturne')
       break;

       case 4:
            console.log('Terminal')
       break;

       case 5:
            console.log('Indigo')
       break;
        
   }
        
}