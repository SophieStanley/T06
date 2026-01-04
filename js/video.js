document.addEventListener(
  "touchstart",
  () => {
    document.querySelectorAll("video[autoplay]").forEach((v) => {
      v.play().catch(() => {});
    });
  },
  { once: true }
);
