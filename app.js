const btn = document.querySelector('.check-btn');
const link = document.querySelector('.small-link-container');

btn.addEventListener('click', function () {
  console.log(link.classList);
  link.classList.toggle('show-links');
});

const navLinks = document.querySelectorAll('.small-link-container a');

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    link.classList.remove('show-links');
  });
});
