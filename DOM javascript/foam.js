let form = document.getElementById("foam");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let n = document.getElementById("name");
    let e = document.getElementById("email");
    let p = document.getElementById("pass");

    let valid = true;

    function validemail(email) {
        return email.includes("@");
    }

    if (n.value === "") {
        document.getElementById("e1").innerText = "Name is required";
        n.classList.add("fail");
        n.classList.remove("ok");
        valid = false;
    } else {
        document.getElementById("e1").innerText = "";
        n.classList.add("ok");
        n.classList.remove("fail");
    }

    if (p.value.length < 8) {
        document.getElementById("e3").innerText = "Password must be 8 characters";
        p.classList.add("fail");
        p.classList.remove("ok");
        valid = false;
    } else {
        document.getElementById("e3").innerText = "";
        p.classList.add("ok");
        p.classList.remove("fail");
    }

    if (!validemail(e.value)) {
        document.getElementById("e2").innerText = "Valid email is required";
        e.classList.add("fail");
        e.classList.remove("ok");
        valid = false;
    } else {
        document.getElementById("e2").innerText = "";
        e.classList.add("ok");
        e.classList.remove("fail");
    }

    if (valid) {
        alert("Form is successful ✅");
    }

    
});


