function validate() {
    var username = document.getElementById("usn").value;
    var password = document.getElementById("password").value;

    if (username == "usn" && password == "password") {
        alert("logged in successfully");
        window.location.href = "studentProfile.html"
        return false;
    } else {
        alert("login failed");
    }
}