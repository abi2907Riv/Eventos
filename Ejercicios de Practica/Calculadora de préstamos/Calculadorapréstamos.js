function CalcularPrestamo()  {
    const montoPrestamo = parseFloat(document.getElementById("montoPrestamo").value) || 0;
    const tasaInteresAnual = parseFloat(document.getElementById("tasaInteresAnual").value) || 0;
    const cantidadCuota = parseFloat(document.getElementById("cantidadCuota").value) || 0;

    const interesTotalAPagar = montoPrestamo * (tasaInteresAnual / 100)
    document.getElementById("interesTotalPagar").value = interesTotalAPagar.toFixed(2);
    const montoTotalConInteres = montoPrestamo + interesTotalAPagar
    document.getElementById("montoTotalInteres").value = montoTotalConInteres.toFixed(2);
    const montoCadaCuota = montoTotalConInteres / cantidadCuota
    document.getElementById("montoDeCadaCuota").value = montoCadaCuota.toFixed(2);
}