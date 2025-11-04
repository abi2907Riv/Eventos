//Eventos del mouse:

//CLICK
 const click = document.getElementById("Click");
  click.addEventListener("click", () => {
    click.textContent = "¡Hiciste clic!";
    click.style.backgroundColor = "#4CAF50";
    click.style.color = "white";
  });

//DOBLE CLICK
const dobleClick = document.getElementById("DobleClick");
  dobleClick.addEventListener("dblclick", () => {
    dobleClick.textContent = "¡Haz doble clic!";
    dobleClick.style.backgroundColor = "#FF9800";
    dobleClick.style.color = "white";
  });

//Mouseover y Mouseout
const mouseoverMouseout = document.getElementById("MouseoverMouseout");
  mouseoverMouseout.addEventListener("mouseover", () => {
    mouseoverMouseout.textContent = "¡Pásame el mouse!";
    mouseoverMouseout.style.backgroundColor = "#00d0ffff";
    mouseoverMouseout.style.color = "white";
  });

 mouseoverMouseout.addEventListener("mouseout", () => {
    mouseoverMouseout.textContent = "¡Deje de párselo!";
    mouseoverMouseout.style.backgroundColor = "#00d0ffff";
    mouseoverMouseout.style.color = "white";
  });

//Mousedown y Mouseup
const mousedownMouseup = document.getElementById("MousedownMouseup");
  mousedownMouseup.addEventListener("mousedown", () => {
    mousedownMouseup.textContent = "¡Presiona el botón!";
    mousedownMouseup.style.backgroundColor = "#ff0099ff";
    mousedownMouseup.style.color = "white";
  });

 mousedownMouseup.addEventListener("mouseup", () => {
    mousedownMouseup.textContent = "¡Suelta el botón!";
    mousedownMouseup.style.backgroundColor = "#ff0099ff";
    mousedownMouseup.style.color = "white";
  });

//Mousemove
const mousemove = document.getElementById("Mousemove");
 mousemove.addEventListener("mousemove", () => {
    mousemove.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    mousemove.style.color = "white";
  });



//EVENTOS DEL TECLADO
//Keydown
const keydownBtn = document.getElementById("Keydown");
document.addEventListener("keydown", (e) => {
    keydownBtn.textContent = `¡Presionaste la tecla!`;
    keydownBtn.style.backgroundColor = "#ff0099";
    keydownBtn.style.color = "white";
  });

// //Keypress
const keypressBtn = document.getElementById("Keypress");
document.addEventListener("keypress", (e) => {
    keypressBtn.textContent = `¡Manteniendo la tecla!`;
    keypressBtn.style.backgroundColor = "#ff6600";
    keypressBtn.style.color = "white";
  });

// //Keyup
const keyupBtn = document.getElementById("Keyup");
document.addEventListener("keyup", (e) => {
    keyupBtn.textContent = `¡Soltaste la tecla!`;
    keyupBtn.style.backgroundColor = "#00bfff";
    keyupBtn.style.color = "white";
  });


//EVENTOS DE FORMULARIO
//CHANGE
const selectFrutas = document.getElementById("frutas");
const resultado = document.getElementById("frutaseleccionada");
selectFrutas.addEventListener("change", function() {
    resultado.textContent = `Has seleccionado: ${this.value}`;
});

// INPUT
const inputNombre = document.getElementById("nombre");
const inputResultado = document.getElementById("nombreInput");
    inputNombre.addEventListener("input", function() {
        inputResultado.textContent = `Estás escribiendo: ${this.value}`;
});

// SUBMIT
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Gracias por enviar el formulario!");
});
