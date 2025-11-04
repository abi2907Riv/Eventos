function CalcularInversionConIntereses() {
    const capitalInicial = parseFloat(document.getElementById("capitalInicial").value) || 0;
    const tasaInteresAnual = parseFloat(document.getElementById("tasaAnual").value) || 0;
    const cantidadAnios = parseFloat(document.getElementById("cantidadAños").value) || 0;

    const montoFinal = capitalInicial * Math.pow((1 + tasaInteresAnual / 100), cantidadAnios)
    document.getElementById("montoFinal").value = montoFinal.toFixed(2)
}
