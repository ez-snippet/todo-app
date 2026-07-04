function result() {
    let name = document.getElementById("name").value; 
    let eng = Number(document.getElementById("eng").value);
    let urdu = Number(document.getElementById("urdu").value);
    let math = Number(document.getElementById("math").value);
    let com = Number(document.getElementById("com").value);
    
    let total = eng + urdu + math + com; 
    let percentage = (total / 400) * 100; 
    let grade; 
    
    if (percentage >= 80) {
        grade = "A+";
    }
    else if (percentage >= 70) {
        grade = "A";
    }
    else if (percentage >= 60) {
        grade = "B";
    }
    else if (percentage >= 50) {
        grade = "C";
    }
    else {
        grade = "Mubark ho ap fail ho 🤣🤣🤣😂";
    }
    
    document.getElementById("output").innerHTML = 
    "Student Name: " + name + "<br>" + 
    "Percentage: " + percentage.toFixed(2) + "%<br>" +  
    "Grade: " + grade;
}