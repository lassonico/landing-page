document.addEventListener('DOMContentLoaded', () => {
    animacionesi()
    animacionesd()
})

const textoi = document.querySelector('.textos');
const textod = document.querySelector('.textos-derecha');
const boton = document.querySelector('.btn');
const mensaje = "Hola, estoy interesado. *¿Me pueden dar más información de los créditos?*"
const telefono = "573232858951";
const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

boton.addEventListener('click', () => {
    window.open(url, "_blank");
})

function animacionesi(){
    setTimeout(() => {
        textoi.classList.remove('texthidden')
        textoi.classList.add('animaciontexti')
    }, 2800)
}

function animacionesd(){
    setTimeout(() => {
        textod.classList.remove('texthidden')
        textod.classList.add('animaciontextd')
    }, 4000);
}