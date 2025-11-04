function CalcularPrecio() {
    const precioOriginal = parseFloat(document.getElementById("precioOriginal").value) || 0;
    const descuento1 = parseFloat(document.getElementById("descuento1").value) || 0;
    const descuento2 = parseFloat(document.getElementById("descuento2").value) || 0;

    const precioDescuento1 = precioOriginal - (precioOriginal * descuento1 / 100)
    document.getElementById("precio1").value = precioDescuento1

    const precioDescuento2 = precioDescuento1 - (precioDescuento1 * descuento2 / 100)
    document.getElementById("precio2").value = precioDescuento2

    const precioFinal = precioDescuento2
    document.getElementById("precioFinal").value = precioFinal

}