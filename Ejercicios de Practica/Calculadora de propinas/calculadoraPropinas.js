function CalcularPropina() {
    const totalCuenta = parseFloat(document.getElementById("totalCuenta").value) || 0;
    const porcentajePropina = parseFloat(document.getElementById("pocentajePropina").value) || 0;

    const montoPropina = totalCuenta * porcentajePropina / 100
    document.getElementById("montoPropina").value = montoPropina.toFixed(2)

    const totalPagar = montoPropina + totalCuenta
    document.getElementById("totalPagar").value = totalPagar.toFixed(2)
}