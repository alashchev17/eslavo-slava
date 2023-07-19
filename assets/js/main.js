/****************************** Animations ******************************/
const heroSlide = document.querySelector(".hero__animation-slide");
const lineUpSlide = document.querySelector(".line-up__animation-slide");
const ticketsSlide = document.querySelector(".tickets__animation-slide");
const thankyouSlide = document.querySelector(".thankyou__animation-slide");

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
          if (heroSlide !== null) {
            slidesHandler(heroSlide, 1, 6);
          }
          if (lineUpSlide !== null) {
            slidesHandler(lineUpSlide, 1, 5);
          }
          if (ticketsSlide !== null) {
            slidesHandler(ticketsSlide, 1, 2);
          }
          if (thankyouSlide !== null) {
            slidesHandler(thankyouSlide, 1, 2);
          }
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
    if (element !== null) {
      if (blockID == "#about") {
        TOP_OFFSET = -160;
      } else if (blockID == "#tickets") {
        element.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
        return;
      } else {
        TOP_OFFSET = -94;
      }
      const y = element.getBoundingClientRect().top + window.pageYOffset + TOP_OFFSET;

      window.scrollTo({
        top: y, 
        behavior: 'smooth'
      });
    }
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

/****************************** ARTISTS ******************************/

  const fullCards = [].slice.call(document.querySelectorAll(".artists__cards-item--full"));

  fullCards.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.childNodes[3].classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
      item.childNodes[3].classList.remove("active");
    });
  });

/****************************** LOCATION ******************************/

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

/****************************** CONTACTS ******************************/
  
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const checkboxLabel = document.querySelector(".checkbox__label");
checkboxLabel.addEventListener("click", () => {
  checkboxLabel.classList.toggle("checkbox__label--active");
});

// Validation of form
const contactsInputs = [].slice.call(document.querySelectorAll(".contacts__input"));
const contactsButton = document.querySelector(".contacts__button");

contactsInputs[0].addEventListener("input", () => {
  if (contactsInputs[0].value.trim() == "") {
    contactsInputs[0].classList.add("error")
    contactsButton.setAttribute("disabled", "disabled");
  } 
  else if (contactsInputs[0].value.trim().length < 3) {
    contactsInputs[0].classList.add("error");
    contactsButton.setAttribute("disabled", "disabled");
  }
  else {
    contactsInputs[0].classList.remove("error");
    contactsButton.removeAttribute("disabled");
    contactsInputs.forEach(item => {
      if (item.value.trim() == "") {
        contactsButton.setAttribute("disabled", "disabled");
      } else if (item.classList.contains("error")) {
        contactsButton.setAttribute("disabled", "disabled");
      }
    });
  }
});

contactsInputs[2].addEventListener("input", () => {
  if (contactsInputs[2].value.trim() == "") {
    contactsInputs[2].classList.add("error");
    contactsButton.setAttribute("disabled", "disabled");
  } 
  else if (contactsInputs[2].value.trim().length < 10) {
    contactsInputs[2].classList.add("error");
    contactsButton.setAttribute("disabled", "disabled");
  }
  else {
    contactsInputs[2].classList.remove("error");
    contactsButton.removeAttribute("disabled");
    contactsInputs.forEach(item => {
      if (item.value.trim() == "") {
        contactsButton.setAttribute("disabled", "disabled");
      } else if (item.classList.contains("error")) {
        contactsButton.setAttribute("disabled", "disabled");
      }
    });
  }
});

contactsInputs[1].addEventListener("input", () => {
  if (contactsInputs[1].value.trim() == "") {
    contactsInputs[1].classList.add("error");
    contactsButton.setAttribute("disabled", "disabled");
  }
  else {
    contactsInputs[1].classList.remove("error");
    contactsButton.removeAttribute("disabled");
    contactsInputs.forEach(item => {
      if (item.value.trim() == "") {
        contactsButton.setAttribute("disabled", "disabled");
      } else if (item.classList.contains("error")) {
        contactsButton.setAttribute("disabled", "disabled");
      }
    });
  }
});

/****************************** THANKYOU ******************************/

if (document.querySelector(".thankyou") !== null) {
  // code..
}