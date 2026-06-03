document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".dot");

  if (track && prevBtn && nextBtn && dots.length > 0) {
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
  }

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active");

      if (mobileNav.classList.contains("active")) {
        mobileMenuBtn.textContent = "×";
      } else {
        mobileMenuBtn.textContent = "☰";
      }
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
        mobileMenuBtn.textContent = "☰";
      });
    });
  }
});