function CalcularFacturacion() {
    const horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value) || 0;
    const tarifaPorHora = parseFloat(document.getElementById("tarifaPorHora").value) || 0;
    const descuentoAplicable = parseFloat(document.getElementById("descuentoAplicable").value) || 0;
    const impuesto = parseFloat(document.getElementById("impuesto").value) || 0;

    const subtotal = horasTrabajadas * tarifaPorHora
    document.getElementById("subtotal").value = subtotal.toFixed(2);

    const montoDescuento = subtotal * (descuentoAplicable / 100)
    document.getElementById("montoDescuento").value = montoDescuento.toFixed(2);

    const montoImpuesto = (subtotal - montoDescuento) * (impuesto / 100)
    document.getElementById("montoImpuesto").value = montoImpuesto.toFixed(2);

    const totalFacturar = (subtotal - montoDescuento) + montoImpuesto
    document.getElementById("totalFacturar").value = totalFacturar.toFixed(2);
}