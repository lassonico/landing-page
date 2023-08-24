document.addEventListener('DOMContentLoaded', () => {
    animacionesc();
    animacionesi();
    animacionesd();
})

const textoc = document.querySelector('.sincompromiso')
const textoi = document.querySelector('.textos');
const textod = document.querySelector('.textos-derecha');
const boton = document.querySelector('.btn');
const mensaje = "Hola, estoy interesado. *¿Me pueden dar más información de los créditos?*"
const telefono = "573232858951";
const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

boton.addEventListener('click', () => {
    window.open(url, "_blank");
})

function animacionesc(){
    setTimeout(() => {
        textoc.classList.remove('texthidden');
        textoc.classList.add('animaciontextc');
    }, 1200)
}

function animacionesi(){
    setTimeout(() => {
        textoi.classList.remove('texthidden');
        textoc.classList.remove('texthidden');
        textoi.classList.add('animaciontexti');
        textoc.classList.add('animaciontextc');
    }, 2800)
}

function animacionesd(){
    setTimeout(() => {
        textod.classList.remove('texthidden');
        textod.classList.add('animaciontextd');
    }, 4000);
}