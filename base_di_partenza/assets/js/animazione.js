document.addEventListener("DOMContentLoaded", () => {
  // Ottieni tutte le lettere "M"
  const letters = document.querySelectorAll("#letters-container text");

  // Funzione per nascondere/mostrare una lettera in modo casuale
  function toggleLetterVisibility() {
    const randomIndex = Math.floor(Math.random() * letters.length); // Scegli un indice casuale
    const selectedLetter = letters[randomIndex];

    // Cambia la classe per nascondere o mostrare la lettera
    selectedLetter.classList.toggle("hidden");
  }

  // Esegui la funzione ogni 500ms
  setInterval(toggleLetterVisibility, 500);
});
