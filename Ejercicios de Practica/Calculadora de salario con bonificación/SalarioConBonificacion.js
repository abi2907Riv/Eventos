function CalcularSalario() {
    const salarioBase = parseFloat(document.getElementById("salarioBase").value) || 0;
    const bonificacion = parseFloat(document.getElementById("bonificacion").value) || 0;

    const montoBonificacion = salarioBase * bonificacion / 100;
    document.getElementById("montoBonificacion").value = montoBonificacion.toFixed(2)

    const salarioFinal = montoBonificacion + salarioBase
    document.getElementById("salarioFinal").value = salarioFinal.toFixed(2)
}