 console.log("hello,world");
 function  tableprint(  num, lenght) {
     for ( let i = 0; i <=lenght; i++){
         console.log;(` ${num} X  ${i}  =  ${num *i} <br>`);
     }
 }
 const n = prompt( "enter the number")
 const l = prompt("enter the length")
 tableprint(n, l)


/function findchar( name , char) {
    for (let j = 0; j <name.length; j++) {
       if ( name [j] ===  char){
            console.log("found");   
        }
        else{
        console.log("not found");
      }
      
    }
}
 findchar( "Ali" , "developer")

// welcome function
function welcome(name) {
    if (name === "ali") {
        console.log("Welcome");
        if ( name === "developer"){
            console.log("Welcome brother");
        }
    } else {
        console.log("Not welcome");
    }
}

welcome("ali");
welcome("ahmed"); 

console.log("");


