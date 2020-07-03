let img;
function image(img) {
    img.onclick = function () {
      var modal = document.getElementById("myModal");
      // Get the image and insert it inside the modal - use its "alt" text as a caption
  
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      modal.style.display = "flex";
      modal.style.height = "100vh"
      modal.style.overflow = "scroll"
      modal.style.alignItems = "center";
      modal.style.justifyContent = "space-evenly"
      modal.style.flexWrap = "wrap"
  
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
        } else {
          modalImg.style.display = "block";
  
        }
  
      }
      // Get the <span> element that closes the modal
    }
}