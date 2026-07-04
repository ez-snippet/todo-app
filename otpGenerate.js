//otp Generator
function otp() {
    let otp = '';
    let digit = '012345';

    for (let i = 0; i < 5; i++) {
        otp += digit[Math.floor(Math.random() * digit.length)];
    }
    return otp;
}
console.log(otp());
//password Generator
function password() {
    let password = "";
    let digit = "0ka2ms";
    for (let i = 0; i < 6; i++) {
         password += digit[Math.floor(Math.random() * digit.length)];
    }
    return password;
}
console.log(password());