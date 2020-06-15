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
  let base = document.getElementById("aoat-input-x").value;
  let height = document.getElementById("aoat-input-y").value;
  let output = (base * height) / 2;
  document.getElementById("aoat-output").placeholder  = output;
}
function perimeterTriangle(){
  let side1 = document.getElementById("poat-input-x").value;
  let side2 = document.getElementById("poat-input-y").value;
  let side3 = document.getElementById("poat-input-z").value;
  let output = parseInt(side1) + parseInt(side2) + parseInt(side3);
  document.getElementById("poat-output").placeholder = output;
}
function volume3DRectangle(){
  let length = document.getElementById("voa3dr-input-x").value;
  let width = document.getElementById("voa3dr-input-y").value;
  let height = document.getElementById("voa3dr-input-z").value;
  let output = length * width * height;
  document.getElementById("voa3dr-output").placeholder = output;
}
function volumeCube(){
  let side = document.getElementById("voacb-input").value;
  let output = side ** 3;
  document.getElementById("voacb-output").placeholder = output;
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
function averageSpeed(){
  let distance = document.getElementById("as-input-x").value;
  let time = document.getElementById("as-input-y").value;
  let output = distance/time;
  document.getElementById("as-output").placeholder = output;
}