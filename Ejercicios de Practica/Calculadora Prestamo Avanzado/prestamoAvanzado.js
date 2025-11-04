function CalcularPrestamoAvanzado() {
    const montoPrestamo = parseFloat(document.getElementById("montoPrestamo").value) || 0;
    const tasaInteresAnual = parseFloat(document.getElementById("tasaInteresAnual").value) || 0;
    const cantidadCuotas = parseFloat(document.getElementById("cantidadCuota").value) || 0;
    const seguroMensual = parseFloat(document.getElementById("seguroMensual").value) || 0;

    const interesTotal = montoPrestamo * (tasaInteresAnual / 100)
    document.getElementById("interesTotal").value = interesTotal.toFixed(2)

    const montoTotalConIntereses = montoPrestamo + interesTotal;
    document.getElementById("montoTotalInteres").value = montoTotalConIntereses.toFixed(2)

    const seguroTotal = seguroMensual * cantidadCuotas
    document.getElementById("seguroTotal").value = seguroTotal.toFixed(2)

    const montoDeCadaCuota = (montoTotalConIntereses + seguroTotal) / cantidadCuotas;
    document.getElementById("montoDeCadaCuota").value = montoDeCadaCuota.toFixed(2)
}