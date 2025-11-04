function CalcularNotaFinal(){
    const nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    const ponderacion1 = parseFloat(document.getElementById("ponderacion1").value) || 0;
    const nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    const ponderacion2 = parseFloat(document.getElementById("ponderacion2").value) || 0;
    const nota3 = parseFloat(document.getElementById("nota3").value) || 0;
    const ponderacion3 = parseFloat(document.getElementById("ponderacion3").value) || 0;

    const resultadoNota1 = nota1 * ponderacion1 / 100
    const resultadoNota2 = nota2 * ponderacion2 / 100
    const resultadoNota3 = nota3 * ponderacion3 / 100

    const notaFinal = resultadoNota1 + resultadoNota2 + resultadoNota3
    document.getElementById("notaFinal").value = notaFinal.toFixed(2);
}