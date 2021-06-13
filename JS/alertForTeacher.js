function validate() {
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    if (username == "username" && password == "password") {
        alert("logged in successfully");
        window.location.href = "teacherProfile.html"
        return false;
    } else {
        alert("log in failed");
    }
}