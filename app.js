const boton = document.querySelector('.btn');
const mensaje = "Hola, estoy interesado. *¿Me pueden dar más información de los créditos?*"
const telefono = "573232858951";
const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

boton.addEventListener('click', () => {
    window.open(url, "_blank");
})