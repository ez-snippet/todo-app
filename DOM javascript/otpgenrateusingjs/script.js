function passwordGenerate() {
    let char = '012345';
    let password = '';
    for (let i = 0; i < 6; i++) {
        password += char[Math.floor(Math.random() * char.length)]
    }
    document.getElementById("password").value = password;
}