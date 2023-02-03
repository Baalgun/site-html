function toggleText() {
    var text = document.getElementById("text");
    var btn = document.getElementById("toggleBtn");
    if(text.style.display === "none") {
        text.style.display = "block";
        btn.innerHTML = "Cacher";
    } else {
        text.style.display = "none";
        btn.innerHTML = "Afficher";
    }
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    if(menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

document.getElementById("Zoom").addEventListener("click", function(){
    this.classList.toggle("zoom");
});
