const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const yearSpan = document.getElementById('year');

yearSpan.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

const bookingForm = document.querySelector('.booking-form');
bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thanks! Your request has been received. We will contact you soon to personalize your trip.');
  bookingForm.reset();
});
