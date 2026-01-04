document.addEventListener("DOMContentLoaded", () => {
  const scrollArea = document.querySelector("section.timeline-wrapper > .timeline-wrapper");
  const cards = Array.from(document.querySelectorAll(".timeline-card"));

  if (!scrollArea || cards.length === 0) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        cards.forEach((c) => c.classList.remove("is-active"));
        visible[0].target.classList.add("is-active");
      }
    },
    {
      root: scrollArea,
      threshold: [0.15, 0.3, 0.5, 0.7],
    }
  );

  cards.forEach((card) => io.observe(card));
});
