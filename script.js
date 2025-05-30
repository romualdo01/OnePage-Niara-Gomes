document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running'; // inicia a animação
          observer.unobserve(entry.target); // para de observar para não repetir
        }
      });
    },
    { threshold: 0.1 } // quando 10% do elemento estiver visível
  );

  elementos.forEach(el => {
    el.style.animationPlayState = 'paused'; // pausa animação no início
    observer.observe(el); // começa a observar cada elemento
  });
});
