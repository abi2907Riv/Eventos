function CalcularCalificaciones(){
    const calificacion1 = parseFloat(document.getElementById("calificacion1").value) || 0;
    const calificacion2 = parseFloat(document.getElementById("calificacion2").value) || 0;
    const calificacion3 = parseFloat(document.getElementById("calificacion3").value) || 0;
    const calificacion4 = parseFloat(document.getElementById("calificacion4").value) || 0;
    const calificacion5 = parseFloat(document.getElementById("calificacion5").value) || 0;

    const sumaCalificaciones = calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5

    const promedio = sumaCalificaciones / 5
    document.getElementById("promedio").value = promedio.toFixed(2)
}