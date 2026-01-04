document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".læring-tile[data-modal]");
  const dialogs = document.querySelectorAll("dialog.modal");

  // Åbn modal når man klikker på en tile
  tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      const modalId = tile.getAttribute("data-modal");
      const dialog = document.getElementById(modalId);

      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();

        // fokus på luk-knap (nice UX)
        const closeBtn = dialog.querySelector(".modal_close");
        closeBtn?.focus();
      }
    });
  });

  // Luk modal: kryds + klik udenfor + ESC
  dialogs.forEach((dialog) => {
    const closeBtn = dialog.querySelector(".modal_close");

    // Luk ved klik på kryds
    closeBtn?.addEventListener("click", () => dialog.close());

    // Luk ved klik på backdrop (udenfor boksen)
    dialog.addEventListener("click", (e) => {
      const box = dialog.querySelector(".modal_box");
      if (box && !box.contains(e.target)) dialog.close();
    });

    // (Valgfri) hvis du vil sikre at Esc altid virker,
    // kan du lade browserens default være – dialog lukker allerede ved ESC i Chrome.
  });
});
