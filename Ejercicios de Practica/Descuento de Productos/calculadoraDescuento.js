function CalculaDescuento() {
    const precioOriginal = parseFloat(document.getElementById("precioOriginal").value) || 0;
    const descuento = parseFloat(document.getElementById("descuento").value) || 0;
    const impuestos = parseFloat(document.getElementById("impuestos").value) || 0;

    const montoDescuento = precioOriginal * (descuento/100)
    document.getElementById("montoDescuento").value = montoDescuento.toFixed(2);

    const precioConDescuentoAplicado = precioOriginal - montoDescuento
    document.getElementById("precioDescuentoAplicado").value = precioConDescuentoAplicado.toFixed(2);

    const montodeImpuestos = precioConDescuentoAplicado * (impuestos/100)
    document.getElementById("impuestosPrecioDescuento").value = montodeImpuestos.toFixed(2);

    const precioFinal = precioConDescuentoAplicado + montodeImpuestos
    document.getElementById("precioFinal").value = precioFinal.toFixed(2);
}

