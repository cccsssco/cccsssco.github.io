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
function acceleration(){
  let finalVelocity = document.getElementById("a-input-x").value;
  let initialVelocity = document.getElementById("a-input-y").value;
  let time = document.getElementById("a-input-z").value;
  let output = (finalVelocity - initialVelocity)/time;
  document.getElementById("a-output").placeholder = output;
}
function density(){
  let mass = document.getElementById("d-input-x").value;
  let volume = document.getElementById("d-input-y").value;
  let output = mass/volume;
  document.getElementById("d-output").placeholder = output;
}
function newtonsSecondLaw(){
  let mass = document.getElementById("nsl-input-x").value;
  let acceleration = document.getElementById("nsl-input-y").value;
  let output = mass * acceleration;
  document.getElementById("nsl-output").placeholder = output;
}
function power(){
  let work = document.getElementById("p-input-x").value;
  let time = document.getElementById("p-input-y").value;
  let output = work / time;
  console.log(output, work , time);
  document.getElementById("p-output").placeholder = output;
}
function weight(){
  let mass = document.getElementById("w-input-x").value;
  let acceleration = document.getElementById("w-input-y").value;
  let output = mass * acceleration;
  document.getElementById("w-output").placeholder = output;
}
function pressure(){
 let force = document.getElementById("psr-input-x").value;
 let area = document.getElementById("psr-input-y").value;
 let output = force / area;
 document.getElementById("psr-output").placeholder = output;
}
function kineticEnergy(){
  let mass = document.getElementById("ke-input-x").value;
  let velocity = document.getElementById("ke-input-y").value;
  let output  = (mass * (velocity ** 2))/2
  document.getElementById("ke-output").placeholder = output;
}
function ohmsLaw(){
  let current = document.getElementById("ol-input-x").value;
  let resistance = document.getElementById("ol-input-y").value;
  let output = current * resistance;
  document.getElementById("ol-output").placeholder = output;
}
function frequency(){
  let velocity = document.getElementById("f-input-x").value;
  let wavelength = document.getElementById("f-input-y").value;
  let output = velocity / wavelength;
  document.getElementById("f-output").placeholder = output;
}
