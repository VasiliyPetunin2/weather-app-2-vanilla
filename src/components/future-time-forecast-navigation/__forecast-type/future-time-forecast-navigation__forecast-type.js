import { generateSlides } from "../../slider-container/__slider/_generate-slides/slider-container__slider_generate-slides.js";

(function () {
    const hourlyForecastBtn = document.getElementById("hourlyForecast");
    const weeklyForecastBtn = document.getElementById("weeklyForecast");

    const toggleActiveNavBtn = (clickedNavBtn) => {
        if (!clickedNavBtn.classList.contains("future-time-forecast-navigation__forecast-type_active")) {
            hourlyForecastBtn.classList.toggle("future-time-forecast-navigation__forecast-type_active");
            weeklyForecastBtn.classList.toggle("future-time-forecast-navigation__forecast-type_active");
            generateSlides(clickedNavBtn.id);
        }
    };

    hourlyForecastBtn.addEventListener("click", (e) => {
        toggleActiveNavBtn(e.target);
    });
    weeklyForecastBtn.addEventListener("click", (e) => {
        toggleActiveNavBtn(e.target);
    });
})();
