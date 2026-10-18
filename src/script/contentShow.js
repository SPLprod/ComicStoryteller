console.log("content view init ♦");


function setContent(pagename) {
    // console.log("tu as cliqué : " + pagename);
    const PageContent = document.getElementById("page-content");
    fetch("/pages/"+pagename+".html")
    .then(res => res.text())
    .then(data => PageContent.innerHTML = data);
}

// default
setContent("home");