function toggle() {
    let text = document.getElementById("extra");
    let button = document.getElementsByClassName("button")[0];

    if (text.style.display === "block") {
        text.style.display = "none";
        button.innerHTML = "More"
    } else {
         text.style.display = "block";
         button.innerHTML = "Less";
    }
}