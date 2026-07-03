var btn = document.querySelector(".register");
var result = document.getElementById("result");

const name = document.getElementById("name");
var age = document.getElementById("age");
var gender = document.querySelectorAll('input[name="gender"]');
var password = document.getElementById("password");
var email = document.getElementById("email");
var errorName = document.getElementById("error_name");
var errorAge = document.getElementById("error_age");
var errorEmail = document.getElementById("error_email");
var errorPassword = document.getElementById("error_password");
var errorGender = document.getElementById("error_gender");



function validate() {
    let isValid = true;
    const genders = document.querySelector('input[name="gender"]:checked');
    if (name.value.trim() === "") {
        errorName.textContent = "Please fill the name";
        isValid = false;
    }
    else {
        errorName.textContent = "";
    }

    if (age.value.trim() === "" || age.value <= 0) {
        errorAge.textContent = "Please enter a valid age";
        isValid = false;
    }
    else {
        errorAge.textContent = "";
    }

    if (email.value.trim() === "" || !email.checkValidity()) {
        errorEmail.textContent = "Please fill the correct email address";
        isValid = false;
    }
    else {
        errorEmail.textContent = "";
    }

    if (!genders) {
        errorGender.textContent = "Please select a gender";
        isValid = false;
    }
    else {
        errorGender.textContent = "";
    }

    if (password.value.trim() === "" || password.value.trim().length < 6) {
        errorPassword.textContent = "Please enter a 6 character password";
        isValid = false;
    }
    else {
        errorPassword.textContent = "";
    }

    btn.disabled = !isValid;
}

name.addEventListener("input", validate);
age.addEventListener("input", validate);
email.addEventListener("input", validate);
password.addEventListener("input", validate);
gender.forEach(g => {
    g.addEventListener("change", validate);
});


btn.addEventListener("click", function () {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    const genders = document.querySelector('input[name="gender"]:checked');
    students.push({
        name: name.value,
        age: age.value,
        gender: genders.value,
        password: password.value,
        email: email.value
    });

    localStorage.setItem("students", JSON.stringify(students));

    console.log(localStorage.getItem("students"));
    alert("Registration done successfully");

    location.href = "member.html";

})

