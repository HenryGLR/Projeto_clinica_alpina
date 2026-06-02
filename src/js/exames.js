document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".dot");

  if (!track || !prevBtn || !nextBtn || dots.length === 0) {
    console.error("Carrossel não encontrado. Verifique os IDs no exames.html.");
    return;
  }

  let slideAtual = 0;
  const totalSlides = dots.length;

  function atualizarCarrossel() {
    track.style.transform = `translateX(-${slideAtual * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === slideAtual);
    });
  }

  nextBtn.addEventListener("click", () => {
    slideAtual++;

    if (slideAtual >= totalSlides) {
      slideAtual = 0;
    }

    atualizarCarrossel();
  });

  prevBtn.addEventListener("click", () => {
    slideAtual--;

    if (slideAtual < 0) {
      slideAtual = totalSlides - 1;
    }

    atualizarCarrossel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slideAtual = index;
      atualizarCarrossel();
    });
  });

  setInterval(() => {
    slideAtual++;

    if (slideAtual >= totalSlides) {
      slideAtual = 0;
    }

    atualizarCarrossel();
  }, 5000);

  atualizarCarrossel();
});