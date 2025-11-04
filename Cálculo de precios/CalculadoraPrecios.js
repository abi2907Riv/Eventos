// // Calculadora de precios
// function CalcularPrecioVenta() {
//     const porcentajeGanancia = parseFloat(document.getElementById("porcentajeGanancia").value) || 0;
//     const valorPesos = parseFloat(document.getElementById("valorPesos").value) || 0;

//     const precioVenta = valorPesos + (valorPesos * porcentajeGanancia) /100
//     document.getElementById("precioVenta").value = precioVenta
// }

// function CalcularDolarAPeso() {
//     const valorDolares = parseFloat(document.getElementById("valorDolares").value) || 0;
//     const cotizacionDolar = parseFloat(document.getElementById("cotizacionDolar").value) || 0;
//     const valorEnPesos = valorDolares * cotizacionDolar

//     document.getElementById("valorPesos").value = valorEnPesos.toFixed(2);

//     CalcularPrecioVenta();
// }

// function CalcularPesoADolar() {
//     const valorPesos = parseFloat(document.getElementById("valorPesos").value) || 0;
//     const cotizacionDolar = parseFloat(document.getElementById("cotizacionDolar").value) || 0;

//     const valorDolares = valorPesos / cotizacionDolar
//     document.getElementById("valorDolares").value = valorDolares.toFixed(2);

//     CalcularPrecioVenta();
// }

// function CalcularPorcentajeGanancia() {
//     const valorPesos = parseFloat(document.getElementById("valorPesos").value) || 0;
//     const precioDeVentaFinal = parseFloat(document.getElementById("precioVenta").value) || 0;

//     const porcentajeGanancia = (precioDeVentaFinal * 100 / valorPesos) - 100

//     document.getElementById("porcentajeGanancia").value = porcentajeGanancia.toFixed(2)
// }




// Calculadora de precios
function CalcularPrecioVenta() {
    const porcentajeGanancia = parseFloat(document.getElementById("porcentajeGanancia").value) || 0;
    const valorPesos = parseFloat(document.getElementById("valorPesos").value) || 0;

    const precioVenta = valorPesos + (valorPesos * porcentajeGanancia) / 100;
    document.getElementById("precioVenta").value = precioVenta.toFixed(2);
}

// ✅ Corregido: ya no borra valores si escribís primero en "valor en pesos" y después en "cotización"
function CalcularDolarAPeso() {
    const valorDolares = parseFloat(document.getElementById("valorDolares").value) || 0;
    const cotizacionDolar = parseFloat(document.getElementById("cotizacionDolar").value) || 0;
    const valorPesosActual = parseFloat(document.getElementById("valorPesos").value) || 0;

    // Si ya hay pesos cargados y el usuario cambia la cotización, recalculamos desde pesos
    if (valorPesosActual > 0 && valorDolares === 0) {
        CalcularPesoADolar();
        return;
    }

    // Si no hay datos suficientes, no hacemos nada
    if (valorDolares === 0 || cotizacionDolar === 0) return;

    const valorEnPesos = valorDolares * cotizacionDolar;
    document.getElementById("valorPesos").value = valorEnPesos.toFixed(2);

    CalcularPrecioVenta();
}

function CalcularPesoADolar() {
    const valorPesos = parseFloat(document.getElementById("valorPesos").value) || 0;
    const cotizacionDolar = parseFloat(document.getElementById("cotizacionDolar").value) || 0;

    if (valorPesos === 0 || cotizacionDolar === 0) return;

    const valorDolares = valorPesos / cotizacionDolar;
    document.getElementById("valorDolares").value = valorDolares.toFixed(2);

    CalcularPrecioVenta();
}

function CalcularPorcentajeGanancia() {
    const valorPesos = parseFloat(document.getElementById("valorPesos").value) || 0;
    const precioDeVentaFinal = parseFloat(document.getElementById("precioVenta").value) || 0;

    if (valorPesos === 0) return;

    const porcentajeGanancia = (precioDeVentaFinal * 100 / valorPesos) - 100;
    document.getElementById("porcentajeGanancia").value = porcentajeGanancia.toFixed(2);
}
