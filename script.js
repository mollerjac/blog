function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

loadContent('post/fraprojektledertilit.html', 'fraprojektledertilit');
loadContent('post/forsteskoledag.html', 'forsteskoledag');
