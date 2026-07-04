let box = document.getElementById("box");
let score = 0;
box.addEventListener("click", () => {
    score++
    document.getElementById("score").innerText = score;
    let x = Math.random() * (window.innerWidth -50);
     let y = Math.random() * (window.innerHeight -50);
     box.style.left = x + "px";
     box.style.top = y + "px";
})
box.style.left  = "100px"
box.style.top = "100px"