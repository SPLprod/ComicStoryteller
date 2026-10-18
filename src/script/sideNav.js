console.log("UX nav init ♥");


const NavBar = document.getElementById("main-nav");
const Page = document.getElementById("page-content");
let openState = false;

Page.addEventListener(("click"), () => {
    if (openState==true) { onOff(); }
})

function onOff() {
    openState = !openState;
    openState ? NavBar.style = "display: flex;" : NavBar.style = "display: none";
}