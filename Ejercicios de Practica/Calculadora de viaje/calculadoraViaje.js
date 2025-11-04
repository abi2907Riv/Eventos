function CalcularViaje() {
    const distanciaTotal = parseFloat(document.getElementById("distanciaTotal").value) || 0;
    const consumoVehiculo = parseFloat(document.getElementById("consumoVehiculo").value) || 0;
    const precioCombustible = parseFloat(document.getElementById("precioCombustible").value) || 0;
    const peajes = parseFloat(document.getElementById("peajes").value) || 0;
    
    // Calcular el consumo total de combustible en litros
    const consumoTotal = (distanciaTotal / 100) * consumoVehiculo;
    // Calcular el costo total del combustible
    const costoCombustible = consumoTotal * precioCombustible;
    // Calcular el costo total del viaje
    const costoTotalViaje = costoCombustible + peajes;
    document.getElementById("costoTotal").value = costoTotalViaje.toFixed(2)
}
