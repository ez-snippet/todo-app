for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

  let ali = 3;
  for ( let num = 1; num <= 10; num ++){
    console.log(` 3 X ${num} = ${num *ali}  `);
   
}

for (let p = 5; p >= 1; p--) {
    let dev = "";
    for (let u = 1; u <= p; u++) {
        dev += "*";
    }
    console.log(dev);
}
for ( h = 2; h <=50; h++){
    if ( h % 2 == 0 ){
        console.log( "even" + h);
    }
    else{
        console.log( "odd" + h);
    }
}
for ( let t  = 1; t <=3; t++ ){
  let code = "";
  for ( let g = 1; g <=10; g++){
    code += "*"
    }
    console.log(code);
}
//user password system:

let user = "Ali";
let password = "12345";
if ( user === "Ali"  && password === 12345 ){
   console.log("Login Successful");
} 
else {
    console.log("Login un Successful");
}
//Task 1: Bank ATM PIN 
let pin = 5000;
if ( pin >5000){
  console.log("You can withdraw large amount");
  if ( pin <=5000){
    console.log("You can withdraw limited amount");
  }
}
  else{
    console.log("Invalid PIN");
  }

//Age Verification
let age = 17;
if ( age >18){
  console.log("Allowed");
  if ( age >18 && age <=25){
    console.log("Welcome Young Adult");
  }
  if ( age >26 && age <=60){
    console.log("Welcome Adult");
  }
  if ( age >60){
    console.log("Welcome Senior");
  }
}
else{
    console.log("Access Denied");
  }
  //Task 4: E-commerce Discount
  let  cart = 4999;
  if ( cart >=1000){
    console.log("Apply Discount");
    if ( cart  >=5000){
      console.log("Apply 20% Discount");
    }
    if ( cart  >=2000  && cart <=4999){
      console.log("Apply 10% Discount");
    }
    if (  cart >=1000 && cart <=1999){
      console.log("Apply 5% Discount");
    }
  }
  else{
    console.log("No discount");
  }


  
