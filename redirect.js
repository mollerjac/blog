document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    if (path.endsWith(".html")) {
        var newPath = path.slice(0, -5);
        window.history.replaceState(null, "", newPath);
    }
});
