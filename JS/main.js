function toggleMenu() {
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".menuIcon");
    if(menu.classList.contains("open")) {
        menu.classList.remove("open");
    }
    else {
        menu.classList.add("open");
    }
    if(icon.classList.contains("open")) {
        icon.classList.remove("open");
    }
    else {
        icon.classList.add("open");
    }
    console.log("Menu classes:", menu.classList);
    console.log("Icon classes:", icon.classList);
}
