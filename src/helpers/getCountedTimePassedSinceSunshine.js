export const calculateTimeElapsed = (initialTime) => {
    const [initialHour, initialMinute] = initialTime.split(":").map(Number);

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    let hourDiff = currentHour - initialHour;
    let minuteDiff = currentMinute - initialMinute;

    if (minuteDiff < 0) {
        minuteDiff += 60;
        hourDiff -= 1;
    }
    if (hourDiff < 0) {
        hourDiff += 24;
    }

    const elapsedHour = String(hourDiff).padStart(2, "0");
    const elapsedMinute = String(minuteDiff).padStart(2, "0");

    return `${elapsedHour}:${elapsedMinute}`;
};
