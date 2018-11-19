(function () {
    var head = document.getElementsByTagName('head')[0],
        links = head.getElementsByTagName('link'),
        linksCount = links.length,
        i;

    for (i = 0; i < linksCount; i++) {
        if (!!links[i].dataset.fonts) {
            links[i].href = 'https://fonts.googleapis.com/css?family=' + links[i].dataset.fonts;
        }
    }
}());