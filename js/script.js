const slider = document.querySelector(".slider");
const videos = document.querySelectorAll(".slide-video");
let isDown = false;
let startX;
let scrollLeft;
const testslider = document.querySelector(".testimonials-slide-track");

videos.forEach((video) => {
  video.pause();
  video.currentTime = 0;
});

slider.addEventListener("mouseenter", () => {
  videos.forEach((video) => {
    video.play();
  });
});

slider.addEventListener("mouseleave", () => {
  videos.forEach((video) => {
    video.pause();
  });
});

const end = () => {
  isDown = false;
  testslider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  testslider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - testslider.offsetLeft;
  scrollLeft = testslider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - testslider.offsetLeft;
  const dist = x - startX;
  testslider.scrollLeft = scrollLeft - dist;
};

(() => {
  testslider.addEventListener("mousedown", start);
  testslider.addEventListener("touchstart", start);

  testslider.addEventListener("mousemove", move);
  testslider.addEventListener("touchmove", move);

  testslider.addEventListener("mouseleave", end);
  testslider.addEventListener("mouseup", end);
  testslider.addEventListener("touchend", end);
})();
