const route = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", e.currentTarget.href);
    handleLocation();
}

const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/how-to-play": "/pages/howtoplay.html",
    "/tutorial-resource": "/pages/tutorial.html",
    "/changelog": "/pages/changelog.html",
    "/about": "/pages/about.html",
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
}

window.onpopstate = handleLocation();
window.route = route;

handleLocation();