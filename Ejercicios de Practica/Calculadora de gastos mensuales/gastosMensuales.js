function CalcularGastosMensuales(){
    const alquiler = parseFloat(document.getElementById("alquiler").value) || 0
    const servicios = parseFloat(document.getElementById("servicios").value) || 0
    const comida = parseFloat(document.getElementById("comida").value) || 0
    const transporte = parseFloat(document.getElementById("transporte").value) || 0

    const totalGastos = alquiler + servicios + comida + transporte
    document.getElementById("totalGastos").value = totalGastos
}