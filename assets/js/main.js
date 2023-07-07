const heroSlide = document.querySelector(".animation__slide");
const preloader = document.querySelector(".preloader");
const preloaderInfo = document.querySelector(".preloader__info");

const classes = {
  first: "--first",
  second: "--second",
  third: "--third",
  fourth: "--fourth",
  fifth: "--fifth",
  sixth: "--sixth"
}
setTimeout(() => {
  preloaderInfo.classList.toggle("preloader__info--active"); 
}, 500);

function slidesHandler(slider, initial, amount) {
  if (initial != amount) {
    slider.dataset.slide = (initial + 1);
    initial++;
    setTimeout(() => {
      slidesHandler(slider, initial, amount);
    }, 1000);
  } else {
    initial = 1;
    slider.dataset.slide = initial;
    setTimeout(() => {
      slidesHandler(slider, initial, amount);
    }, 1000);
  }
}

document.body.style.overflow = "hidden";

window.onload = () => {
  setTimeout(() => {
    preloaderInfo.classList.toggle("preloader__info--active");
    setTimeout(() => {
      preloaderInfo.textContent = "Welcome!";
      preloaderInfo.classList.toggle("preloader__info--active");
    }, 150);
    setTimeout(() => {
      preloader.classList.add("preloader--hidden");
      setTimeout(() => {
        preloader.remove();
        document.body.style.overflow = "auto";
        setTimeout(() => {
          slidesHandler(heroSlide, 1, 6);
        }, 1000);
      }, 150);
    }, 1500);
  }, 1500);
}
