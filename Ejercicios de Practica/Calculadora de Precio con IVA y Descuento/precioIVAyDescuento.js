function CalcularIVADescuento() {
    const precioOriginal = parseFloat(document.getElementById("precioOriginal").value) || 0;
    const porcentajeDescuento = parseFloat(document.getElementById("porcentajeDescuento").value) || 0;
    const porcentajeIVA = parseFloat(document.getElementById("porcentajeDeIVA").value) || 0;

    const montoDeDescuento = precioOriginal * (porcentajeDescuento / 100)
    document.getElementById("montoDescuento").value = montoDeDescuento.toFixed(2)

    const precioDescuento = precioOriginal - montoDeDescuento 
    document.getElementById("precioConDescuento").value = precioDescuento.toFixed(2)

    const montoIVA = precioDescuento * (porcentajeIVA / 100)
    document.getElementById("montoIVA").value = montoIVA.toFixed(2)

    const precioFinalconIVA = precioDescuento + montoIVA
    document.getElementById("precioFinalConIVA").value = precioFinalconIVA.toFixed(2)
}