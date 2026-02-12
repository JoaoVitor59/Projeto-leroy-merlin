const photos = document.querySelectorAll('.photo');
const section = document.querySelector('.sticky-section');

window.addEventListener('scroll', () => {
  const start = section.offsetTop;
  const end = start + section.offsetHeight - window.innerHeight;
  const scroll = window.scrollY;

  if (scroll < start || scroll > end) return;

  const progress = (scroll - start) / (end - start);
  const index = Math.min(
    photos.length - 1,
    Math.floor(progress * photos.length)
  );

  photos.forEach((photo, i) => {
    photo.classList.toggle('active', i === index);
  });
});






const backIntro = document.getElementById("backIntro");
const introSection = document.getElementById("intro");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      backIntro.classList.add("hidden");
    } else {
      backIntro.classList.remove("hidden");
    }
  },
  { threshold: 0.4 }
);

observer.observe(introSection);
