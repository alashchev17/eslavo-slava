const heroSlide = document.querySelector(".animation__slide"),
      lineUpSlide = document.querySelector(".line-up__slide");
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
          slidesHandler(lineUpSlide, 1, 5);
        }, 1000);
      }, 150);
    }, 1500);
  }, 1500);
}

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
}

const lineUpCards = document.querySelectorAll(".line-up__card");
const lineUpTriangles = document.querySelectorAll(".line-up__card-triangle");
const lineUpDescs = document.querySelectorAll(".line-up__card-desc");

lineUpCards.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    lineUpTriangles[index].classList.toggle("active");
    lineUpDescs[index].classList.toggle("hidden");
  });
});