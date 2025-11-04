function CalcularDescuento(){
    const precioOriginal = parseFloat(document.getElementById("precioOriginal").value) || 0;
    const porcentajeDescuento = parseFloat(document.getElementById("porcentajeDescuento").value) || 0;

    const montoDescontado = precioOriginal * (porcentajeDescuento / 100)
    document.getElementById("montoDescontado").value = montoDescontado.toFixed(2)

    const precioFinal = precioOriginal - montoDescontado
    document.getElementById("precioFinal").value = precioFinal.toFixed(2)


}