function crearTarjetas() {
    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");

    let desde = Number(document.getElementById("txtDesde").value);
    let hasta = Number(document.getElementById("txtHasta").value);

    for (let i = desde; i <= hasta; i++) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
        divTarjetas.innerHTML = contenido;
    }
}