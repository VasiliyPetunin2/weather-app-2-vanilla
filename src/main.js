import "./components/input-search/__input/_handle-icon/_handle-icon.js";
import "./components/input-search/__cancel-button/_handle-appearance/input-search__cancel-button_handle-appearance.js";
import "./components/input-search/__cancel-button/_clear-input/input-search__cancel-button_clear-input.js";
import "./components/input-search/__input/_get-filled-data/_get-filled-data.js";
import "./components/future-time-forecast-navigation/__forecast-type/future-time-forecast-navigation__forecast-type.js";
import "./components/slider-container/__slider/_generate-slides/slider-container__slider_generate-slides.js";
import "./helpers/getCurrentDate.js";
import { getCurrentTime } from "./helpers/getCurrentTime.js";
import { calculateTimeElapsed } from "./helpers/getCountedTimePassedSinceSunshine.js";
import { calculateRemainingTime } from "./helpers/getCountedTimeUntilSunset.js";
import { initialData } from "./data/initialData.js";

const timeEl = document.querySelector(".real-time-forecast-main-info__time");
const humidityValueEL = document.getElementById("humidityValue");
const pressureValueEl = document.getElementById("pressureValue");
const pressureDegreeEl = document.getElementById("pressureDegree");
const visibilityValueEl = document.getElementById("visibilityValue");
const visibilityDegreeEl = document.getElementById("visibilityDegree");
const sunshineValueEl = document.getElementById("sunshineValue");
const timePassedSinceSunshineEl = document.getElementById("timePassedSinceSunshine");
const sunsetValueEl = document.getElementById("sunsetValue");
const timeUntilSunsetEl = document.getElementById("timeUntilSunset");
const windSpeedValueEl = document.getElementById("windSpeedValue");
const windDirectionEl = document.getElementById("windDirection");
const progressBarHumidityEl = document.getElementById("progressBarHumidity");
const progressBarPressureEl = document.getElementById("progressBarPressure");
const progressBarVisibilityEl = document.getElementById("progressBarVisibility");

setInterval(() => {
    timeEl.textContent = getCurrentTime();
}, 1000);

humidityValueEL.textContent = initialData.humidity.value;
progressBarHumidityEl.childNodes.forEach((child) => {
    if (child.classList?.contains("progress-bar__scale"))
        child.style.mask = `radial-gradient(circle at ${initialData.humidity.value}%, transparent 7px, black 5px)`;
    if (child.classList?.contains("progress-bar__icon")) child.style.left = `${initialData.humidity.value}%`;
});

pressureValueEl.textContent = initialData.pressure.value;
progressBarPressureEl.childNodes.forEach((child) => {
    if (child.classList?.contains("progress-bar__scale"))
        child.style.mask = `radial-gradient(circle at ${initialData.pressure.value / 10}%, transparent 7px, black 5px)`;
    if (child.classList?.contains("progress-bar__icon")) child.style.left = `${initialData.pressure.value / 10}%`;
});
pressureDegreeEl.textContent = initialData.pressure.degree;

visibilityValueEl.textContent = initialData.visibility.value;
progressBarVisibilityEl.childNodes.forEach((child) => {
    if (child.classList?.contains("progress-bar__scale"))
        child.style.mask = `radial-gradient(circle at ${initialData.visibility.value}%, transparent 7px, black 5px)`;
    if (child.classList?.contains("progress-bar__icon")) child.style.left = `${initialData.visibility.value}%`;
});
visibilityDegreeEl.textContent = initialData.visibility.degree;

sunshineValueEl.textContent = initialData.sunshine.value;
setInterval(() => {
    timePassedSinceSunshineEl.textContent = calculateTimeElapsed(initialData.sunshine.value);
}, 1000);

sunsetValueEl.textContent = initialData.sunset.value;
setInterval(() => {
    timeUntilSunsetEl.textContent = calculateRemainingTime(initialData.sunset.value);
}, 1000);

windSpeedValueEl.textContent = initialData.windSpeed.value;
windDirectionEl.textContent = initialData.windSpeed.direction;
