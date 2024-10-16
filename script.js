
// for sliding certificate images 

const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

prevBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].classList.add('active');
});

nextBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add('active');
});


// for hamburger button

  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list ul');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });


  // Get the Learn More button and the hidden content
const learnMoreBtn = document.getElementById("learnMoreBtn");
const moreContent = document.getElementById("moreContent");

// Add event listener to the Learn More button
learnMoreBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    if (moreContent.classList.contains("hidden")) {
        moreContent.classList.remove("hidden"); // Show hidden content
        learnMoreBtn.textContent = "Show Less"; // Change button text
    } else {
        moreContent.classList.add("hidden"); // Hide content
        learnMoreBtn.textContent = "Learn More"; // Revert button text
    }
});


// const textArray = ["Frontend Developer", "Business Strategist", "Nature Lover"];
// let textIndex = 0;
// let currentText = "";
// let letterIndex = 0;
// const changingTextElement = document.getElementById("changing-text");

// function typeText() {
//   currentText = textArray[textIndex];
//   letterIndex = 0;
//   changingTextElement.textContent = "";
  
//   const typingInterval = setInterval(() => {
//     if (letterIndex < currentText.length) {
//       changingTextElement.textContent += currentText.charAt(letterIndex);
//       letterIndex++;
//     } else {
//       clearInterval(typingInterval);
//       setTimeout(changeText, 2000); // Wait 2 seconds before changing the text
//     }
//   }, 100); // Adjust typing speed here
// }

// function changeText() {
//   textIndex = (textIndex + 1) % textArray.length; // Loop through the array
//   typeText();
// }

// // Start the text change after the page loads
// document.addEventListener("DOMContentLoaded", typeText);

