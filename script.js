document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const telefonoLink = document.querySelector('.telefono-link');
    const correoLink = document.querySelector('.correo-link');
    const ubicacionLink = document.querySelector('.ubicacion-link');
    const sitiosTrabajoLinks = document.querySelectorAll('.sitio-trabajo-link');
    const institucionesLinks = document.querySelectorAll('.institucion-link');
    const certificadosLinks = document.querySelectorAll('.certificado-link');
  
    // Función para abrir enlace de WhatsApp
    telefonoLink.addEventListener('click', function() {
      const telefono = telefonoLink.textContent.trim();
      window.open(`https://wa.me/${telefono}`, '_blank');
    });
  
    // Función para enviar correo electrónico
    correoLink.addEventListener('click', function() {
      const correo = correoLink.textContent.trim();
      window.open(`mailto:${correo}`, '_blank');
    });
  
    // Función para mostrar ubicación en Google Maps
    ubicacionLink.addEventListener('click', function() {
      const ubicacion = encodeURIComponent(ubicacionLink.textContent.trim());
      window.open(`https://www.google.com/maps/search/?api=1&query=${ubicacion}`, '_blank');
    });
  
    // Función para mostrar ubicación de sitios de trabajo en Google Maps
    sitiosTrabajoLinks.forEach(link => {
      link.addEventListener('click', function() {
        const ubicacion = encodeURIComponent(link.dataset.ubicacion);
        window.open(`https://www.google.com/maps/search/?api=1&query=${ubicacion}`, '_blank');
      });
    });
  
    // Función para abrir página web de instituciones
    institucionesLinks.forEach(link => {
      link.addEventListener('click', function() {
        const url = link.href;
        window.open(url, '_blank');
      });
    });
  
    // Función para visualizar certificados en PDF
    certificadosLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const pdfUrl = link.href;
        window.open(pdfUrl, '_blank');
      });
    });
  });
  