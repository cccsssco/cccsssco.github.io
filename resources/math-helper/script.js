function areaSquare() {
  let side = document.getElementById("aoas-input").value;
  document.getElementById("aoas-output").placeholder = (side ** 2);

}
function perimeterSquare() {
  let side = document.getElementById("poas-input").value;
  document.getElementById("poas-output").placeholder = (side * 4);
}
function areaCircle() {
  let radius = document.getElementById("aoac-input").value;
  document.getElementById("aoac-output").placeholder = (Math.PI * (radius ** 2)) + " |or| " + Math.round(((Math.PI * (radius ** 2)) + Number.EPSILON) * 100) / 100;
} function perimeterCircle() {
  let radius = document.getElementById("poac-input").value;
  document.getElementById("poac-output").placeholder = (Math.PI * (radius * 2)) + " |or| " + Math.round(((Math.PI * (radius * 2)) + Number.EPSILON) * 100) / 100;
}
function areaRectangle() {
  let length = document.getElementById("aoar-input-x").value;
  let width = document.getElementById("aoar-input-y").value;
  document.getElementById("aoar-output").placeholder = (length * width);

}
function perimeterRectangle() {
  let length = document.getElementById("poar-input-x").value;
  let width = document.getElementById("poar-input-y").value;
  document.getElementById("poar-output").placeholder = ((length * 2) + (width * 2));

}
function areaTriangle() {
  let base = document.getElementById("aoat-input-x").value;
  let height = document.getElementById("aoat-input-y").value;
  let output = (base * height) / 2;
  document.getElementById("aoat-output").placeholder = output;
}
function perimeterTriangle() {
  let side1 = document.getElementById("poat-input-x").value;
  let side2 = document.getElementById("poat-input-y").value;
  let side3 = document.getElementById("poat-input-z").value;
  let output = parseInt(side1) + parseInt(side2) + parseInt(side3);
  document.getElementById("poat-output").placeholder = output;
}
function volume3DRectangle() {
  let length = document.getElementById("voa3dr-input-x").value;
  let width = document.getElementById("voa3dr-input-y").value;
  let height = document.getElementById("voa3dr-input-z").value;
  let output = length * width * height;
  document.getElementById("voa3dr-output").placeholder = output;
}
function volumeCube() {
  let side = document.getElementById("voacb-input").value;
  let output = side ** 3;
  document.getElementById("voacb-output").placeholder = output;
}
function volumeCylinder() {
  let area = document.getElementById("voac-input-x").value;
  let height = document.getElementById("voac-input-y").value;
  let output = area * height;
  document.getElementById("voac-output").placeholder = output;
}
function volumeCone() {
  let area = document.getElementById("voacn-input-x").value;
  let height = document.getElementById("voacn-input-y").value;
  let output = (area * height) / 3;
  document.getElementById("voacn-output").placeholder = output;
}
function averageSpeed() {
  let distance = document.getElementById("as-input-x").value;
  let time = document.getElementById("as-input-y").value;
  let output = distance / time;
  document.getElementById("as-output").placeholder = output;
}
function acceleration() {
  let finalVelocity = document.getElementById("a-input-x").value;
  let initialVelocity = document.getElementById("a-input-y").value;
  let time = document.getElementById("a-input-z").value;
  let output = (finalVelocity - initialVelocity) / time;
  document.getElementById("a-output").placeholder = output;
}
function density() {
  let mass = document.getElementById("d-input-x").value;
  let volume = document.getElementById("d-input-y").value;
  let output = mass / volume;
  document.getElementById("d-output").placeholder = output;
}
function newtonsSecondLaw() {
  let mass = document.getElementById("nsl-input-x").value;
  let acceleration = document.getElementById("nsl-input-y").value;
  let output = mass * acceleration;
  document.getElementById("nsl-output").placeholder = output;
}
function power() {
  let work = document.getElementById("p-input-x").value;
  let time = document.getElementById("p-input-y").value;
  let output = work / time;
  console.log(output, work, time);
  document.getElementById("p-output").placeholder = output;
}
function weight() {
  let mass = document.getElementById("w-input-x").value;
  let acceleration = document.getElementById("w-input-y").value;
  let output = mass * acceleration;
  document.getElementById("w-output").placeholder = output;
}
function pressure() {
  let force = document.getElementById("psr-input-x").value;
  let area = document.getElementById("psr-input-y").value;
  let output = force / area;
  document.getElementById("psr-output").placeholder = output;
}
function kineticEnergy() {
  let mass = document.getElementById("ke-input-x").value;
  let velocity = document.getElementById("ke-input-y").value;
  let output = (mass * (velocity ** 2)) / 2
  document.getElementById("ke-output").placeholder = output;
}
function ohmsLaw() {
  let current = document.getElementById("ol-input-x").value;
  let resistance = document.getElementById("ol-input-y").value;
  let output = current * resistance;
  document.getElementById("ol-output").placeholder = output;
}
function frequency() {
  let velocity = document.getElementById("f-input-x").value;
  let wavelength = document.getElementById("f-input-y").value;
  let output = velocity / wavelength;
  document.getElementById("f-output").placeholder = output;
}
function boylesLaw() {
  let p1 = document.getElementById("bl-input-w").value;
  let v1 = document.getElementById("bl-input-x").value;
  let p2 = document.getElementById("bl-input-y").value;
  let v2 = document.getElementById("bl-input-z").value;
  let output;
  if (p1 == '') {
    output = (v2 * p2) / v1;
    document.getElementById("bl-input-w").value = output;
  }
  if (v1 == '') {
    output = (v2 * p2) / p1;
    document.getElementById("bl-input-x").value = output;
  }
  if (p2 == '') {
    output = (v1 * p1) / v2;
    document.getElementById("bl-input-y").value = output;
  }
  if (v2 == '') {
    output = (v1 * p1) / p2;
    document.getElementById("bl-input-z").value = output;
  }

}
function charlesLaw() {
  let v1 = document.getElementById("cl-input-w").value;
  let t1 = document.getElementById("cl-input-x").value;
  let v2 = document.getElementById("cl-input-y").value;
  let t2 = document.getElementById("cl-input-z").value;
  let output;
  if (v1 == '') {
    output = (v2 * t1) / t2;
    document.getElementById("cl-input-w").value = output;
  }
  if (t1 == '') {
    output = (v1 * t2) / v2;
    document.getElementById("cl-input-x").value = output;
  }
  if (v2 == '') {
    output = (v1 * t2) / t1;
    document.getElementById("cl-input-y").value = output;
  }
  if (t2 == '') {
    output = (t1 * v2) / v1;
    document.getElementById("cl-input-z").value = output;
  }

}
function gayLussacsLaw() {
  let p1 = document.getElementById("gl-input-w").value;
  let t1 = document.getElementById("gl-input-x").value;
  let p2 = document.getElementById("gl-input-y").value;
  let t2 = document.getElementById("gl-input-z").value;
  let output;
  if (p1 == '') {
    output = (p2 * t1) / t2;
    document.getElementById("gl-input-w").value = output;
  }
  if (t1 == '') {
    output = (p1 * t2) / p2;
    document.getElementById("gl-input-x").value = output;
  }
  if (p2 == '') {
    output = (p1 * t2) / t1;
    document.getElementById("gl-input-y").value = output;
  }
  if (t2 == '') {
    output = (p2 * t1) / p1;
    document.getElementById("gl-input-z").value = output;
  }

}
function avogadrosLaw() {
  let v1 = document.getElementById("al-input-w").value;
  let n1 = document.getElementById("al-input-x").value;
  let v2 = document.getElementById("al-input-y").value;
  let n2 = document.getElementById("al-input-z").value;
  let output;
  if (v1 == '') {
    output = (v2 * n1) / n2;
    document.getElementById("al-input-w").value = output;
  }
  if (n1 == '') {
    output = (v1 * n2) / v2;
    document.getElementById("al-input-x").value = output;
  }
  if (v2 == '') {
    output = (v1 * n2) / n1;
    document.getElementById("al-input-y").value = output;
  }
  if (n2 == '') {
    output = (n1 * v2) / v1;
    document.getElementById("al-input-z").value = output;
  }

}
function combinedGasLaw() {
  let p1 = document.getElementById("cg-input-u").value;
  let v1 = document.getElementById("cg-input-v").value;
  let t1 = document.getElementById("cg-input-w").value;
  let p2 = document.getElementById("cg-input-x").value;
  let v2 = document.getElementById("cg-input-y").value;
  let t2 = document.getElementById("cg-input-z").value;
  let output;
  if (p1 == '') {
    output = (p2 * v2 * t1) / (v1 * t2);
    document.getElementById("cg-input-u").value = output;
  }
  if (v1 == '') {
    output = (p2 * v2 * t1) / (p1 * t2);
    document.getElementById("cg-input-v").value = output;
  }
  if (t1 == '') {
    output = (p1 * v1 * t2) / (p2 * v2);
    document.getElementById("cg-input-w").value = output;
  }
  if (p2 == '') {
    output = (p1 * v1 * t2) / (v2 * t1);
    document.getElementById("cg-input-x").value = output;
  }
  if (v2 == '') {
    output = (p1 * v1 * t2) / (p2 * t1);
    document.getElementById("cg-input-y").value = output;
  }
  if (t2 == '') {
    output = (p2 * v2 * t1) / (p1 * v1);
    document.getElementById("cg-input-z").value = output;
  }

}
