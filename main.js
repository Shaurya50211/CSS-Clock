const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date()
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    // console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360 + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    // console.log(minutes);

    const hour = now.getMinutes()
    const hourDegrees = ((hour/12)*360 + 90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    // console.log(hour);
}

setInterval(() => {
    setDate()
}, 1000 );