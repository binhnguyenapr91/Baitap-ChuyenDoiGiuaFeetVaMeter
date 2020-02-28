function meterToFoot(number) {
    let foot = 3.279 * parseFloat(number);
    document.getElementById("txtFoot").value = foot;
}

function footToMeter(number) {
    let meter = 0.305 * parseFloat(number);
    document.getElementById("txtMeter").value = meter;
}

