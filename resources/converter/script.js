let measurementOptions = `     
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
        <option value="celcius">Celcius</option>
        <option value="farenheit">Farenheit</option>
        <option value="kelvin">Kelvin</option>
        `;
let massOptions = `
        <option value="microgram">Microgram</option>
        <option value="milligram">Milligram</option>
        <option value="gram">Gram</option>
        <option value="kilogram">Kilogram</option>
        <option value="tonne">Tonne</option>
        <option value="imperialTon">Imperial Ton</option>
        <option value="usTon">US Ton</option>
        <option value="stone">Stone</option>
        <option value="pound">Pound</option>
        <option value="ounce">Ounce</option>
        `;
let volumeOptions = `
        <option value="cubicMeters">Cubic Meters</option>
        <option value="liters">Liters</option>
        <option value="milliliters">Milliliters</option>
        <option value="gallon">Gallon</option>
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
  if(conversionOptions.value == "mass"){
    inputOptions.innerHTML = massOptions;
    outputOptions.innerHTML = massOptions;
  }
  if(conversionOptions.value == "volume"){
    inputOptions.innerHTML = volumeOptions;
    outputOptions.innerHTML = volumeOptions;
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
    if(inputOptions.value == outputOptions.value){
      output.value = input;
    }
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
  if(conversionOptions.value == "mass"){
    if(inputOptions.value == outputOptions.value){
      output.value = input;
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'milligram' ){
      output.value = dividedByThousand(input);
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'microgram' ){
      output.value = timesThousand(input);
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'gram' ){
      output.value = dividedBy1e6(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'microgram' ){
      output.value = times1e6(input);
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'kilogram' ){
      output.value = dividedBy1e9(input);
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'microgram' ){
      output.value = times1e9(input);
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'gram' ){
      output.value = dividedByThousand(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'milligram' ){
      output.value = timesThousand(input);
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'kilogram' ){
      output.value = dividedBy1e6(input);
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'microgram' ){
      output.value = times1e6(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'kilogram' ){
      output.value = dividedByThousand(input);
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'gram' ){
      output.value = timesThousand(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'tonne' ){
      output.value = dividedBy1e6(input);
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'gram' ){
      output.value = times1e6(input);
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'tonne' ){
      output.value = dividedBy1e12(input);
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'gram' ){
      output.value = times1e12(input);
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'tonne' ){
      output.value = dividedBy1e9(input);
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'milligram' ){
      output.value = times1e9(input);
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'tonne' ){
      output.value = dividedByThousand(input);
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'kilogram' ){
      output.value = timesThousand(input);
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'milligram' ){
      output.value = dividedByThousand(input);
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'milligram' ){
      output.value = dividedByThousand(input);
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'usTon' ){
      output.value = imperialTonToUSTon(input);
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'imperialTon' ){
      output.value = usTonToImperialTon(input);
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'stone' ){
      output.value = imperialTonToStone(input);
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'imperialTon' ){
      output.value = stoneToImperialTon(input);
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'pound' ){
      output.value = imperialTonToPound(input);
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'imperialTon' ){
      output.value = poundToImperialTon(input);
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'ounce' ){
      output.value = imperialTonToOunce(input);
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'imperialTon' ){
      output.value = ounceToImperialTon(input);
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'microgram' ){
      output.value = times1e6(imperialTonToGram(input));
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'imperialTon' ){
      output.value = dividedBy1e6(gramToImperialTon(input));
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'milligram' ){
      output.value = timesThousand(imperialTonToGram(input));
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'imperialTon' ){
      output.value = dividedByThousand(gramToImperialTon(input));
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'gram' ){
      output.value = imperialTonToGram(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'imperialTon' ){
      output.value = gramToImperialTon(input);
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'kilogram' ){
      output.value = dividedByThousand(imperialTonToGram(input));
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'imperialTon' ){
      output.value = timesThousand(gramToImperialTon(input));
    }
    if(inputOptions.value == 'imperialTon' && outputOptions.value == 'tonne' ){
      output.value = dividedBy1e6(imperialTonToGram(input));
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'imperialTon' ){
      output.value = times1e6(gramToImperialTon(input));
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'stone' ){
      output.value = usTonToStone(input);
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'usTon' ){
      output.value = stoneToUSTon(input);
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'pound' ){
      output.value = usTonToPound(input);
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'usTon' ){
      output.value = poundToUSTon(input);
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'ounce' ){
      output.value = usTonToOunce(input);
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'usTon' ){
      output.value = ounceToUSTon(input);
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'microgram' ){
      output.value = times1e6(usTonToGram(input));
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'usTon' ){
      output.value = dividedBy1e6(gramToUSTon(input));
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'milligram' ){
      output.value = timesThousand(usTonToGram(input));
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'usTon' ){
      output.value = dividedByThousand(gramToUSTon(input));
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'gram' ){
      output.value = usTonToGram(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'usTon' ){
      output.value = gramToUSTon(input);
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'kilogram' ){
      output.value = dividedByThousand(usTonToGram(input));
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'usTon' ){
      output.value = timesThousand(gramToUSTon(input));
    }
    if(inputOptions.value == 'usTon' && outputOptions.value == 'tonne' ){
      output.value = dividedBy1e6(usTonToGram(input));
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'usTon' ){
      output.value = times1e6(gramToUSTon(input));
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'pound' ){
      output.value = stoneToPound(input);
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'stone' ){
      output.value = poundToStone(input);
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'ounce' ){
      output.value = stoneToOunce(input);
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'stone' ){
      output.value = ounceToStone(input);
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'microgram' ){
      output.value = times1e6(stoneToGram(input));
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'stone' ){
      output.value = dividedBy1e6(gramToStone(input));
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'milligram' ){
      output.value = timesThousand(stoneToGram(input));
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'stone' ){
      output.value = dividedByThousand(gramToStone(input));
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'gram' ){
      output.value = stoneToGram(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'stone' ){
      output.value = gramToStone(input);
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'kilogram' ){
      output.value = dividedByThousand(stoneToGram(input));
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'stone' ){
      output.value = timesThousand(gramToStone(input));
    }
    if(inputOptions.value == 'stone' && outputOptions.value == 'tonne' ){
      output.value = dividedBy1e6(stoneToGram(input));
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'stone' ){
      output.value = times1e6(gramToStone(input));
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'ounce' ){
      output.value = poundToOunce(input);
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'pound' ){
      output.value = ounceToPound(input);
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'microgram' ){
      output.value = times1e6(poundToGram(input));
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'pound' ){
      output.value = dividedBy1e6(gramToPound(input));
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'milligram' ){
      output.value = timesThousand(poundToGram(input));
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'pound' ){
      output.value = dividedByThousand(gramToPound(input));
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'gram' ){
      output.value = poundToGram(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'pound' ){
      output.value = gramToPound(input);
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'kilogram' ){
      output.value = dividedByThousand(poundToGram(input));
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'pound' ){
      output.value = timesThousand(gramToPound(input));
    }
    if(inputOptions.value == 'pound' && outputOptions.value == 'tonne' ){
      output.value = dividedBy1e6(poundToGram(input));
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'pound' ){
      output.value = times1e6(gramToPound(input));
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'microgram' ){
      output.value = times1e6(ounceToGram(input));
    }
    if(inputOptions.value == 'microgram' && outputOptions.value == 'ounce' ){
      output.value = dividedBy1e6(gramToOunce(input));
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'milligram' ){
      output.value = timesThousand(ounceToGram(input));
    }
    if(inputOptions.value == 'milligram' && outputOptions.value == 'ounce' ){
      output.value = dividedByThousand(gramToOunce(input));
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'gram' ){
      output.value = ounceToGram(input);
    }
    if(inputOptions.value == 'gram' && outputOptions.value == 'ounce' ){
      output.value = gramToOunce(input);
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'kilogram' ){
      output.value = dividedByThousand(ounceToGram(input));
    }
    if(inputOptions.value == 'kilogram' && outputOptions.value == 'ounce' ){
      output.value = timesThousand(gramToOunce(input));
    }
    if(inputOptions.value == 'ounce' && outputOptions.value == 'tonne' ){
      output.value = dividedBy1e6(ounceToGram(input));
    }
    if(inputOptions.value == 'tonne' && outputOptions.value == 'ounce' ){
      output.value = times1e6(gramToOunce(input));
    }
  }
  if(conversionOptions.value == "volume"){
    if(inputOptions.value == outputOptions.value){
      output.value = input;
    }
    if(inputOptions.value == 'cubicMeters' && outputOptions.value == 'liters' ){
      output.value = timesThousand(input);
    }
    if(inputOptions.value == 'liters' && outputOptions.value == 'cubicMeters' ){
      output.value = dividedByThousand(input);
    }
    if(inputOptions.value == 'cubicMeters' && outputOptions.value == 'milliliters' ){
      output.value = times1e6(input);
    }
    if(inputOptions.value == 'milliliters' && outputOptions.value == 'cubicMeters' ){
      output.value = dividedBy1e6(input);
    }
    if(inputOptions.value == 'liters' && outputOptions.value == 'milliliters' ){
      output.value = timesThousand(input);
    }
    if(inputOptions.value == 'milliliters' && outputOptions.value == 'liters' ){
      output.value = dividedByThousand(input);
    }
    if(inputOptions.value == 'milliliters' && outputOptions.value == 'gallon' ){
      output.value = dividedByThousand(litersToGallon(input));
    }
    if(inputOptions.value == 'gallon' && outputOptions.value == 'milliliters' ){
      output.value = timesThousand(gallonToLiters(input));
    }
    if(inputOptions.value == 'liters' && outputOptions.value == 'gallon' ){
      output.value = litersToGallon(input);
    }
    if(inputOptions.value == 'gallon' && outputOptions.value == 'liters' ){
      output.value = litersToGallon(input);
    }
    if(inputOptions.value == 'cubicMeters' && outputOptions.value == 'gallon' ){
      output.value = timesThousand(litersToGallon(input));
    }
    if(inputOptions.value == 'gallon' && outputOptions.value == 'cubicmeters' ){
      output.value = dividedByThousand(gallonToLiters(input));
    }
  }
}
function celciusToFarenheit(celcius){return 1.8*celcius+32}function farenheitToCelcius(farenheit){return 5/9*(farenheit-32)}function celciusToKelvin(celcius){return parseFloat(celcius+273.15)}function kelvinToCelcius(kelvin){return kelvin-273.15}function farenheitToKelvin(farenheit){return farenheitToCelcius(farenheit)+273.15}function kelvinToFarenheit(kelvin){return celciusToFarenheit(kelvinToCelcius(kelvin))}function timesTen(input){return 10*input}function dividedByTen(input){return input/10}function timesHundred(input){return 100*input}function dividedByHundred(input){return input/100}function timesThousand(input){return 1e3*input}function dividedByThousand(input){return input/1e3}function timesTenThousand(input){return 1e4*input}function dividedByTenThousand(input){return input/1e4}function timesHundredThousand(input){return 1e5*input}function dividedByHundredThousand(input){return input/1e5}function times1e6(input){return 1e6*input}function dividedBy1e6(input){return input/1e6}function times1e7(input){return 1e7*input}function dividedBy1e7(input){return input/1e7}function times1e9(input){return 1e9*input}function dividedBy1e9(input){return input/1e9}function times1e12(input){return 1e12*input}function dividedBy1e12(input){return input/1e12}function mileToYard(mile){return 1760*mile}function yardToMile(yard){return yard/1760}function mileToFoot(mile){return 3*mileToYard(mile)}function footToMile(foot){return yardToMile(foot)/3}function mileToInch(mile){return 12*mileToFoot(mile)}function inchToMile(inch){return footToMile(inch)/12}function mileToNauticalMile(mile){return mile/1.151}function nauticalMileToMile(nauticalMile){return 1.151*nauticalMile}function yardToFoot(yard){return 3*yard}function footToYard(foot){return foot/3}function yardToInch(yard){return 36*yard}function inchToYard(inch){return inch/36}function yardToNauticalMile(yard){return yard/2025}function nauticalMileToYard(nauticalMile){return 2025*nauticalMile}function footToInch(foot){return 12*foot}function inchToFoot(inch){return inch/12}function footToNauticalMile(foot){return foot/6076}function nauticalMileToFoot(nauticalMile){return 6076*nauticalMile}function inchToNauticalMile(inch){return 72913*inch}function nauticalMileToInch(nauticalMile){return nauticalMile/72913}function mileToCentimeter(mile){return 160934*mile}function centimeterToMile(centimeter){return centimeter/160934}function yardToCentimeter(yard){return mileToCentimeter(yardToMile(yard))}function footToCentimeter(foot){return mileToCentimeter(footToMile(foot))}function inchToCentimeter(inch){return mileToCentimeter(inchToMile(inch))}function nauticalMileToCentimeter(nauticalMile){return mileToCentimeter(nauticalMileToMile(nauticalMile))}function imperialTonToUSTon(imperialTon){return 1.12*imperialTon}function usTonToImperialTon(usTon){return usTon/1.12}function imperialTonToStone(imperialTon){return 160*imperialTon}function stoneToImperialTon(stone){return stone/160}function stoneToPound(stone){return 14*stone}function poundToStone(pound){return pound/14}function imperialTonToPound(imperialTon){return stoneToPound(imperialTonToStone(imperialTon))}function poundToImperialTon(pound){return poundToStone(stoneToImperialTon(pound))}function imperialTonToOunce(imperialTon){return 35840*imperialTon}function ounceToImperialTon(ounce){return ounce/35840}function usTonToStone(usTon){return 142.85714286*usTon}function stoneToUSTon(stone){return stone/142.85714286}function usTonToPound(usTon){return 2*timesThousand(usTon)}function poundToUSTon(pound){return dividedByThousand(pound)/2}function usTonToOunce(usTon){return 32*timesThousand(usTon)}function ounceToUSTon(ounce){return dividedByThousand(ounce)/32}function stoneToOunce(stone){return 224*stone}function ounceToStone(ounce){return ounce/224}function poundToOunce(pound){return 16*pound}function ounceToPound(ounce){return ounce/16}function imperialTonToGram(imperialTon){return 1016046.91*imperialTon}function gramToImperialTon(gram){return gram/1016046.91}function usTonToGram(usTon){return 907184.74*usTon}function gramToUSTon(gram){return gram/907184.74}function stoneToGram(stone){return 6350.29318*stone}function gramToStone(gram){return gram/6350.29318}function poundToGram(pound){return 453.59237*pound}function gramToPound(gram){return gram/453.59237}function ounceToGram(ounce){return 28.34952*ounce}function gramToOunce(gram){return gram/28.34952}

function litersToGallon(liters){
  return liters / 4.546;
}
function gallonToLiters(gallon){
  return gallon * 4.546;
}