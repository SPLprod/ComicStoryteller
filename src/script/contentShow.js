const PageContent = document.getElementById("page-content");

function setContent(pagename) {
    console.log("tu as cliqué : " + pagename);
    
    PageContent.data = "/pages/" + pagename + ".html";
}