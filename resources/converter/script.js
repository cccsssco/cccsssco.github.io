let measurementOptions = `     
        <option value=" " disabled selected>...Choose...</option>
        <option value="nanometers">Nanometers</option>
        <option value="micrometers">Micrometers</option>
        <option value="millimeters">Millimeters</option>
        <option value="meters">Meters</option>
        <option value="centimeters">Centimeters</option>
        <option value="kilometers">Kilometers</option>
        <option value="mile">Miles</option>
        <option value="yard">Yards</option>
        <option value="foot">Foot</option>
        <option value="inch">Inches</option>
        <option value="nauticalMile">Nautical Mile</option>
        `;
let temperatureOptions = `     
        <option value=" " disabled selected>...Choose...</option>
        <option value="celcius">Celcius</option>
        <option value="farenheit">Farenheit</option>
        <option value="kelvin">Kelvin</option>
        `;
let conversionOptions = document.getElementById("type-of-conversions");
let inputOptions = document.getElementById("inputConversion");
let outputOptions = document.getElementById("outputConversion");
conversionOptions.addEventListener("change", function () {
  if (conversionOptions.value == "measurement") {
    inputOptions.innerHTML = measurementOptions;
    outputOptions.innerHTML = measurementOptions;
  }
  if (conversionOptions.value == "temperature") {
    inputOptions.innerHTML = temperatureOptions;
    outputOptions.innerHTML = temperatureOptions;
  }
});
function conversion() {
  let input = document.getElementById("inputConversionInput").value;
  let output = document.getElementById("inputConversionOutput");
  if (conversionOptions.value == "temperature") {
    if (inputOptions.value == outputOptions.value) {
      output.value = input;
    }
    if (inputOptions.value == "celcius" && outputOptions.value == "farenheit") {
      output.value = celciusToFarenheit(input);
    }
    if (inputOptions.value == "farenheit" && outputOptions.value == "celcius") {
      output.value = farenheitToCelcius(input);
    }
    if (inputOptions.value == "celcius" && outputOptions.value == "kelvin") {
      output.value = celciusToKelvin(input);
    }
    if (inputOptions.value == "kelvin" && outputOptions.value == "celcius") {
      output.value = kelvinToCelcius(input);
    }
    if (inputOptions.value == "farenheit" && outputOptions.value == "kelvin") {
      output.value = farenheitToKelvin(input);
    }
    if (inputOptions.value == "kelvin" && outputOptions.value == "farenheit") {
      output.value = kelvinToFarenheit(input);
    }
  }
  if (conversionOptions.value == "measurement") {
    if (
      inputOptions.value == "nanometers" &&
      outputOptions.value == "micrometers"
    ) {
      output.value = dividedByThousand(input);
    }
    if (
      inputOptions.value == "micrometers" &&
      outputOptions.value == "nanometers"
    ) {
      output.value = timesThousand(input);
    }
    if (
      inputOptions.value == "nanometers" &&
      outputOptions.value == "millimeters"
    ) {
      output.value = dividedBy1e6(input);
    }
    if (
      inputOptions.value == "millimeters" &&
      outputOptions.value == "nanometers"
    ) {
      output.value = times1e6(input);
    }
    if (
      inputOptions.value == "nanometers" &&
      outputOptions.value == "centimeters"
    ) {
      output.value = dividedBy1e7(input);
    }
    if (
      inputOptions.value == "centimeters" &&
      outputOptions.value == "nanometers"
    ) {
      output.value = times1e7(input);
    }
    if (inputOptions.value == "nanometers" && outputOptions.value == "meters") {
      output.value = dividedBy1e9(input);
    }
    if (inputOptions.value == "meters" && outputOptions.value == "nanometers") {
      output.value = times1e9(input);
    }
    if (
      inputOptions.value == "nanometers" &&
      outputOptions.value == "kilometers"
    ) {
      output.value = dividedBy1e12(input);
    }
    if (
      inputOptions.value == "kilometers" &&
      outputOptions.value == "nanometers"
    ) {
      output.value = times1e12(input);
    }
    if (
      inputOptions.value == "micrometers" &&
      outputOptions.value == "millimeters"
    ) {
      output.value = dividedByThousand(input);
    }
    if (
      inputOptions.value == "millimeters" &&
      outputOptions.value == "micrometers"
    ) {
      output.value = timesThousand(input);
    }
    if (
      inputOptions.value == "micrometers" &&
      outputOptions.value == "centimeters"
    ) {
      output.value = dividedByTenThousand(input);
    }
    if (
      inputOptions.value == "centimeters" &&
      outputOptions.value == "micrometers"
    ) {
      output.value = timesTenThousand(input);
    }
    if (
      inputOptions.value == "micrometers" &&
      outputOptions.value == "meters"
    ) {
      output.value = dividedBy1e6(input);
    }
    if (
      inputOptions.value == "meters" &&
      outputOptions.value == "micrometers"
    ) {
      output.value = times1e6(input);
    }
    if (
      inputOptions.value == "micrometers" &&
      outputOptions.value == "kilometers"
    ) {
      output.value = dividedBy1e9(input);
    }
    if (
      inputOptions.value == "kilometers" &&
      outputOptions.value == "micrometers"
    ) {
      output.value = times1e9(input);
    }
    if (
      inputOptions.value == "millimeters" &&
      outputOptions.value == "centimeters"
    ) {
      output.value = dividedByTen(input);
    }
    if (
      inputOptions.value == "centimeters" &&
      outputOptions.value == "millimeters"
    ) {
      output.value = timesTen(input);
    }
    if (
      inputOptions.value == "millimeters" &&
      outputOptions.value == "meters"
    ) {
      output.value = dividedByThousand(input);
    }
    if (
      inputOptions.value == "meters" &&
      outputOptions.value == "millimeters"
    ) {
      output.value = timesThousand(input);
    }
    if (
      inputOptions.value == "millimeters" &&
      outputOptions.value == "kilometers"
    ) {
      output.value = dividedBy1e6(input);
    }
    if (
      inputOptions.value == "kilometers" &&
      outputOptions.value == "millimeters"
    ) {
      output.value = times1e6(input);
    }
    if (
      inputOptions.value == "centimeters" &&
      outputOptions.value == "meters"
    ) {
      output.value = dividedByHundred(input);
    }
    if (
      inputOptions.value == "meters" &&
      outputOptions.value == "centimeters"
    ) {
      output.value = timesHundred(input);
    }
    if (
      inputOptions.value == "centimeters" &&
      outputOptions.value == "meters"
    ) {
      output.value = dividedByHundredThousand(input);
    }
    if (
      inputOptions.value == "meters" &&
      outputOptions.value == "centimeters"
    ) {
      output.value = timesHundredThousand(input);
    }
    if (inputOptions.value == "meters" && outputOptions.value == "kilometers") {
      output.value = dividedByThousand(input);
    }
    if (
      inputOptions.value == "kilometers" &&
      outputOptions.value == "centimeters"
    ) {
      output.value = timesThousand(input);
    }
    if (inputOptions.value == "mile" && outputOptions.value == "yard") {
      output.value = mileToYard(input);
    }
    if (inputOptions.value == "yard" && outputOptions.value == "mile") {
      output.value = yardToMile(input);
    }
    if (inputOptions.value == "mile" && outputOptions.value == "foot") {
      output.value = mileToFoot(input);
    }
    if (inputOptions.value == "foot" && outputOptions.value == "mile") {
      output.value = footToMile(input);
    }
    if (inputOptions.value == "mile" && outputOptions.value == "inch") {
      output.value = mileToInch(input);
    }
    if (inputOptions.value == "inch" && outputOptions.value == "mile") {
      output.value = inchToMile(input);
    }
    if (inputOptions.value == "mile" && outputOptions.value == "nauticalMile") {
      output.value = mileToNauticalMile(input);
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "mile") {
      output.value = nauticalMileToMile(input);
    }
    if (inputOptions.value == "yard" && outputOptions.value == "foot") {
      output.value = yardToFoot(input);
    }
    if (inputOptions.value == "foot" && outputOptions.value == "yard") {
      output.value = footToYard(input);
    }
    if (inputOptions.value == "yard" && outputOptions.value == "inch") {
      output.value = yardToInch(input);
    }
    if (inputOptions.value == "inch" && outputOptions.value == "yard") {
      output.value = inchToYard(input);
    }
    if (inputOptions.value == "yard" && outputOptions.value == "nauticalMile") {
      output.value = yardToNauticalMile(input);
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "yard") {
      output.value = nauticalMileToYard(input);
    }
    if (inputOptions.value == "foot" && outputOptions.value == "inch") {
      output.value = footToInch(input);
    }
    if (inputOptions.value == "inch" && outputOptions.value == "foot") {
      output.value = inchToFoot(input);
    }
    if (inputOptions.value == "foot" && outputOptions.value == "nauticalMile") {
      output.value = footToNauticalMile(input);
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "foot") {
      output.value = nauticalMileToFoot(input);
    }
    if (inputOptions.value == "inch" && outputOptions.value == "nauticalMile") {
      output.value = inchToNauticalMile(input);
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "inch") {
      output.value = nauticalMileToInch(input);
    }
    if (inputOptions.value == "mile" && outputOptions.value == "nanometers") {
      output.value = times1e7(mileToCentimeter(input));
    }
    if (inputOptions.value == "nanometers" && outputOptions.value == "mile") {
      output.value = dividedBy1e7(centimeterToMile(input));
    }
    if (inputOptions.value == "mile" && outputOptions.value == "micrometers") {
      output.value = timesTenThousand(mileToCentimeter(input));
    }
    if (inputOptions.value == "micrometers" && outputOptions.value == "mile") {
      output.value = dividedByTenThousand(centimeterToMile(input));
    }
    if (inputOptions.value == "mile" && outputOptions.value == "millimeters") {
      output.value = timesTen(mileToCentimeter(input));
    }
    if (inputOptions.value == "millimeters" && outputOptions.value == "mile") {
      output.value = dividedByTen(centimeterToMile(input));
    }
    if (inputOptions.value == "mile" && outputOptions.value == "centimeters") {
      output.value = mileToCentimeter(input);
    }
    if (inputOptions.value == "centimeters" && outputOptions.value == "mile") {
      output.value = centimeterToMile(input);
    }
    if (inputOptions.value == "mile" && outputOptions.value == "meters") {
      output.value = dividedByHundred(mileToCentimeter(input));
    }
    if (inputOptions.value == "meters" && outputOptions.value == "mile") {
      output.value = timesHundred(centimeterToMile(input));
    }
    if (inputOptions.value == "mile" && outputOptions.value == "kilometers") {
      output.value = dividedByHundredThousand(mileToCentimeter(input));
    }
    if (inputOptions.value == "kilometers" && outputOptions.value == "mile") {
      output.value = timesHundredThousand(centimeterToMile(input));
    }
    if (inputOptions.value == "yard" && outputOptions.value == "nanometers") {
      output.value = times1e7(mileToCentimeter(yardToMile(input)));
    }
    if (inputOptions.value == "nanometers" && outputOptions.value == "yard") {
      output.value = dividedBy1e7(centimeterToMile(mileToYard(input)));
    }
    if (inputOptions.value == "yard" && outputOptions.value == "micrometers") {
      output.value = timesTenThousand(mileToCentimeter(yardToMile(input)));
    }
    if (inputOptions.value == "micrometers" && outputOptions.value == "yard") {
      output.value = dividedByTenThousand(centimeterToMile(mileToYard(input)));
    }
    if (inputOptions.value == "yard" && outputOptions.value == "millimeters") {
      output.value = timesTen(mileToCentimeter(yardToMile(input)));
    }
    if (inputOptions.value == "millimeters" && outputOptions.value == "yard") {
      output.value = dividedByTen(centimeterToMile(mileToYard(input)));
    }
    if (inputOptions.value == "yard" && outputOptions.value == "centimeters") {
      output.value = mileToCentimeter(yardToMile(input));
    }
    if (inputOptions.value == "centimeters" && outputOptions.value == "mile") {
      output.value = centimeterToMile(mileToYard(input));
    }
    if (inputOptions.value == "yard" && outputOptions.value == "meters") {
      output.value = dividedByHundred(mileToCentimeter(yardToMile(input)));
    }
    if (inputOptions.value == "meters" && outputOptions.value == "yard") {
      output.value = timesHundred(centimeterToMile(mileToYard(input)));
    }
    if (inputOptions.value == "yard" && outputOptions.value == "kilometers") {
      output.value = dividedByHundredThousand(
        mileToCentimeter(yardToMile(input))
      );
    }
    if (inputOptions.value == "kilometers" && outputOptions.value == "yard") {
      output.value = timesHundredThousand(centimeterToMile(mileToYard(input)));
    }
    if (inputOptions.value == "foot" && outputOptions.value == "nanometers") {
      output.value = times1e7(mileToCentimeter(footToMile(input)));
    }
    if (inputOptions.value == "nanometers" && outputOptions.value == "foot") {
      output.value = dividedBy1e7(centimeterToMile(mileToFoot(input)));
    }
    if (inputOptions.value == "foot" && outputOptions.value == "micrometers") {
      output.value = timesTenThousand(mileToCentimeter(footToMile(input)));
    }
    if (inputOptions.value == "micrometers" && outputOptions.value == "foot") {
      output.value = dividedByTenThousand(centimeterToMile(mileToFoot(input)));
    }
    if (inputOptions.value == "foot" && outputOptions.value == "millimeters") {
      output.value = timesTen(mileToCentimeter(footToMile(input)));
    }
    if (inputOptions.value == "millimeters" && outputOptions.value == "foot") {
      output.value = dividedByTen(centimeterToMile(mileToFoot(input)));
    }
    if (inputOptions.value == "foot" && outputOptions.value == "centimeters") {
      output.value = mileToCentimeter(footToMile(input));
    }
    if (inputOptions.value == "centimeters" && outputOptions.value == "foot") {
      output.value = centimeterToMile(mileToFoot(input));
    }
    if (inputOptions.value == "foot" && outputOptions.value == "meters") {
      output.value = dividedByHundred(mileToCentimeter(footToMile(input)));
    }
    if (inputOptions.value == "meters" && outputOptions.value == "foot") {
      output.value = timesHundred(centimeterToMile(mileToFoot(input)));
    }
    if (inputOptions.value == "foot" && outputOptions.value == "kilometers") {
      output.value = dividedByHundredThousand(
        mileToCentimeter(footToMile(input))
      );
    }
    if (inputOptions.value == "kilometers" && outputOptions.value == "foot") {
      output.value = timesHundredThousand(centimeterToMile(mileToFoot(input)));
    }
    if (inputOptions.value == "inch" && outputOptions.value == "nanometers") {
      output.value = times1e7(mileToCentimeter(inchToMile(input)));
    }
    if (inputOptions.value == "nanometers" && outputOptions.value == "inch") {
      output.value = dividedBy1e7(centimeterToMile(mileToInch(input)));
    }
    if (inputOptions.value == "inch" && outputOptions.value == "micrometers") {
      output.value = timesTenThousand(mileToCentimeter(inchToMile(input)));
    }
    if (inputOptions.value == "micrometers" && outputOptions.value == "inch") {
      output.value = dividedByTenThousand(centimeterToMile(mileToInch(input)));
    }
    if (inputOptions.value == "inch" && outputOptions.value == "millimeters") {
      output.value = timesTen(mileToCentimeter(inchToMile(input)));
    }
    if (inputOptions.value == "millimeters" && outputOptions.value == "inch") {
      output.value = dividedByTen(centimeterToMile(mileToInch(input)));
    }
    if (inputOptions.value == "inch" && outputOptions.value == "centimeters") {
      output.value = mileToCentimeter(inchToMile(input));
    }
    if (inputOptions.value == "centimeters" && outputOptions.value == "inch") {
      output.value = centimeterToMile(mileToInch(input));
    }
    if (inputOptions.value == "inch" && outputOptions.value == "meters") {
      output.value = dividedByHundred(mileToCentimeter(inchToMile(input)));
    }
    if (inputOptions.value == "meters" && outputOptions.value == "inch") {
      output.value = timesHundred(centimeterToMile(mileToInch(input)));
    }
    if (inputOptions.value == "inch" && outputOptions.value == "kilometers") {
      output.value = dividedByHundredThousand(
        mileToCentimeter(inchToMile(input))
      );
    }
    if (inputOptions.value == "kilometers" && outputOptions.value == "inch") {
      output.value = timesHundredThousand(centimeterToMile(mileToInch(input)));
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "nanometers") {
      output.value = times1e7(mileToCentimeter(nauticalMileToMile(input)));
    }
    if (inputOptions.value == "nanometers" && outputOptions.value == "nauticalMile") {
      output.value = dividedBy1e7(centimeterToMile(mileToNauticalMile(input)));
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "micrometers") {
      output.value = timesTenThousand(mileToCentimeter(nauticalMileToMile(input)));
    }
    if (inputOptions.value == "micrometers" && outputOptions.value == "nauticalMile") {
      output.value = dividedByTenThousand(mileToNauticalMile(mileToYard(input)));
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "millimeters") {
      output.value = timesTen(mileToCentimeter(nauticalMileToMile(input)));
    }
    if (inputOptions.value == "millimeters" && outputOptions.value == "nauticalMile") {
      output.value = dividedByTen(centimeterToMile(mileToNauticalMile(input)));
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "centimeters") {
      output.value = mileToCentimeter(nauticalMileToMile(input));
    }
    if (inputOptions.value == "centimeters" && outputOptions.value == "nauticalMile") {
      output.value = centimeterToMile(mileToNauticalMile(input));
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "meters") {
      output.value = dividedByHundred(mileToCentimeter(nauticalMileToMile(input)));
    }
    if (inputOptions.value == "meters" && outputOptions.value == "nauticalMile") {
      output.value = timesHundred(centimeterToMile(mileToNauticalMile(input)));
    }
    if (inputOptions.value == "nauticalMile" && outputOptions.value == "kilometers") {
      output.value = dividedByHundredThousand(
        mileToCentimeter(nauticalMileToMile(input))
      );
    }
    if (inputOptions.value == "kilometers" && outputOptions.value == "nauticalMile") {
      output.value = timesHundredThousand(centimeterToMile(mileToNauticalMile(input)));
    }
  }
}
function celciusToFarenheit(celcius) {
  return celcius * (9 / 5) + 32;
}
function farenheitToCelcius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}
function celciusToKelvin(celcius) {
  return parseFloat(celcius + 273.15);
}
function kelvinToCelcius(kelvin) {
  return kelvin - 273.15;
}
function farenheitToKelvin(farenheit) {
  return farenheitToCelcius(farenheit) + 273.15;
}
function kelvinToFarenheit(kelvin) {
  return celciusToFarenheit(kelvinToCelcius(kelvin));
}
function timesTen(input) {
  return input * 10;
}
function dividedByTen(input) {
  return input / 10;
}
function timesHundred(input) {
  return input * 100;
}
function dividedByHundred(input) {
  return input / 100;
}
function timesThousand(input) {
  return input * 1000;
}
function dividedByThousand(input) {
  return input / 1000;
}
function timesTenThousand(input) {
  return input * 10000;
}

function dividedByTenThousand(input) {
  return input / 10000;
}
function timesHundredThousand(input) {
  return input * 100000;
}
function dividedByHundredThousand(input) {
  return input / 100000;
}
function times1e6(input) {
  return input * 1e6;
}
function dividedBy1e6(input) {
  return input / 1e6;
}
function times1e7(input) {
  return input * 1e7;
}
function dividedBy1e7(input) {
  return input / 1e7;
}
function times1e9(input) {
  return input * 1e9;
}
function dividedBy1e9(input) {
  return input / 1e9;
}
function times1e12(input) {
  return input * 1e12;
}
function dividedBy1e12(input) {
  return input / 1e12;
}
function mileToYard(mile) {
  return mile * 1760;
}
function yardToMile(yard) {
  return yard / 1760;
}
function mileToFoot(mile) {
  return mileToYard(mile) * 3;
}
function footToMile(foot) {
  return yardToMile(foot) / 3;
}
function mileToInch(mile) {
  return mileToFoot(mile) * 12;
}
function inchToMile(inch) {
  return footToMile(inch) / 12;
}
function mileToNauticalMile(mile) {
  return mile / 1.151;
}
function nauticalMileToMile(nauticalMile) {
  return nauticalMile * 1.151;
}
function yardToFoot(yard) {
  return yard * 3;
}
function footToYard(foot) {
  return foot / 3;
}
function yardToInch(yard) {
  return yard * 36;
}
function inchToYard(inch) {
  return inch / 36;
}
function yardToNauticalMile(yard) {
  return yard / 2025;
}
function nauticalMileToYard(nauticalMile) {
  return nauticalMile * 2025;
}
function footToInch(foot) {
  return foot * 12;
}
function inchToFoot(inch) {
  return inch / 12;
}
function footToNauticalMile(foot) {
  return foot / 6076;
}
function nauticalMileToFoot(nauticalMile) {
  return nauticalMile * 6076;
}
function inchToNauticalMile(inch) {
  return inch * 72913;
}
function nauticalMileToInch(nauticalMile) {
  return nauticalMile / 72913;
}
function mileToCentimeter(mile) {
  return mile * 160934;
}
function centimeterToMile(centimeter) {
  return centimeter / 160934;
}
function yardToCentimeter(yard) {
  return mileToCentimeter(yardToMile(yard));
}
function footToCentimeter(foot) {
  return mileToCentimeter(footToMile(foot));
}
function inchToCentimeter(inch) {
  return mileToCentimeter(inchToMile(inch));
}
function nauticalMileToCentimeter(nauticalMile) {
  return mileToCentimeter(nauticalMileToMile(nauticalMile));
}
