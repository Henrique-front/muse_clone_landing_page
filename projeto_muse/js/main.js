const next = document.querySelector(".botao-direito");
const prev = document.querySelector(".botao-esquerdo");

const items = document.getElementsByClassName("item");
const slide = document.querySelector(".slide");

const slideFotos = document.querySelector(".photos-slide");

const fotos = document.getElementsByClassName("photos");

const tamanhoFotos = fotos.length;

const tamanhoItems = items.length;

let i = 0;

next.addEventListener("click", function () {
  i++;
  if (i === tamanhoItems - 1) {
    next.classList.add("none");
  } else if (i > 0) {
    prev.classList.remove("none");
  }
  uptadeSlideNext();
});

prev.addEventListener("click", function () {
  i--;
  if (i === 0) {
    prev.classList.add("none");
  } else if (i < tamanhoItems - 1) {
    next.classList.remove("none");
  }
  uptadeSlideNext();
});

function uptadeSlideNext() {
  slide.style.transform = `translate(${-i * 732}px)`;
}

// responsive

const nextMobile = document.querySelector(".mobile-botao-direito");
const prevMobile = document.querySelector(".mobile-botao-esquerdo");

nextMobile.addEventListener("click", function () {
  i++;
  if (i === tamanhoItems / 4) {
    nextMobile.style.display = "none";
  } else if (i > 0) {
    prevMobile.style.display = "block";
  }

  uptadeSlideNextMobile();
});

prevMobile.addEventListener("click", function () {
  i--;
  if (i === 0) {
    prevMobile.style.display = "none";
  } else if (i < tamanhoItems - 1) {
    nextMobile.style.display = "block";
  }

  uptadeSlideNextMobile();
});

function uptadeSlideNextMobile() {
  slide.style.transform = `translate(${-i * 416}px)`;
}

// mini

const nextMini = document.querySelector(".mini-botao-direito");
const prevMini = document.querySelector(".mini-botao-esquerdo");

nextMini.addEventListener("click", function () {
  i++;
  if (i === tamanhoItems - 1) {
    nextMini.style.display = "none";
  } else if (i > 0) {
    prevMini.style.display = "block";
  }

  uptadeSlideNextMini();
});

prevMini.addEventListener("click", function () {
  i--;
  if (i === 0) {
    prevMini.style.display = "none";
  } else if (i < tamanhoItems - 1) {
    nextMini.style.display = "block";
  }

  uptadeSlideNextMini();
});

function uptadeSlideNextMini() {
  slide.style.transform = `translate(${-i * 241}px)`;
}

//nav

const menuMobile = document.querySelector(".nav-mobile");
const menuMobileClose = document.querySelector(".nav-mobile-close");
const navMobile = document.querySelector(".menu-mobile");
const navBar = document.querySelector(".nav-bar-mobile");

menuMobile.addEventListener("click", function () {
  menuMobile.style.display = "none";
  menuMobileClose.style.display = "block";
  navMobile.style.display = "block";
});

menuMobileClose.addEventListener("click", function () {
  menuMobileClose.style.display = "none";
  navMobile.style.display = "none";
  menuMobile.style.display = "grid";
});

navBar.addEventListener("click", function () {
  menuMobileClose.style.display = "none";
  navMobile.style.display = "none";
  menuMobile.style.display = "grid";
});

// photos

const photosNext = document.querySelector("#photo-next");
const photosPrev = document.querySelector("#photo-prev");

let j = 0;

photosNext.addEventListener("click", function () {
  j++;
  if (j === tamanhoFotos / 4) {
    photosNext.style.display = "none";
  } else if (j > 0) {
    photosPrev.style.display = "block";
  }

  uptadeSlidePhotos();
});

photosPrev.addEventListener("click", function () {
  j--;
  if (j == 0) {
    photosPrev.style.display = "none";
  } else if (j < tamanhoFotos / 4) {
    photosNext.style.display = "block";
  }

  console.log(j);

  uptadeSlidePhotos();
});

function uptadeSlidePhotos() {
  slideFotos.style.transform = `translateX(${-j * 738}px)`;
}

// formulario

const form = document.getElementsByClassName("form")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.querySelector("#email");
  thanks();
});

// validar formulario

function thanks() {
  const title = document.getElementsByClassName("title-form")[0];
  const title2 = document.getElementsByClassName("title-form")[1];

  form.classList.add("none");
  title.classList.add("none");
  title2.classList.remove("none");
}
