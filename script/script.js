
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
  var check = i % 1
  var x = document.getElementById("mySidebar");
  if (check === 0) {
    openNav();
  } else {
    closeNav();
  }
}


var img1 = document.getElementById("profile-photo1");
var img2 = document.getElementById("profile-photo2");
var img3 = document.getElementById("profile-photo3");
var img4 = document.getElementById("profile-photo4");
var img5 = document.getElementById("profile-photo5");
if (img1 != null) {
  image(img1);
}
if (img2 != null) {
  image(img2);
}
if (img3 != null) {
  image(img3);
}
if (img4 != null) {
  image(img4);
}
if (img5 != null) {
  image(img5);
}
let b = 0;
function image(img) {
  img.onclick = function () {
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var x = window.matchMedia("(max-width: 400px)")

    function media() {
      modal.style.display = "flex";
      modal.style.height = "100vh"
      modal.style.overflow = "scroll"
      modal.style.flexDirection = "column";
      modal.style.alignItems = "center";
    }
    if (x.matches) {
      media();
    } else {
      modal.style.display = "flex";
      modal.style.height = "100vh"
      modal.style.alignItems = "center";
      modal.style.flexDirection = "row";
      modal.style.justifyContent = "center"
    }
    modalImg.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
    var closeImg = document.getElementsByClassName("modal-content")[0];
    var closeImg1 = document.getElementById("caption");
    
    closeImg.onclick = function () {
      modal.style.display = "none";
    }
    closeImg1.onclick = function () {
      b++
      if (b % 2 == 1) {
        
        modalImg.style.display = "none";
      }else{
        modalImg.style.display = "block";
        
      }

    }
    // Get the <span> element that closes the modal
  }
}
