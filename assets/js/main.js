const heroSlide = document.querySelector(".animation__slide");
const lineUpSlide = document.querySelector(".line-up__slide");
const preloader = document.querySelector(".preloader");
const preloaderInfo = document.querySelector(".preloader__info");
let TOP_OFFSET = -94;

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
    console.log(blockID);
    const element = document.querySelector(blockID);
    if (blockID == "#about") {
      TOP_OFFSET = -160;
    } else {
      TOP_OFFSET = -94;
    }
    const y = element.getBoundingClientRect().top + window.pageYOffset + TOP_OFFSET;

    window.scrollTo({
      top: y, 
      behavior: 'smooth'
    });
    // document.querySelector(blockID).scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start'
    // });
  });
}

/****************************** TABS ******************************/

const tabsButtons = [].slice.call(document.querySelectorAll(".line-up__tabs-link"));
const tabs = [].slice.call(document.querySelectorAll(".line-up__tab"));
const lineUpCards = [].slice.call(document.querySelectorAll(".line-up__card"));
const lineUpCardsDescs = [].slice.call(document.querySelectorAll(".line-up__card-desc"));


tabsButtons.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const activeButtons = tabsButtons.filter(activeButton => activeButton.classList.contains("active"));
    const activeTabs = tabs.filter(activeTab => activeTab.classList.contains("active"));
    const activeCards =  lineUpCards.filter(activeCard => activeCard.classList.contains("active"));
    const activeDescs = lineUpCardsDescs.filter(activeDesc => activeDesc.classList.contains("active"));

    activeCards.forEach(item => {
      item.classList.remove("active");
    });
    activeDescs.forEach(item => {
      item.classList.remove("active");
      item.classList.add("hidden");
      item.classList.add("dnone");
    });
    activeButtons.forEach(item => {
      item.classList.remove("active");
    });
    activeTabs.forEach(item => {
      item.classList.remove("active");
    });
    item.classList.toggle("active");
    tabs[index].classList.toggle("active");

  });
});

lineUpCards.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    item.classList.toggle("active");
    if (lineUpCardsDescs[index].classList.contains("active")) {
      lineUpCardsDescs[index].classList.toggle("active");
      lineUpCardsDescs[index].classList.toggle("hidden");
      setTimeout(() => {
        lineUpCardsDescs[index].classList.toggle("dnone")
      }, 300);
    } else {
      lineUpCardsDescs[index].classList.toggle("dnone")
      setTimeout(() => {
        lineUpCardsDescs[index].classList.toggle("hidden");
        lineUpCardsDescs[index].classList.toggle("active");
      }, 300);
    }
  });
});