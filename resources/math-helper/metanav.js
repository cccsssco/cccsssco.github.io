var i = 1;
var g = 1;
var p = 1;
var e = 1;
var a = 1;
function openMetaNav() {
    let mathnav = document.getElementById("mathnav");
    if (i % 2 == 1) {
        mathnav.style.height = "max-content";
        mathnav.style.padding = "1em";
    } else {
        mathnav.style.padding = "0";
        mathnav.style.height = "0px";
    }
    i++
}
function openMetaNavgeometry() {
    let geometrynav = document.getElementById("geometrynav");
    if (g % 2 == 1) {
        geometrynav.style.height = "max-content";
        geometrynav.style.padding = "1em";
    } else {
        geometrynav.style.padding = "0";
        geometrynav.style.height = "0px";
    }
    g++
}
function openMetaNavphysics() {
    let physicsnav = document.getElementById("physicsnav");
    if (p % 2 == 1) {
        physicsnav.style.height = "max-content";
        physicsnav.style.padding = "1em";
    } else {
        physicsnav.style.padding = "0";
        physicsnav.style.height = "0px";
    }
    p++
}
function openMetaNaveconomics() {
    let economicsnav = document.getElementById("economicsnav");
    if (e % 2 == 1) {
        economicsnav.style.height = "max-content";
        economicsnav.style.padding = "1em";
    } else {
        economicsnav.style.padding = "0";
        economicsnav.style.height = "0px";
    }
    e++
}
function openMetaNavalgebra() {
    let algebranav = document.getElementById("algebranav");
    if (a % 2 == 1) {
        algebranav.style.height = "max-content";
        algebranav.style.padding = "1em";
    } else {
        algebranav.style.padding = "0";
        algebranav.style.height = "0px";
    }
    a++
}
