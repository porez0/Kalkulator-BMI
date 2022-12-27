const checkForBMI = (bmi) => {
    const resultHandler = (color, value) => {
        const border = document.querySelectorAll('.border')
        border.forEach(element => element.style.borderColor = color)
        const text = document.querySelector('.bmiText')
        text.innerHTML = value
    }
    if(bmi <= 20){ resultHandler('grey', 'Niedowaga') }
    if(bmi > 20 && bmi <= 24.9){ resultHandler('green', 'Waga Prawidłowa') }
    if(bmi > 25 && bmi <= 29.9){ resultHandler('yellow', 'Nadwaga') }
    if(bmi > 30 && bmi <= 34.9){ resultHandler('red', 'Otyłość I stopnia') }
    if(bmi > 35 && bmi <= 39.9){ resultHandler('darkred', 'Otyłość II stopnia') }
    if(bmi >= 40){ resultHandler('black', 'Otyłość III stopnia') }
}
export { checkForBMI }