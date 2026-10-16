const NavButton = document.getElementById("navbutton");
const NavBar = document.getElementById("main-nav");

let openState = false;

NavButton.addEventListener(("click"),(e) => {
    // e.preventDefault();
    openState = !openState;
    openState ? NavBar.style = "display: flex;" : NavBar.style = "display: none";
})