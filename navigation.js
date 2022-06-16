/* menu switch icon */

function myFunction(x) {
  x.classList.toggle("change");
}

/* navigation drop down menu bar */

const mobileNav = document.querySelector("#mobile");
const mobileToggle = document.querySelector(".mobiletoggle");

mobileToggle.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute("data-visible")

  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", true);
    mobileToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    mobileNav.setAttribute("data-visible", false);
    mobileToggle.setAttribute("aria-expanded", false);
  }
});

/* Scroll Animations */

const eases = document.querySelectorAll('.ease-up');
const scales = document.querySelectorAll('.scale-in');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver 
(function(
  entries, 
  appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, 
  appearOptions);

  eases.forEach(ease => {
    appearOnScroll.observe(ease);
  });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  scales.forEach(scale => {
    appearOnScroll.observe(scale);
  });

  sliders.forEach(slide => {
    appearOnScroll.observe(slide);
  });


  /* message us pop up form */

  document.querySelector("#show-form").addEventListener("click", function() {
    document.querySelector("#popup").classList.add("active");
    document.querySelector("#popupbg").classList.add("active");
  });

  
  document.querySelector("#popup .close-btn").addEventListener("click", function() {
    document.querySelector("#popup").classList.remove("active");
    document.querySelector("#popupbg").classList.remove("active");
  }); 