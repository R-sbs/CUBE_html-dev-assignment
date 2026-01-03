const mainImage = document.getElementById("activeImage");
const thumbs = document.querySelectorAll(".thumbnail");
const dotsContainer = document.querySelector(".dots");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

thumbs.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");

  dot.addEventListener("click", () => updateSlider(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider(index) {
  currentIndex = index;

  mainImage.src = thumbs[index].src;

  thumbs.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  thumbs[index].classList.add("active");
  dots[index].classList.add("active");
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => updateSlider(index));
});


prevBtn.addEventListener("click", () => {
  const index = (currentIndex - 1 + thumbs.length) % thumbs.length;
  updateSlider(index);
});

nextBtn.addEventListener("click", () => {
  const index = (currentIndex + 1) % thumbs.length;
  updateSlider(index);
});

// hamburger functionality

 const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close-menu');

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenuFn() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMenuFn);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenuFn();
  });