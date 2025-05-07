document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".stack-slide");
    let index = 0;

    function showNext() {
      if (index >= slides.length) {
        // Redirection après la dernière div (plus longtemps)
        setTimeout(() => {
          window.location.href = "/home";
        }, 4000); // 4s sur la dernière
        return;
      }

      const current = slides[index];
      current.classList.add("visible");

      // durée de visibilité : normal 2s, dernière div 4s
      const isLast = index === slides.length - 1;
      const duration = isLast ? 4000 : 2000;
      const nextDelay = isLast ? 4500 : 2500;

      setTimeout(() => {
        if (!isLast) {
          current.classList.remove("visible");
        }
      }, duration);

      index++;
      setTimeout(showNext, nextDelay);
    }

    showNext();
  });