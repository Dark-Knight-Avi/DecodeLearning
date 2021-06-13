function validate() {
    var username = document.getElementById("adminId").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "password") {
        alert("logged in successfully");
        window.location.href = "adminProfile.html"
        return false;
    } else {
        alert("login failed");
    }
}