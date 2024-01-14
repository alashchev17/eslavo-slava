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

function revealHeader() {
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
}
function revealHero() {
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
}
function revealAbout() {
  // About animation
  aboutTl
    .from(SplitText.create('.about__title', { type: 'words, chars' }).chars, {
      opacity: 0,
      y: -15,
      duration: 0.3,
      ease: 'power3.out',
      stagger: 0.08,
    })
    .fromTo(
      '.about__background',
      {
        scaleY: 0,
      },
      {
        duration: 0.5,
        scaleY: 1,
        ease: 'power3.out',
      },
      '<50%'
    )
    .from(
      SplitText.create('.about__desc', { type: 'words, chars' }).words,
      {
        opacity: 0,
        y: -5,
        duration: 0.15,
        ease: 'power3.out',
        stagger: 0.025,
      },
      '<'
    )

  ScrollTrigger.create({
    animation: aboutTl,
    trigger: '.about',
    start: 'top 95%',
    toggleActions: 'play pause resume reset',
  })
}
function revealArtists() {
  // Artists animation
  artistsTl
    .from(SplitText.create('.artists__title', { type: 'words, chars' }).chars, {
      y: -15,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
    })
    .from(
      '.artists__block',
      {
        y: -35,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
      },
      '<15%'
    )

  ScrollTrigger.create({
    animation: artistsTl,
    trigger: '.artists',
    start: 'top 95%',
    toggleActions: 'play pause resume reset',
  })
}
function revealLineUp() {
  // Line-up animation
  lineUpTl
    .from(
      SplitText.create('.line-up__title', { type: 'words, chars' }).chars,
      {
        y: -15,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
      },
      '<'
    )
    .from(
      '.line-up__tabs-link',
      {
        y: -15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: 'power3.out',
      },
      '<90%'
    )
    .from(
      '.line-up__body',
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
      },
      '<25%'
    )
    .from(
      '.line-up__card',
      {
        x: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      },
      '<65%'
    )
    .from(
      '.line-up__animation',
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
      },
      '<'
    )

  ScrollTrigger.create({
    animation: lineUpTl,
    trigger: '.line-up',
    start: 'top 95%',
    toggleActions: 'play pause resume reset',
  })
}
function revealTickets() {
  // Tickets animation
  ticketsTl
    .from(SplitText.create('.tickets__title', { type: 'words, chars' }).chars, {
      y: -15,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
    })
    .from(
      '.tickets__card--first',
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        autoAlpha: 0,
      },
      '>10%'
    )
    .from(
      '.tickets__card--third',
      {
        x: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        autoAlpha: 0,
      },
      '>25%'
    )
    .from(
      '.tickets__card--second',
      {
        y: -50,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        autoAlpha: 0,
      },
      '>'
    )
    .from(
      SplitText.create('.tickets__slogan', { type: 'chars, words' }).chars,
      {
        y: -15,
        opacity: 0,
        ease: 'power3.out',
        duration: 0.5,
        stagger: 0.08,
      },
      '>'
    )
    .from(
      SplitText.create('.tickets__limit', { type: 'chars, words' }).chars,
      {
        y: -5,
        opacity: 0,
        ease: 'power3.out',
        duration: 0.3,
        stagger: 0.05,
      },
      '>5%'
    )
  ScrollTrigger.create({
    animation: ticketsTl,
    trigger: '.tickets',
    start: 'top 95%',
    toggleActions: 'play pause resume reset',
  })
}
function revealLocation() {
  // Location animation
  locationTl
    .from(
      SplitText.create('.location__title', { type: 'chars, words' }).chars,
      {
        y: -15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
      }
    )
    .from(
      '.location__slider',
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
      },
      '<90%'
    )
    .from(
      '.location__content',
      {
        x: 50,
        opacity: 0,
        duration: 0.5,
      },
      '<75%'
    )
    .from(
      SplitText.create('.location__content-title', {
        type: 'words, chars',
      }).chars,
      {
        y: -10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.025,
      },
      '<80%'
    )
    .from(
      SplitText.create('.location__content-subtitle', {
        type: 'words, chars',
      }).chars,
      {
        y: -5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.025,
      },
      '<80%'
    )
    .from(
      SplitText.create('.location__content-desc', {
        type: 'words, chars',
      }).chars,
      {
        y: -3,
        opacity: 0,
        duration: 0.05,
        stagger: 0.015,
      },
      '<80%'
    )
    .from(
      '.location__content-button',
      {
        x: 30,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
      },
      '<90%'
    )

  ScrollTrigger.create({
    animation: locationTl,
    trigger: '.location',
    start: 'top 90%',
    toggleActions: 'play pause resume reset',
  })
}
function revealContacts() {
  // Contacts animation
  contactsTl
    .from(
      SplitText.create('.contacts__title', { type: 'words, chars' }).chars,
      {
        y: -15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
      }
    )
    .from(
      '.contacts__input--name',
      {
        x: -15,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.out',
      },
      '<75%'
    )
    .from(
      '.contacts__input--email',
      {
        x: 15,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.out',
      },
      '<95%'
    )
    .from(
      '.contacts__input--textarea',
      {
        y: 30,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.out',
      },
      '<95%'
    )
    .from(
      '.contacts__form-checkbox',
      {
        x: -50,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.out',
      },
      '<95%'
    )
    .from(
      '.contacts__button',
      {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.out',
      },
      '<95%'
    )

  ScrollTrigger.create({
    animation: contactsTl,
    trigger: '.contacts',
    start: 'top 90%',
    toggleActions: 'play pause resume reset',
  })
}

function initAnimation() {
  revealHeader()
  revealHero()
  revealAbout()
  revealArtists()
  revealLineUp()
  revealTickets()
  revealLocation()
  revealContacts()
}
