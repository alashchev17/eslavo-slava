const artistsWrapper = document.querySelector(".artists-page__wrapper");
const mainSection = document.querySelector(".artists-page");
const artistsSelectList = document.querySelector(".artists-page__select-items");
const artistsSelectContent = document.querySelector(".artists-page__select-content");
const artistsSelectBody = document.querySelector(".artists-page__select-body")

if (window.innerWidth > 475) {
  // alert("Page is unavailable for monitors wider than 475px.");
  const errorHTML = `
    <div class="artists-page__error">
      <span>This page is unavailable on your monitor, because it's wider than 475px in viewport</span>
      <a class="artists-page__button" href="./index.html">Return to Mainpage</a>
    </div>
  `;
  mainSection.remove();
  document.body.insertAdjacentHTML("beforeend", errorHTML);
}

const getData = async () => {
  // const data = await fetch('http://localhost:5500/assets/js/artists.json');
  // const data = await fetch('http://192.168.43.71:3000/assets/js/artists.json');
  const data = await fetch('http://alashchev17.github.io/eslavo-slava/assets/js/artists.json');
  // const data = await fetch('http://justmaig.beget.tech/assets/js/artists.json');
  
  if (data.ok) {
    return data.json();
  } else {
    throw new Error(`Данные не были получены, ошибка ${data.status} ${data.statusText}`);
  }
};

getData()
  .then(data => {
    for (let i = 0; i < data.artists.length; i++) {
      const cardHTML = `
        <div class="artists-page__card card" id="artist-${(i + 1)}">
          <div class="card__image-container">
            <img src="${data.artists[i].photo}" alt="${data.artists[i].name}" class="card__image">
          </div>
          <!-- /.card__image-container -->
          <div class="card__content">
            <div class="card__row">
              <h3 class="card__title">${data.artists[i].name}</h3>
              <span class="card__date">${data.artists[i].date}</span>
            </div>
            <!-- /.card__row -->
            <div class="card__text">
              <p class="card__desc">
                ${data.artists[i].description}
              </p>
            </div>
            <!-- /.card__text -->
            <a href="#" class="card__link">Show more</a>
          </div>
          <!-- /.card__content -->
        </div>
        <!-- /.card -->
      `;

      const selectHTML = `
        <li class="artists-page__select-item">
          <a class="artists-page__select-link" href="#artist-${(i + 1)}">${data.artists[i].name}</a>
        </li>
      `;
      artistsWrapper.insertAdjacentHTML("beforeend", cardHTML);
      artistsSelectList.insertAdjacentHTML("beforeend", selectHTML);
      // Initialization of dynamically preloaded components
      selectLinks = document.querySelectorAll(".artists-page__select-link");
      showMoreLinks = document.querySelectorAll(".card__link");
      cardsText = document.querySelectorAll(".card__text");
      cardsContent = document.querySelectorAll(".card__content");

    }
    selectLinkHandler();
    selectHandler();
    cardHandler();
  })
  .catch(err => {
    console.error(err);
  });

function cardHandler() {
  const linksArray = [].slice.call(showMoreLinks);
  linksArray.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      // alert(`Вы нажали на ссылку ${index}`);
      item.classList.toggle("active");
      cardsText[index].classList.toggle("active");
      cardsContent[index].classList.toggle("active");
      if (item.classList.contains("active")) {
        item.textContent = "Hide";
      } else {
        item.textContent = "Show more";
      }
    })
  });
}
function selectLinkHandler() {
  selectLinksArray = [].slice.call(selectLinks);
  selectLinksArray.forEach(item => {
    item.addEventListener("click", () => {
      artistsSelectBody.textContent = item.textContent;
      artistsSelectBody.classList.remove("active");
      artistsSelectContent.classList.remove("active");
    });
  });
}
function selectHandler() {
  artistsSelectBody.addEventListener("click", (event) => {
    event.preventDefault();
    artistsSelectBody.classList.toggle("active");
    artistsSelectContent.classList.toggle("active");
  });
}