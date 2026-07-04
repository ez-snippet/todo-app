console.log("hello,world");
let age = 20;
console.log("hello,world");
if(age >= 50){
    console.log("full ticket");
}
else if (age > 18){
    console.log("half ticket");
}
else if (age >= 5){
    console.log("ticket is free");
}
else{
    console.log("older people not allowed");
}
let day = 7;
switch(day){
    case 1:  
    console.log("monday");
     break;
     case 2 :
        console.log("tuesday");
    break;
    case 3 :
     console.log("wednesday");
    break;
    case 4:
        console.log("thusday");
        break;
    case 5:
        console.log("friday") ;
        break;   
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
        default:
            console.log("invalid weekday number");
    }
    let grade = 40;
    if ( grade >= 80){
        console.log(" A grade")
    }
     else if (grade >= 60){
        console.log( " B grade");
    }
    else if (grade >= 40){
        console.log("C grade")
    }
     else {console.log("fail");

     }