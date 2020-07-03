
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
  let output = (mass * velocity ** 2) / 2;
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
  if (p1 == "") {
    output = (v2 * p2) / v1;
    document.getElementById("bl-input-w").value = output;
  }
  if (v1 == "") {
    output = (v2 * p2) / p1;
    document.getElementById("bl-input-x").value = output;
  }
  if (p2 == "") {
    output = (v1 * p1) / v2;
    document.getElementById("bl-input-y").value = output;
  }
  if (v2 == "") {
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
  if (v1 == "") {
    output = (v2 * t1) / t2;
    document.getElementById("cl-input-w").value = output;
  }
  if (t1 == "") {
    output = (v1 * t2) / v2;
    document.getElementById("cl-input-x").value = output;
  }
  if (v2 == "") {
    output = (v1 * t2) / t1;
    document.getElementById("cl-input-y").value = output;
  }
  if (t2 == "") {
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
  if (p1 == "") {
    output = (p2 * t1) / t2;
    document.getElementById("gl-input-w").value = output;
  }
  if (t1 == "") {
    output = (p1 * t2) / p2;
    document.getElementById("gl-input-x").value = output;
  }
  if (p2 == "") {
    output = (p1 * t2) / t1;
    document.getElementById("gl-input-y").value = output;
  }
  if (t2 == "") {
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
  if (v1 == "") {
    output = (v2 * n1) / n2;
    document.getElementById("al-input-w").value = output;
  }
  if (n1 == "") {
    output = (v1 * n2) / v2;
    document.getElementById("al-input-x").value = output;
  }
  if (v2 == "") {
    output = (v1 * n2) / n1;
    document.getElementById("al-input-y").value = output;
  }
  if (n2 == "") {
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
  if (p1 == "") {
    output = (p2 * v2 * t1) / (v1 * t2);
    document.getElementById("cg-input-u").value = output;
  }
  if (v1 == "") {
    output = (p2 * v2 * t1) / (p1 * t2);
    document.getElementById("cg-input-v").value = output;
  }
  if (t1 == "") {
    output = (p1 * v1 * t2) / (p2 * v2);
    document.getElementById("cg-input-w").value = output;
  }
  if (p2 == "") {
    output = (p1 * v1 * t2) / (v2 * t1);
    document.getElementById("cg-input-x").value = output;
  }
  if (v2 == "") {
    output = (p1 * v1 * t2) / (p2 * t1);
    document.getElementById("cg-input-y").value = output;
  }
  if (t2 == "") {
    output = (p2 * v2 * t1) / (p1 * v1);
    document.getElementById("cg-input-z").value = output;
  }
}
function gdpExpenditureApproach() {
  let c = document.getElementById("gdpcginx-input-w").value;
  let g = document.getElementById("gdpcginx-input-x").value;
  let i = document.getElementById("gdpcginx-input-y").value;
  let nx = document.getElementById("gdpcginx-input-z").value;
  let gdp = document.getElementById("gdpcginx-output").value;
  if (gdp == "") {
    let output = parseInt(c) + parseInt(g) + parseInt(i) + parseInt(nx);
    document.getElementById("gdpcginx-output").value = output;
  }
  if (c == "") {
    let output = parseInt(gdp) - (parseInt(g) + parseInt(i) + parseInt(nx));
    document.getElementById("gdpcginx-input-w").value = output;
  }
  if (g == "") {
    let output = parseInt(gdp) - (parseInt(c) + parseInt(i) + parseInt(nx));
    document.getElementById("gdpcginx-input-x").value = output;
  }
  if (i == "") {
    let output = parseInt(gdp) - (parseInt(g) + parseInt(c) + parseInt(nx));
    document.getElementById("gdpcginx-input-y").value = output;
  }
  if (nx == "") {
    let output = parseInt(gdp) - (parseInt(g) + parseInt(i) + parseInt(c));
    document.getElementById("gdpcginx-input-z").value = output;
  }
}
function gdpIncomeApproach() {
  let w = document.getElementById("gdpwirp-input-w").value;
  let i = document.getElementById("gdpwirp-input-x").value;
  let r = document.getElementById("gdpwirp-input-y").value;
  let p = document.getElementById("gdpwirp-input-z").value;
  let gdp = document.getElementById("gdpwirp-output").value;
  if (gdp == "") {
    let output = parseInt(w) + parseInt(i) + parseInt(r) + parseInt(p);
    document.getElementById("gdpwirp-output").value = output;
  }
  if (w == "") {
    let output = parseInt(gdp) - (parseInt(i) + parseInt(r) + parseInt(p));
    document.getElementById("gdpwirp-input-w").value = output;
  }
  if (i == "") {
    let output = parseInt(gdp) - (parseInt(w) + parseInt(r) + parseInt(p));
    document.getElementById("gdpwirp-input-x").value = output;
  }
  if (r == "") {
    let output = parseInt(gdp) - (parseInt(w) + parseInt(i) + parseInt(p));
    document.getElementById("gdpwirp-input-y").value = output;
  }
  if (p == "") {
    let output = parseInt(gdp) - (parseInt(w) + parseInt(i) + parseInt(r));
    document.getElementById("gdpwirp-input-z").value = output;
  }
  ur = u / e;
  ure = u;
  e = u / ur;
}
function unemploymentRate() {
  let unemployed = document.getElementById("ur-input-x").value;
  let employed = document.getElementById("ur-input-y").value;
  let unemploymentRate = document.getElementById("ur-output").value;
  if (unemploymentRate == "") {
    let output = (unemployed / employed) * 100;
    document.getElementById("ur-output").value = output;
  }
  if (unemployed == "") {
    let output = (unemploymentRate / 100) * employed;
    document.getElementById("ur-input-x").value = output;
  }
  if (employed == "") {
    let output = unemployed / (unemploymentRate / 100);
    document.getElementById("ur-input-y").value = output;
  }
}
function moneyMultiplierRate() {
  let reservedRatio = document.getElementById("mmr-input-x").value;
  let moneyMultiplierRatio = document.getElementById("mmr-output").value;
  if (moneyMultiplierRatio == "") {
    let output = 1 / reservedRatio;
    document.getElementById("mmr-output").value = output;
  }
  if (reservedRatio == "") {
    let output = 1 / moneyMultiplierRatio;
    document.getElementById("mmr-input-x").value = output;
  }
}
function consumerPriceIndex() {
  let givenYear = document.getElementById("cpi-input-x").value;
  let baseYear = document.getElementById("cpi-input-y").value;
  let cpi = document.getElementById("cpi-output").value;

  if (cpi == "") {
    let output = givenYear / baseYear;
    document.getElementById("cpi-output").value = output;
  }
  if (givenYear == "") {
    let output = cpi * baseYear;
    document.getElementById("cpi-input-x").value = output;
  }
  if (baseYear == "") {
    let output = givenYear / cpi;
    document.getElementById("cpi-input-y").value = output;
  }
}
function inflationRate() {
  let givenDate = document.getElementById("ir-input-x").value;
  let baseDate = document.getElementById("ir-input-y").value;
  let inflationRate = document.getElementById("ir-output").value;

  if (inflationRate == "") {
    let output = (givenDate - baseDate) / baseDate;
    document.getElementById("ir-output").value = output;
  }
  if (givenDate == "") {
    let output = inflationRate * baseDate + parseInt(baseDate);
    document.getElementById("ir-input-x").value = output;
  }
  if (baseDate == "") {
    let output = givenDate - givenDate * (inflationRate / 100);
    document.getElementById("ir-input-y").value = output;
  }
}
function realInterestRate() {
  let nominalInterestRate = document.getElementById("rir-input-x").value;
  let inflationRate = document.getElementById("rir-input-y").value;
  let realInterestRate = document.getElementById("rir-output").value;

  if (realInterestRate == "") {
    let output = nominalInterestRate - inflationRate;
    document.getElementById("rir-output").value = output;
  }
  if (nominalInterestRate == "") {
    let output = parseInt(realInterestRate) + parseInt(inflationRate);
    document.getElementById("rir-input-x").value = output;
  }
  if (inflationRate == "") {
    let output = -realInterestRate + parseInt(nominalInterestRate);
    document.getElementById("rir-input-y").value = output;
  }
}
function quantityTheoryOfMoney() {
  let money = document.getElementById("qtm-input-w").value;
  let speed = document.getElementById("qtm-input-x").value;
  let price = document.getElementById("qtm-input-y").value;
  let transaction = document.getElementById("qtm-input-z").value;

  if (money == "") {
    let output = (price * transaction) / speed;
    document.getElementById("qtm-input-w").value = output;
  }
  if (speed == "") {
    let output = (price * transaction) / money;
    document.getElementById("qtm-input-x").value = output;
  }
  if (price == "") {
    let output = (money * speed) / transaction;
    document.getElementById("qtm-input-y").value = output;
  }
  if (transaction == "") {
    let output = (money * speed) / price;
    document.getElementById("qtm-input-z").value = output;
  }
}
function quadratic() {
  let a = parseInt(document.getElementById("qf-input-x").value);
  let b = parseInt(document.getElementById("qf-input-y").value);
  let c = parseInt(document.getElementById("qf-input-z").value);
  let outputx1 = (-b + Math.sqrt(b ** 2 - 4 * (a * c))) / (2 * a);
  let outputx2 = (-b - Math.sqrt(b ** 2 - 4 * (a * c))) / (2 * a);
  let output1 = "x = " + outputx1;
  let output2 = "x = " + outputx2;
  document.getElementById("qf-output1").value = output1;
  document.getElementById("qf-output2").value = output2;
}
function arithmetic() {
  let an = parseInt(document.getElementById("art-input-w").value);
  let a1 = parseInt(document.getElementById("art-input-x").value);
  let n = parseInt(document.getElementById("art-input-y").value);
  let d = parseInt(document.getElementById("art-input-z").value);
  if (isNaN(an)) {
    let outputan = a1 + (n - 1) * d;
    document.getElementById("art-input-w").value = outputan;
  }
  if (isNaN(a1)) {
    let outputa1 = an - (n - 1) * d;
    document.getElementById("art-input-x").value = outputa1;
  }
  if (isNaN(n)) {
    let outputn = (an - a1) / d + 1;
    document.getElementById("art-input-y").value = outputn;
  }
  if (isNaN(d)) {
    let outputd = (an - a1) / (n - 1);
    document.getElementById("art-input-z").value = outputd;
  }
}
function squareRootFinder() {
  var sqrt = 0;
  sqrt = document.getElementById("srf-input").value;
  var resqrt = sqrt;
  const perfectSquares = [];
  let b = 0;
  for (let i = 0; i < 50; i++) {
    if (sqrt >= (i + 2) ** 2) {
      perfectSquares.push((i + 2) ** 2);
    }
  }
  perfectSquares.sort(function (a, b) {
    return a - b;
  });
  var big = 1;
  for (let i = 0; i < perfectSquares.length; ) {
    if (sqrt % perfectSquares[i] == 0) {
      var outputsqrt =
        Math.sqrt(perfectSquares[i]) * big +
        "√(" +
        sqrt / perfectSquares[i] +
        ")";
      sqrt = sqrt / perfectSquares[i];
      big = Math.sqrt(perfectSquares[i]) * big;
    } else {
      i++;
    }
  }
  if (outputsqrt === undefined) {
    document.getElementById("srf-output").placeholder = Math.sqrt(resqrt);
  } else
    document.getElementById("srf-output").placeholder =
      outputsqrt + " or " + Math.sqrt(resqrt);
}
function cubeRootFinder() {
  var cbrt = 0;
  cbrt = document.getElementById("crf-input").value;
  var recbrt = cbrt;
  const perfectSquares = [];
  let b = 0;
  for (let i = 0; i < 50; i++) {
    if (cbrt >= (i + 2) ** 3) {
      perfectSquares.push((i + 2) ** 3);
    }
  }
  perfectSquares.sort(function (a, b) {
    return a - b;
  });
  var big = 1;
  for (let i = 0; i < perfectSquares.length; ) {
    if (cbrt % perfectSquares[i] == 0) {
      var outputsqrt =
        Math.cbrt(perfectSquares[i]) * big +
        "√(" +
        cbrt / perfectSquares[i] +
        ")";
      cbrt = cbrt / perfectSquares[i];
      big = Math.cbrt(perfectSquares[i]) * big;
    } else {
      i++;
    }
  }
  if (outputsqrt === undefined) {
    document.getElementById("crf-output").placeholder = Math.cbrt(recbrt);
  } else
    document.getElementById("crf-output").placeholder =
      outputsqrt + " or " + Math.cbrt(recbrt);
}
function factorsFinder() {
  var num = document.getElementById("ff-input").value;
  if (num > 1000000) {
    alert("No more than 1 million!");
  } else {
    document.getElementById("ff").innerHTML = "";
    document.getElementById("ff").classList.add("loader");
    setTimeout(function () {
      const factors = [];
      const refactors = [];
      for (let i = 0; i < num + 1; i++) {
        factors.push(i);
      }
      for (let i = 0; i < num + 1; i++) {
        if (num % factors[i] == 0) {
          refactors.push(factors[i]);
        }
      }
      document.getElementById("ff-output").value = refactors;
      document.getElementById("ff").innerHTML = "Submit";
      document.getElementById("ff").classList.remove("loader");
    }, 1000);
  }
}
function oddsFinder() {
  var num = document.getElementById("of-input").value;
  if (num > 1000000) {
    alert("No more than 1 million!");
  } else {
    document.getElementById("of").classList.add("loader");
    document.getElementById("of").innerHTML = "";

    const odds = [];
    setTimeout(function () {
      for (let i = 0; i <= num; i++) {
        if (i % 2 == 1) {
          odds.push(i);
        }
      }
      document.getElementById("of-output").value = odds;
      document.getElementById("of").classList.remove("loader");
      document.getElementById("of").innerHTML = "Submit";
    }, 1000);
  }
}
function primeNumbersFinder() {
  var num = document.getElementById("pnf-input").value;
  let odds = [];

  if (num >= 1000000) {
    alert("No more than or equal to 1 million!");
  } else {
    document.getElementById("pnf").innerHTML = "";
    document.getElementById("pnf").classList.add("loader");
  
      document.getElementById("pnf").innerHTML = "";
      document.getElementById("pnf").classList.add("loader");
      setTimeout(function () {
        for (let i = 0; i <= num; i++) {
          if (i % 2 == 1) {
            odds.push(i);
          }
        }
        var check = odds.length;
        let mod = 3;
        for (let p = 0; p < check; p++) {
          mod = odds[p + 1];
          for (let i = 0; i < check; i++) {
            if (mod ** 2 <= odds[i]) {
              if (odds[i] % mod != 0 || odds[i] / mod == 1) {
                odds.push(odds[i]);
              }
            } else {
              odds.push(odds[i]);
            }
          }
          for (let i = 0; i < check; i++) {
            odds.shift();
          }
          check = odds.length;
        }
        odds.push(2);
        odds.sort((a, b) => a - b);
        document.getElementById("pnf").classList.remove("loader");
        document.getElementById("pnf").innerHTML = "Submit";
        document.getElementById("pnf-output").value = odds;
      }, 1000);
    
  }
}
function primeFactorsFinder() {
  var cbrt = document.getElementById("pff-input").value;
  if (cbrt >= 1000000000) {
    alert("No more than or equal to 1 billion!");
  } else {
    document.getElementById("pff").innerHTML = "";
    document.getElementById("pff").classList.add("loader");
    setTimeout(function () {
      var primeFactors = [];
      const primes = [
        1,
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97,
        101,
        103,
        107,
        109,
        113,
        127,
        131,
        137,
        139,
        149,
        151,
        157,
        163,
        167,
        173,
        179,
        181,
        191,
        193,
        197,
        199,
        211,
        223,
        227,
        229,
        233,
        239,
        241,
        251,
        257,
        263,
        269,
        271,
        277,
        281,
        283,
        293,
        307,
        311,
        313,
        317,
        331,
        337,
        347,
        349,
        353,
        359,
        367,
        373,
        379,
        383,
        389,
        397,
        401,
        409,
        419,
        421,
        431,
        433,
        439,
        443,
        449,
        457,
        461,
        463,
        467,
        479,
        487,
        491,
        499,
        503,
        509,
        521,
        523,
        541,
        547,
        557,
        563,
        569,
        571,
        577,
        587,
        593,
        599,
        601,
        607,
        613,
        617,
        619,
        631,
        641,
        643,
        647,
        653,
        659,
        661,
        673,
        677,
        683,
        691,
        701,
        709,
        719,
        727,
        733,
        739,
        743,
        751,
        757,
        761,
        769,
        773,
        787,
        797,
        809,
        811,
        821,
        823,
        827,
        829,
        839,
        853,
        857,
        859,
        863,
        877,
        881,
        883,
        887,
        907,
        911,
        919,
        929,
        937,
        941,
        947,
        953,
        967,
        971,
        977,
        983,
        991,
        997,
      ];
      for (let i = 0; i < cbrt; ) {
        if (cbrt % primes[i + 1] == 0) {
          cbrt = cbrt / primes[i + 1];
          primeFactors.push(primes[i + 1]);
        } else {
          i++;
        }
      }
      primeFactors.push(cbrt);
      primeFactors.sort((a, b) => a - b);
      console.log(primeFactors);
      document.getElementById("pff").classList.remove("loader");
      document.getElementById("pff").innerHTML = "Submit";
      document.getElementById("pff-output").value = primeFactors;
    }, 1000);
  }
}

