function CalcularIVA(){
    const precioOriginal = parseFloat(document.getElementById("precioOriginal").value) || 0;
    const porcentajeIVA = parseFloat(document.getElementById("porcentajeDeIVA").value) || 0;

    const montoIVA = precioOriginal * (porcentajeIVA / 100);
    document.getElementById("montoIVA").value = montoIVA.toFixed(2)

    const precioFinal = precioOriginal + montoIVA 
    document.getElementById("preciofinalIVA").value = precioFinal.toFixed(2)
}
