let students = JSON.parse(localStorage.getItem("students")) || [];


students.forEach((student,index) => {
    var tr = document.createElement("tr");

    var td_Name = document.createElement("td");
    td_Name.textContent = student.name;
    tr.append(td_Name);

    var td_Age = document.createElement("td");
    td_Age.textContent = student.age;
    tr.append(td_Age);

    var td_Gender = document.createElement("td");
    td_Gender.textContent = student.gender;
    tr.append(td_Gender);

    var td_Password = document.createElement("td");
    td_Password.textContent = student.password;
    tr.append(td_Password);

    var td_Email = document.createElement("td");
    td_Email.textContent = student.email;
    tr.append(td_Email);


    var td_Action = document.createElement("td");
    td_Action.innerHTML = `<button onclick="deleteBtn(${index})" class="deleteBtn">Delete</button>`;
    tr.append(td_Action);

    result.append(tr);
});




function deleteBtn(index) {
    let students=JSON.parse(localStorage.getItem("students"))||[];
    alert(students[index].name+" deleted successfully");
    students.splice(index,1);
    localStorage.setItem("students",JSON.stringify(students));
    location.reload();
}