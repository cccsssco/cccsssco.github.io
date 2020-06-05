
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
var i = 0;
function myFunction() {
    i++
    var check = i%2
    var x = document.getElementById("mySidebar");
    if (check === 1) {
      openNav();
    } else {
      closeNav();
    }
  }