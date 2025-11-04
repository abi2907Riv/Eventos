function CalcularDescuentos(){
    const sueldoBruto = parseFloat(document.getElementById("sueldoBruto").value) || 0;
    const jubilacion = parseFloat(document.getElementById("descuentoJubilacion").value) || 0;
    const obraSocial = parseFloat(document.getElementById("descuentoObraSocial").value) || 0;
    const otros = parseFloat(document.getElementById("descuentoOtros").value) || 0;

    const descuentoJubilacion = sueldoBruto * jubilacion / 100
    const descuentoObraSocial = sueldoBruto * obraSocial / 100
    const descuentoOtros = sueldoBruto * otros / 100

    const sueldoNeto = sueldoBruto - descuentoJubilacion - descuentoObraSocial - descuentoOtros
    document.getElementById("sueldoNeto").value = sueldoNeto.toFixed(2);
}

