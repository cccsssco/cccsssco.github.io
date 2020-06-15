function areaSquare(){
    let side = document.getElementById("aoas-input").value;
   document.getElementById("aoas-output").placeholder = (side ** 2);
    
}
function perimeterSquare(){
     let side = document.getElementById("poas-input").value;
   document.getElementById("poas-output").placeholder = (side * 4);
}
function areaCircle(){
     let radius = document.getElementById("aoac-input").value;
   document.getElementById("aoac-output").placeholder = (Math.PI * (radius ** 2)) + " |or| " + Math.round(( (Math.PI * (radius ** 2)) + Number.EPSILON)*100)/100;
}function perimeterCircle(){
     let radius = document.getElementById("poac-input").value;
   document.getElementById("poac-output").placeholder = (Math.PI * (radius * 2)) + " |or| " + Math.round(( (Math.PI * (radius * 2)) + Number.EPSILON)*100)/100;
}
function areaRectangle(){
    let length = document.getElementById("aoar-input-x").value;
    let width = document.getElementById("aoar-input-y").value;
   document.getElementById("aoar-output").placeholder = (length * width);
    
}
function perimeterRectangle(){
     let length = document.getElementById("poar-input-x").value;
    let width = document.getElementById("poar-input-y").value;
   document.getElementById("poar-output").placeholder = ((length * 2) + (width * 2));
    
}
function areaTriangle(){
  let base;
  let height;
  let output = (base * height) / 2;
}
function perimeterTriangle(){
  let side1;
  let side2;
  let side3;
  let output = side1 + side2 + side3;
}
function volume3DRectangle(){
  let length;
  let width;
  let height;
  let output = length * width * height;
}
function volumeCube(){
  let side;
  let output = side ** 3;
}
function volumeCylinder(){
  let area = document.getElementById("voac-input-x").value;
  let height = document.getElementById("voac-input-y").value;
  let output = area * height;
  document.getElementById("voac-output").placeholder = output;
}
function volumeCone(){
  let area = document.getElementById("voacn-input-x").value;
  let height = document.getElementById("voacn-input-y").value;
  let output = (area * height) / 3;
  document.getElementById("voacn-output").placeholder = output;
}
