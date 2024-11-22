
// RUEDA DE CARRUSEL
document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel-imagenes');
    const rueda = document.getElementById('girar');
    let index = 0;
    const totalImagenes = carrusel.children.length;

    function cambiarImagen() {
        rueda.style.display = 'block';

        setTimeout(() => {
            index = (index + 1) % totalImagenes;
            const desplazamiento = -index * 100;
            carrusel.style.transform = `translateX(${desplazamiento}%)`;
            rueda.style.display = 'none';
        }, 10000);
    }

    setInterval(cambiarImagen, 11000); 
});

// CLICK A BARRA DESPLEGABLE
function toggleDropdown(event) {

    event.stopPropagation();

    const dropdown = event.target.nextElementSibling;

    document.querySelectorAll('.dropdown').forEach(menu => {
        if (menu !== dropdown) {
            menu.style.display = 'none';
        }
    });

    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(menu => {
        menu.style.display = 'none';
    });
});