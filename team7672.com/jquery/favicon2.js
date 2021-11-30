function applyIcon (type) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';

    if (type === "dark") {
        link.href = '../images/favicondark.png';
    } else {
        link.href = '../images/faviconlight.png';
    }

    document.getElementsByTagName('head')[0].appendChild(link);
}

var dmQuery = window.matchMedia("(prefers-color-scheme: dark)");
var lmQuery = window.matchMedia("(prefers-color-scheme: light)");

// Check on initial load if dark mode is already there. Apply the dark
// mode favicon if true.
if (dmQuery.matches) {
    applyIcon("dark");
}
if (lmQuery.matches) {
    applyIcon("light");
}
dmQuery.addListener(function(){
    applyIcon("dark")
});

lmQuery.addListener(function(){
    applyIcon("light");
});