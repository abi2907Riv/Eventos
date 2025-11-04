function CalcularEnergiaElectrica(){
    const potenciaAparato = parseFloat(document.getElementById("potenciaAparato").value) || 0;
    const horasUso = parseFloat(document.getElementById("HorasDeUso").value) || 0;
    const diasUso = parseFloat(document.getElementById("diasDeUso").value) || 0;
    const precioPorKWh = parseFloat(document.getElementById("precioPorKwh").value) || 0;

    const consumoMensual = (potenciaAparato * horasUso * diasUso) / 1000;
    document.getElementById("consumoMensual").value = consumoMensual.toFixed(2)

    const costoMensual = consumoMensual * precioPorKWh
    document.getElementById("costoMensual").value = costoMensual.toFixed(2)
}