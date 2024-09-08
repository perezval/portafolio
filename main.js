document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    window.addEventListener('scroll', function () {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  });
  
  
  document.getElementById('submitBtn').addEventListener('click', function(event) {
      event.preventDefault();  // Evita que el formulario se envíe automáticamente.
  
      // Obtener los valores de los campos.
      const nombre = document.getElementById('exampleFormControlInput1').value.trim();
      const email = document.getElementById('exampleFormControlInput2').value.trim();
      const mensaje = document.getElementById('exampleFormControlTextarea1').value.trim();
  
      // Verificar que todos los campos estén completos.
      if (nombre === '' || email === '' || mensaje === '') {
          alert('Por favor, complete todos los campos.');
      } else {
          // Mostrar alerta de éxito.
          alert('Su mensaje se ha enviado con éxito.');
  
          // Limpiar los campos del formulario.
          document.getElementById('exampleFormControlInput1').value = '';
          document.getElementById('exampleFormControlInput2').value = '';
          document.getElementById('exampleFormControlTextarea1').value = '';
      }
  });