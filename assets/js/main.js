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

function animationHandler(heroSlide) {
  if (heroSlide.dataset.slide == 1) {
    heroSlide.dataset.slide = 2;
    heroSlide.classList.remove(heroSlide.classList[0] + classes.first);
    heroSlide.classList.add(heroSlide.classList[0] + classes.second);
    setTimeout(() => {
      animationHandler(heroSlide);
    }, 1000);
  } else if (heroSlide.dataset.slide == 2) {
    heroSlide.dataset.slide = 3;
    heroSlide.classList.remove(heroSlide.classList[0] + classes.second);
    heroSlide.classList.add(heroSlide.classList[0] + classes.third);
    setTimeout(() => {
      animationHandler(heroSlide);
    }, 1000);
  } else if (heroSlide.dataset.slide == 3) {
    heroSlide.dataset.slide = 4;
    heroSlide.classList.remove(heroSlide.classList[0] + classes.third);
    heroSlide.classList.add(heroSlide.classList[0] + classes.fourth);
    setTimeout(() => {
      animationHandler(heroSlide);
    }, 1000);
  } else if (heroSlide.dataset.slide == 4) {
    heroSlide.dataset.slide = 5;
    heroSlide.classList.remove(heroSlide.classList[0] + classes.fourth);
    heroSlide.classList.add(heroSlide.classList[0] + classes.fifth);
    setTimeout(() => {
      animationHandler(heroSlide);
    }, 1000);
  } else if (heroSlide.dataset.slide == 5) {
    heroSlide.dataset.slide = 6;
    heroSlide.classList.remove(heroSlide.classList[0] + classes.fifth);
    heroSlide.classList.add(heroSlide.classList[0] + classes.sixth);
    setTimeout(() => {
      animationHandler(heroSlide);
    }, 1000);
  } else if (heroSlide.dataset.slide == 6) {
    heroSlide.dataset.slide = 1;
    heroSlide.classList.remove(heroSlide.classList[0] + classes.sixth);
    heroSlide.classList.add(heroSlide.classList[0] + classes.first);
    setTimeout(() => {
      animationHandler(heroSlide);
    }, 1000);
  }
}

document.body.style.overflow = "hidden";

window.onload = () => {
  setTimeout(() => {
    preloaderInfo.classList.toggle("preloader__info--active"); 
    setTimeout(() => {
      preloaderInfo.classList.toggle("preloader__info--active");
      setTimeout(() => {
        preloaderInfo.textContent = "Content loaded!";
        preloaderInfo.classList.toggle("preloader__info--active");
      }, 150);
      setTimeout(() => {
        preloader.classList.add("preloader--hidden");
        setTimeout(() => {
          preloader.remove();
          document.body.style.overflow = "auto";
          setTimeout(() => {
            animationHandler(heroSlide);
          }, 1000);
        }, 150);
      }, 1500);
    }, 1500);
  }, 1000);
}