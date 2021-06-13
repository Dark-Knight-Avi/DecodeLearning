function passvalue() {
    var college = document.getElementById("instName").value;
    localStorage.setItem("textvalue", college);
    return false;
}