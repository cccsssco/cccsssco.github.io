let g = 1;
let i = 1;
function openMetaNav() {
    let mathnav = document.getElementById("converternav");
    if (i % 2 == 1) {
        mathnav.style.height = "max-content";
        mathnav.style.padding = "1em";
    } else {
        mathnav.style.padding = "0";
        mathnav.style.height = "0px";
    }
    i++
}
function openMetaNavMeasurement() {
    let geometrynav = document.getElementById("measurementnav");
    if (g % 2 == 1) {
        geometrynav.style.height = "max-content";
        geometrynav.style.padding = "1em";
    } else {
        geometrynav.style.padding = "0";
        geometrynav.style.height = "0px";
    }
    g++
}