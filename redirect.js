document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    if (path.endsWith(".html")) {
        var newPath = path.slice(0, -5);
        window.history.replaceState(null, "", newPath);
    }
});

[[redirects]]
  from = "/forside"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/om-mig"
  to = "/om-mig.html"
  status = 200

[[redirects]]
  from = "/blog"
  to = "/blog.html"
  status = 200
