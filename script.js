function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 130 * i);
  });
}

const titulo = document.querySelector(".typewriter");
typeWrite(titulo);

window.sr = ScrollReveal();
sr.reveal(".sobre");

const reveal = ScrollReveal({ reset: false });

sr.reveal(".texto", {
  origin: "left",
  distance: "60px",
  duration: 2000,
  delay: 200,
  easing: "ease",
});

sr.reveal(".contato", {
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 200,
  easing: "ease",
});

sr.reveal(".sobre", {
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 200,
  easing: "ease",
});

sr.reveal(".items", {
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  easing: "ease",
});

sr.reveal(".item", {
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  easing: "ease",
});

sr.reveal(".imagem_logo", {
  origin: "right",
  distance: "30px",
  duration: 2000,
  delay: 200,
  easing: "ease",
});

sr.reveal(".footer", {
  origin: "bottom",
  distance: "2px",
  duration: 2000,
  delay: 200,
  easing: "ease",
});
