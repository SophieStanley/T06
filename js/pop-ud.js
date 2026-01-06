document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".læring-tile[data-modal]");
  const dialogs = document.querySelectorAll("dialog.modal");
  tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      const modalId = tile.getAttribute("data-modal");
      const dialog = document.getElementById(modalId);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
        const closeBtn = dialog.querySelector(".modal_close");
        closeBtn?.focus();
      }
    });
  });
  dialogs.forEach((dialog) => {
    const closeBtn = dialog.querySelector(".modal_close");
    closeBtn?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => {
      const box = dialog.querySelector(".modal_box");
      if (box && !box.contains(e.target)) dialog.close();
    });
  });
});
