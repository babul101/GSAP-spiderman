// const slides = document.querySelector('section div.slides')
// const images = slides.querySelectorAll('img')

// let current = 0;
// let z = 0;

// slides.addEventListener('click',function(){
//     z = z + 1;
//     images[current].style.zIndex = z

//     current = current + 1
//     current = current % images.length

// })

const slides = document.querySelector("section div.slides");
const images = slides.querySelectorAll("img");

let current = 0;

// Initially, hide all images except the first one
images.forEach((image, index) => {
  if (index !== 0) {
    image.style.display = "none";
  }
});

slides.addEventListener("click", function () {
  // Hide the current image
  images[current].style.display = "none";

  // Move to the next image
  current = (current + 1) % images.length;

  // Show the next image
  images[current].style.display = "block";
});
