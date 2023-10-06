const secondHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};

setInterval(() => {
    const { seconds, minutes, hours } = getTime();
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minutesHand.style.transform = `translate(0, -50%) rotate(${
        minutes * 6
    }deg)`;
    hoursHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
}, 1000);
