let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function nextSlide() {

    // Current slide hide
    slides[currentSlide].classList.remove("active");

    // Move to next slide
    currentSlide++;

    // Show next slide
    if (currentSlide < slides.length) {

        slides[currentSlide].classList.add("active");

    }

}
function showFinalMessage() {
    document.getElementById("finalMessage").innerHTML =
        "And yes... this was made especially for you. 🥹❤️";
}