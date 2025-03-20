document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const url = this.getAttribute("href");
            history.pushState(null, "", url);
            loadPage(url);
        });
    });

    window.addEventListener("popstate", function() {
        loadPage(location.pathname);
    });

    function loadPage(url) {
        const page = url === "/" ? "/index.html" : `${url}.html`;
        fetch(page)
            .then(response => response.text())
            .then(data => {
                const main = document.querySelector("main");
                main.innerHTML = ""; // Tømmer main-elementet før nyt indhold indlæses
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                // Find det relevante indhold i tempDiv og flyt det til main
                const newMainContent = tempDiv.querySelector("main");
                if (newMainContent) {
                    main.innerHTML = newMainContent.innerHTML;
                } else {
                    main.innerHTML = data; // Hvis der ikke er et main-element, indlæses hele dataen
                }
            })
            .catch(error => console.error("Error fetching page:", error));
    }

    // Initial page load
    loadPage(location.pathname);
});
