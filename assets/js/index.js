
var precio = 400000;

var cantidad = 0;

var precioSpan = document.querySelector("#precio-inicial");
precioSpan.innerHTML = precio;

var cantidadSpan = document.querySelector("#cantidad");
var totalSpan = document.querySelector("#valor-total");

function aumentar() {
    cantidad = cantidad + 1;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = cantidad * precio;
}

function disminuir() {

    if (cantidad > 0) {
        cantidad = cantidad - 1;
        cantidadSpan.innerHTML = cantidad;
        totalSpan.innerHTML = cantidad * precio;
    }

}