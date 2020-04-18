import "./import/modules";
import "./import/components";

let images = document.querySelectorAll("[data-webp]");

if (Modernizr.webp) {
    images.forEach((e) => {
        let imageBg = e.dataset.webp;
        e.style.backgroundImage = imageBg.replace(/(jpg|png)/g, "webp");
    });
} else {
    images.forEach((e) => {
        let imageBg = e.dataset.webp;
        e.style.backgroundImage = imageBg;
    });
}


Object.defineProperty(Object.prototype, "fadeOut", { value: function(ms = 1000, opacity = 1) {
    this.style.transition = .1 + 's';

    let interval = setInterval(() => {
        this.style.opacity = opacity -= .02;
        opacity = Math.round(opacity * 100) / 100;
        if (opacity === 0) clearInterval(interval)
    }, ms / 50);

    setTimeout(() => {
        this.style.display = "none";
    }, ms);
} });
Object.defineProperty(Object.prototype, "fadeIn", { value: function(ms = 1000, opacity = 0) {
    this.style.display = "block";
    this.style.transition = 0.1 + "s";

    let interval = setInterval(() => {
      this.style.opacity = opacity += 0.02;
      opacity = Math.round(opacity * 100) / 100;
      if (opacity === 1) clearInterval(interval);
    }, ms / 50);
} });
