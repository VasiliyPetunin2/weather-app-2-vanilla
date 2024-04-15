import { weeklyForecastData } from "../../../../data/weeklyForecastData.js";
import { hourlyForecastData } from "../../../../data/hourlyForecastData.js";
import { generateSlideHTML } from "../../../slide/_generate-slide-html/slide_generate-slide-html.js";

const slider = document.querySelector(".slider-container__slider");

function generateSlidesHTML(forecastType) {
    if (forecastType === "hourlyForecast") {
        return hourlyForecastData.map((slideData) => generateSlideHTML(forecastType, slideData)).join("");
    }

    if (forecastType === "weeklyForecast") {
        return weeklyForecastData.map((slideData) => generateSlideHTML(forecastType, slideData)).join("");
    }
}

export function generateSlides(forecastType) {
    slider.innerHTML = generateSlidesHTML(forecastType);
}

generateSlides("weeklyForecast");
