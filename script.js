function taskadd() {
    let input = document.getElementById("task");
    let task = input.value;
    if (task == "") {
        alert("please Enter the task");
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = task;
    let editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    editbtn.onclick = function () {
        let newtask = prompt("Update task", span.innerText);
        if (newtask !== "") {
            span.innerText = newtask;
        }

    }
    deletebtn.onclick = function () {
        li.remove();
    }
    li.appendChild(span);
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    document.getElementById("list").appendChild(li);
    input.value = '';
}
