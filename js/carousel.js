document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const prevBtn = carousel.querySelector(".carousel_btn--prev");
  const nextBtn = carousel.querySelector(".carousel_btn--next");

  if (!track || !prevBtn || !nextBtn) return;

  const slides = Array.from(track.querySelectorAll(".carousel-slide"));
  if (slides.length === 0) return;

  let index = 0;

  const goTo = (i) => {
    index = Math.max(0, Math.min(i, slides.length - 1));
    slides[index].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        index = slides.indexOf(visible[0].target);
        updateButtons();
      }
    },
    { root: track, threshold: [0.5, 0.75] }
  );

  slides.forEach((s) => io.observe(s));

  const updateButtons = () => {
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
    prevBtn.setAttribute("aria-disabled", String(prevBtn.disabled));
    nextBtn.setAttribute("aria-disabled", String(nextBtn.disabled));
  };

  updateButtons();
});
