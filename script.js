



function selectLanguage(language, flagSrc) {
    // Obtiene los elementos del idioma y la bandera seleccionada
    const selectedFlag = document.getElementById("selected-flag");
    const selectedLanguage = document.getElementById("selected-language");

    // Cambia la imagen de la bandera
    selectedFlag.src = flagSrc;

    // Cambia el texto del idioma
    selectedLanguage.textContent = language;
}


$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });















  function showDetails(element, year, detailsArray) {
    // Cambiar el texto del contenedor con los detalles
    const detailsContainer = document.getElementById('timelineDetails');
    const detailsYear = document.getElementById('detailsYear');
    const detailsList = document.getElementById('detailsList');
    
    detailsContainer.style.display = 'block'; // Mostrar el contenedor
    detailsYear.innerText = ` ${year}`; // Mostrar solo el año
    
    // Limpiar la lista de detalles antes de agregar nuevos
    detailsList.innerHTML = '';

    // Crear una lista de elementos con los detalles
    detailsArray.forEach(detail => {
        const listItem = document.createElement('li');
        listItem.innerText = detail;
        detailsList.appendChild(listItem);
    });

    // Eliminar la clase 'active' de todos los elementos
    let items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Añadir la clase 'active' al elemento clicado
    element.classList.add('active');

    // Reiniciar la animación al hacer clic
    detailsContainer.style.animation = 'none';
    detailsContainer.offsetHeight; // Trigger reflow
    detailsContainer.style.animation = 'fadeIn 0.5s forwards';
}









document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleDark'), {
      interval: 3000, // Cambia cada 3 segundos
      pause: false, // Evita que se detenga al pasar el mouse
      wrap: true // Asegura que el carrusel se reinicie al final
  });
});
