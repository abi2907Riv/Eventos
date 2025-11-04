function CalcularDivisasMultiples() {
    const valorDolares = parseFloat(document.getElementById("valorDolares").value) || 0;
    const cotizacionPesos = parseFloat(document.getElementById("cotizacionPesos").value) || 0;
    const cotizacionEuros = parseFloat(document.getElementById("cotizacionEuros").value) || 0;

    const valorPesos = valorDolares * cotizacionPesos
    document.getElementById("valorPesos").value = valorPesos

    const valorEuros = valorDolares * cotizacionEuros
    document.getElementById("valorEuros").value = valorEuros
}