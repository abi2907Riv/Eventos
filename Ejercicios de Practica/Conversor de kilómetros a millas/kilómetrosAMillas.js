function ConvertirKmAMillas() {
    const km = parseFloat(document.getElementById("kilometros").value) || 0;
    const millas = 0.621371
    const conversion = km * millas
    document.getElementById("millas").value = conversion.toFixed(2)
}