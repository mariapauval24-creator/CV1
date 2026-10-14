// 1) Si no hay foto.jpg, se muestran las iniciales del nombre
var foto = document.getElementById('foto');
var palabras = document.getElementById('nombre').textContent.trim().split(/\s+/);
document.getElementById('ini').textContent =
  (palabras[0][0] + (palabras[1] ? palabras[1][0] : '')).toUpperCase();
foto.addEventListener('error', function () { foto.remove(); });

// 2) Botón para guardar el CV como PDF (abre el diálogo de impresión)
document.getElementById('imprimir').addEventListener('click', function () {
  window.print();
});

// 3) Aparición suave de estudios y experiencia al hacer scroll
var items = document.querySelectorAll('.item');
if ('IntersectionObserver' in window) {
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el, i) {
    el.style.transitionDelay = (i * 80) + 'ms';
    obs.observe(el);
  });
} else {
  items.forEach(function (el) { el.classList.add('on'); });
}
