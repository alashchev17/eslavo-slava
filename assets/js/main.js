/****************************** Animations ******************************/
const heroSlideDesktop = document.querySelector(
  '.hero__animation-slide.desktop'
)
const heroSlideMobile = document.querySelector('.hero__animation-slide.mobile')
const lineUpSlide = document.querySelector('.line-up__animation-slide')
const ticketsSlide = document.querySelector('.tickets__animation-slide')
const thankyouSlide = document.querySelector('.thankyou__animation-slide')

const preloader = document.querySelector('.preloader')
const preloaderInfo = document.querySelector('.preloader__info')
gsap.registerPlugin(ScrollTrigger, SplitText)

let headerTl = gsap.timeline()
let sloganTl = gsap.timeline()
let aboutTl = gsap.timeline()
let artistsTl = gsap.timeline()
let lineUpTl = gsap.timeline()
let ticketsTl = gsap.timeline()
let locationTl = gsap.timeline()
let contactsTl = gsap.timeline()
let footerTl = gsap.timeline()

headerTl
  .set('.header', {
    y: '-100%',
  })
  .set('.header__list-item', {
    y: -15,
    opacity: 0,
  })
  .set('.logo', {
    x: -15,
    opacity: 0,
  })
let TOP_OFFSET = -94

setTimeout(() => {
  preloaderInfo.classList.toggle('preloader__info--active')
}, 500)

function slidesHandler(slider, initial, amount) {
  if (initial != amount) {
    slider.dataset.slide = initial + 1
    initial++
    setTimeout(() => {
      slidesHandler(slider, initial, amount)
    }, 1000)
  } else {
    initial = 1
    slider.dataset.slide = initial
    setTimeout(() => {
      slidesHandler(slider, initial, amount)
    }, 1000)
  }
}

document.body.classList.add('overflow')

window.onload = () => {
  setTimeout(() => {
    preloaderInfo.classList.toggle('preloader__info--active')
    setTimeout(() => {
      preloaderInfo.textContent = 'Welcome!'
      preloaderInfo.classList.toggle('preloader__info--active')
    }, 150)
    setTimeout(() => {
      preloader.classList.add('preloader--hidden')
      setTimeout(() => {
        preloader.remove()
        document.body.classList.remove('overflow')
        // Header animation
        headerTl
          .to('.header', {
            y: 0,
          })
          .to('.logo', {
            x: 0,
            opacity: 1,
          })
          .to('.header__list-item', {
            y: 0,
            opacity: 1,
            stagger: 0.125,
          })
        // Slogan animation
        sloganTl
          .to('.slogan__text--first', {
            scrollTrigger: {
              trigger: '.slogan',
              scrub: true,
            },
            xPercent: -45,
          })
          .to('.slogan__wrapper', {
            scrollTrigger: {
              trigger: '.slogan',
              scrub: true,
            },
            xPercent: 45,
          })
        // About animation
        aboutTl
          .fromTo(
            SplitText.create('.about__title', { type: 'words, chars' }).chars,
            {
              opacity: 0,
              y: -15,
            },
            {
              duration: 1.6,
              y: 0,
              opacity: 1,
              ease: 'power3.out',
              stagger: 0.15,
            }
          )
          .fromTo(
            '.about__background',
            {
              scaleY: 0,
            },
            {
              duration: 1.6,
              scaleY: 1,
              ease: 'power3.out',
            },
            '<25%'
          )

        ScrollTrigger.create({
          animation: aboutTl,
          trigger: '.about',
          start: 'top 95%',
          toggleActions: 'play pause resume reset',
        })
        // Artists animation
        artistsTl
          .from(
            SplitText.create('.artists__title', { type: 'words, chars' }).chars,
            {
              y: -15,
              opacity: 0,
              stagger: 0.15,
              duration: 1.6,
            }
          )
          .from(
            '.artists__block',
            {
              y: -35,
              opacity: 0,
              stagger: 0.2,
              duration: 1.2,
            },
            '<15%'
          )

        ScrollTrigger.create({
          animation: artistsTl,
          trigger: '.artists',
          start: 'top 95%',
          toggleActions: 'play pause resume reset',
        })
        // Line-up animation
        lineUpTl
          .from(
            SplitText.create('.line-up__title', { type: 'words, chars' }).chars,
            {
              y: -15,
              opacity: 0,
              stagger: 0.15,
              duration: 1.6,
            },
            '<'
          )
          .from(
            '.line-up__tabs',
            {
              x: 15,
              opacity: 0,
              duration: 1.6,
            },
            '<25%'
          )
          .from(
            '.line-up__body',
            {
              y: 50,
              opacity: 0,
              duration: 1.6,
            },
            '<25%'
          )
          .from(
            '.line-up__card',
            {
              x: 50,
              opacity: 0,
              duration: 1.6,
              stagger: 0.25,
            },
            '<65%'
          )
          .from(
            '.line-up__animation',
            {
              x: -50,
              opacity: 0,
              duration: 1.6,
            },
            '<'
          )

        ScrollTrigger.create({
          animation: lineUpTl,
          trigger: '.line-up',
          start: 'top 95%',
          toggleActions: 'play pause resume reset',
        })
        // Tickets animation
        ticketsTl
          .from(
            SplitText.create('.tickets__title', { type: 'words, chars' }).chars,
            {
              y: -15,
              opacity: 0,
              duration: 1.6,
              stagger: 0.15,
            }
          )
          .from(
            '.tickets__card--first',
            {
              x: -50,
              opacity: 0,
              duration: 1.6,
            },
            '<10%'
          )
          .from(
            '.tickets__card--third',
            {
              x: 50,
              opacity: 0,
              duration: 1.6,
            },
            '<25%'
          )
          .from(
            '.tickets__card--second',
            {
              y: -50,
              opacity: 0,
              duration: 1.6,
            },
            '<50%'
          )
          .from(
            SplitText.create('.tickets__slogan', { type: 'chars, words' })
              .chars,
            {
              y: -15,
              opacity: 0,
              ease: 'power3.out',
              duration: 1.3,
              stagger: 0.05,
            },
            '>'
          )
          .from(
            SplitText.create('.tickets__limit', { type: 'chars, words' }).chars,
            {
              y: -5,
              opacity: 0,
              ease: 'power3.out',
              duration: 1.6,
              stagger: 0.1,
            },
            '>5%'
          )
        ScrollTrigger.create({
          animation: ticketsTl,
          trigger: '.tickets',
          start: 'top 95%',
          toggleActions: 'play pause resume reset',
        })

        setTimeout(() => {
          if (heroSlideDesktop !== null) {
            slidesHandler(heroSlideDesktop, 1, 6)
          }
          if (heroSlideMobile !== null) {
            slidesHandler(heroSlideMobile, 1, 6)
          }
          if (lineUpSlide !== null) {
            slidesHandler(lineUpSlide, 1, 5)
          }
          if (ticketsSlide !== null) {
            slidesHandler(ticketsSlide, 1, 2)
          }
          if (thankyouSlide !== null) {
            slidesHandler(thankyouSlide, 1, 2)
          }
        }, 1000)
      }, 150)
    }, 1500)
  }, 1500)
}

/****************************** HEADER ******************************/

const burgerButton = document.querySelector('.header__burger')
const burgerClose = document.querySelector('.header__button-close')
const headerNav = document.querySelector('.header__nav')

burgerButton.addEventListener('click', (event) => {
  event.preventDefault()
  headerNav.classList.add('active')
  document.body.classList.add('overflow')
})
burgerClose.addEventListener('click', (event) => {
  event.preventDefault()
  headerNav.classList.remove('active')
  document.body.classList.remove('overflow')
})

/****************************** ABOUT ******************************/
const aboutButton = document.querySelector('.about__button')
const aboutText = document.querySelector('.about__hide-show')
const aboutContent = document.querySelector('.about__content')

aboutButton.addEventListener('click', (event) => {
  aboutText.classList.toggle('active')
  aboutContent.classList.toggle('active')
  aboutButton.classList.toggle('active')
  if (aboutButton.classList.contains('active')) {
    aboutButton.textContent = 'Hide'
  } else {
    aboutButton.textContent = 'Show more'
  }
})

/****************************** TABS ******************************/

const tabsButtons = [].slice.call(
  document.querySelectorAll('.line-up__tabs-link')
)
const tabs = [].slice.call(document.querySelectorAll('.line-up__tab'))
const lineUpCards = [].slice.call(document.querySelectorAll('.line-up__card'))
const lineUpCardsDescs = [].slice.call(
  document.querySelectorAll('.line-up__card-desc')
)

tabsButtons.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    const activeButtons = tabsButtons.filter((activeButton) =>
      activeButton.classList.contains('active')
    )
    const activeTabs = tabs.filter((activeTab) =>
      activeTab.classList.contains('active')
    )
    const activeCards = lineUpCards.filter((activeCard) =>
      activeCard.classList.contains('active')
    )
    const activeDescs = lineUpCardsDescs.filter((activeDesc) =>
      activeDesc.classList.contains('active')
    )

    activeCards.forEach((item) => {
      item.classList.remove('active')
    })
    activeDescs.forEach((item) => {
      item.classList.remove('active')
      item.classList.add('hidden')
      item.classList.add('dnone')
    })
    activeButtons.forEach((item) => {
      item.classList.remove('active')
    })
    activeTabs.forEach((item) => {
      item.classList.remove('active')
    })
    item.classList.toggle('active')
    tabs[index].classList.toggle('active')
  })
})

lineUpCards.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    item.classList.toggle('active')
    if (lineUpCardsDescs[index].classList.contains('active')) {
      lineUpCardsDescs[index].classList.toggle('active')
      lineUpCardsDescs[index].classList.toggle('hidden')
      setTimeout(() => {
        lineUpCardsDescs[index].classList.toggle('dnone')
      }, 300)
    } else {
      lineUpCardsDescs[index].classList.toggle('dnone')
      setTimeout(() => {
        lineUpCardsDescs[index].classList.toggle('hidden')
        lineUpCardsDescs[index].classList.toggle('active')
      }, 300)
    }
  })
})

/****************************** ARTISTS ******************************/

const fullCardsDesktop = [].slice.call(
  document
    .querySelector('.artists__cards.desktop')
    .querySelectorAll('.artists__cards-item--full')
)
const fullCardsMobile = [].slice.call(
  document
    .querySelector('.artists__cards.mobile')
    .querySelectorAll('.artists__cards-item--full')
)

fullCardsDesktop.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.childNodes[3].classList.add('active')
  })
  item.addEventListener('mouseleave', () => {
    item.childNodes[3].classList.remove('active')
  })
})

fullCardsMobile.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.childNodes[3].classList.add('active')
  })
  item.addEventListener('mouseleave', () => {
    item.childNodes[3].classList.remove('active')
  })
})

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
  },
})

const locationContent = document.querySelector('.location__content')
const locationContentTitle = document.querySelector('.location__content-title')
const locationWrapper = document.querySelector('.location__content-wrapper')

locationContentTitle.addEventListener('click', () => {
  locationContent.classList.toggle('active')
  locationContentTitle.classList.toggle('active')
  locationWrapper.classList.toggle('active')
})

/****************************** CONTACTS ******************************/

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
const checkboxLabel = document.querySelector('.checkbox__label')
checkboxLabel.addEventListener('click', () => {
  checkboxLabel.classList.toggle('checkbox__label--active')
})

// Validation of form
const contactsInputs = [].slice.call(
  document.querySelectorAll('.contacts__input')
)
const contactsButton = document.querySelector('.contacts__button')

contactsInputs[0].addEventListener('input', () => {
  if (contactsInputs[0].value.trim() == '') {
    contactsInputs[0].classList.add('error')
    contactsButton.setAttribute('disabled', 'disabled')
  } else if (contactsInputs[0].value.trim().length < 3) {
    contactsInputs[0].classList.add('error')
    contactsButton.setAttribute('disabled', 'disabled')
  } else {
    contactsInputs[0].classList.remove('error')
    contactsButton.removeAttribute('disabled')
    contactsInputs.forEach((item) => {
      if (item.value.trim() == '') {
        contactsButton.setAttribute('disabled', 'disabled')
      } else if (item.classList.contains('error')) {
        contactsButton.setAttribute('disabled', 'disabled')
      }
    })
  }
})

contactsInputs[2].addEventListener('input', () => {
  if (contactsInputs[2].value.trim() == '') {
    contactsInputs[2].classList.add('error')
    contactsButton.setAttribute('disabled', 'disabled')
  } else if (contactsInputs[2].value.trim().length < 10) {
    contactsInputs[2].classList.add('error')
    contactsButton.setAttribute('disabled', 'disabled')
  } else {
    contactsInputs[2].classList.remove('error')
    contactsButton.removeAttribute('disabled')
    contactsInputs.forEach((item) => {
      if (item.value.trim() == '') {
        contactsButton.setAttribute('disabled', 'disabled')
      } else if (item.classList.contains('error')) {
        contactsButton.setAttribute('disabled', 'disabled')
      }
    })
  }
})

contactsInputs[1].addEventListener('input', () => {
  if (contactsInputs[1].value.trim() == '') {
    contactsInputs[1].classList.add('error')
    contactsButton.setAttribute('disabled', 'disabled')
  } else {
    contactsInputs[1].classList.remove('error')
    contactsButton.removeAttribute('disabled')
    contactsInputs.forEach((item) => {
      if (item.value.trim() == '') {
        contactsButton.setAttribute('disabled', 'disabled')
      } else if (item.classList.contains('error')) {
        contactsButton.setAttribute('disabled', 'disabled')
      }
    })
  }
})

/****************************** THANKYOU ******************************/

if (document.querySelector('.thankyou') !== null) {
  // code..
}

/****************************** POPUP ******************************/

const popup = document.querySelector('.popup')
popupClose = document.querySelector('.popup__close')
popupWrapper = document.querySelector('.popup__wrapper')
popupImage = document.querySelector('.popup__image')
popupTitle = document.querySelector('.popup__title')
popupText = document.querySelector('.popup__text')
popupDate = document.querySelector('.popup__date')
popupPage = document.querySelector('.popup__page')
artistsCardsDesktop = document
  .querySelector('.artists__cards.desktop')
  .querySelectorAll('.artists__cards-item')

// Sorting array of artists cards in order of growing data-artist
const arrayArtistsCardsDesktop = [].slice.call(artistsCardsDesktop)
arrayArtistsCardsDesktop.sort((a, b) => {
  const artistA = parseInt(a.dataset.artist)
  const artistB = parseInt(b.dataset.artist)
  return artistA - artistB
})

const getData = async () => {
  // const data = await fetch('http://localhost:5500/assets/js/artists.json');
  const data = await fetch(
    'https://alashchev17.github.io/eslavo-slava/assets/js/artists.json'
  )
  // const data = await fetch('http://justmaig.beget.tech/assets/js/artists.json');

  if (data.ok) {
    return data.json()
  } else {
    throw new Error(
      `Данные не были получены, ошибка ${data.status} ${data.statusText}`
    )
  }
}

arrayArtistsCardsDesktop.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    if (item.dataset.artist == index + 1) {
      getData()
        .then((data) => {
          popupTitle.textContent = data.artists[index].name
          popupText.innerHTML = data.artists[index].description
          popupImage.src = data.artists[index].photo
          popupDate.innerHTML = data.artists[index].date
          popupPage.textContent = data.artists[index].page
        })
        .catch((err) => {
          console.error(err)
        })
      popupTitle.dataset.artist = index + 1
      popupText.dataset.artist = index + 1
      popupImage.dataset.artist = index + 1
      popupDate.dataset.artist = index + 1
      popupPage.dataset.artist = index + 1
    }
    setTimeout(() => {
      popup.classList.remove('hidden')
      document.body.classList.add('overflow')
    }, 100)
  })
})

popupWrapper.addEventListener('click', (event) => {
  if (event.target.classList == 'popup__wrapper') {
    popup.classList.add('hidden')
    document.body.classList.remove('overflow')
  } else {
    return false
  }
})

popupClose.addEventListener('click', () => {
  popup.classList.add('hidden')
  document.body.classList.remove('overflow')
})

document.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    if (!popup.classList.contains('hidden')) {
      popup.classList.add('hidden')
      document.body.classList.remove('overflow')
    } else {
      return false
    }
  }
})

const anchors = [].slice.call(document.querySelectorAll('a[href^="#"]'))

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    const blockID = anchor.getAttribute('href')
    console.log(blockID)
    const element = document.querySelector(blockID)
    if (
      event.target.classList == 'header__link' &&
      headerNav.classList.contains('active')
    ) {
      setTimeout(() => {
        headerNav.classList.remove('active')
        document.body.classList.remove('overflow')
        setTimeout(() => {
          if (element !== null || blockID !== '#popup') {
            if (blockID == '#about') {
              TOP_OFFSET = -160
            } else if (blockID == '#tickets') {
              element.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
              })
              return
            } else {
              TOP_OFFSET = -94
            }
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              TOP_OFFSET

            window.scrollTo({
              top: y,
              behavior: 'smooth',
            })
          }
        }, 1000)
      }, 100)
    }
    if (element !== null || blockID !== '#popup') {
      if (blockID == '#about') {
        TOP_OFFSET = -160
      } else if (blockID == '#tickets') {
        element.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        })
        return
      } else {
        TOP_OFFSET = -94
      }
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + TOP_OFFSET

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      })
    }
  })
}
