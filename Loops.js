for ( let i = 1;  i<= 20; i++){
    console.log("hello  " + i )
}
for ( e = 1; e<=10; e++){
    console.log( "  2 x " + e +  " = "   +  (e* 2))
    if (e === 7){
       break;
    }
}
for ( b =  1; b<=10; b++ ){
    console.log( " 4 x  " + b + " = " + (b* 4));
}
for (d = 1; d<=5; d++){
    console.log("developer" + d);
}
for( i = 0; i<=100; i++){
    console.log("web" + i);
}
for( v = 0; v<=1000; v++){
    if( v === 999){
        continue;
    }
    console.log(v);
}
let a = 100;

while (a > 19) {
    console.log( "Mobile charge" + a);
    a--;  
    if( a <= 19){
        console.log("mobile Not Charge" + a);
    }
}
for( dev = 0; dev <= 10; dev++){
    console.log(dev);
    if( dev == 9){
        break;
    }
}
for (pro = 0; pro<=10; pro++){
    if(pro === 9){
        continue;
    }
    console.log(pro);
}