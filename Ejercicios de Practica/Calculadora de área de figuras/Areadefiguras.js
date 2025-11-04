function CalcularTriangulo() {
    const baseTriangulo = parseFloat(document.getElementById("base").value) || 0;
    const alturaTriangulo = parseFloat(document.getElementById("altura").value) || 0;

    const areaTriangulo = baseTriangulo * alturaTriangulo / 2
    document.getElementById("areaTriangulo").value = areaTriangulo.toFixed(0);
}

function CalcularRectangulo() {
    const largoRectangulo = parseFloat(document.getElementById("largo").value) || 0;
    const anchoRectangulo = parseFloat(document.getElementById("ancho").value) || 0;

    const areaRectangulo = largoRectangulo * anchoRectangulo 
    document.getElementById("areaRectangulo").value = areaRectangulo.toFixed(0);
}

function CalcularCirculo() {
    const radio = parseFloat(document.getElementById("radio").value) || 0;
    const areaCirculo = Math.PI * Math.pow(radio, 2)
    document.getElementById("areaCirculo").value = areaCirculo.toFixed(0);
}

