const checkForBMI = (bmi) => {
    const changeColor = (value) => {
        const firstEle = document.querySelector('.main__input')
        const secondEle = document.querySelector('.main__results')
        firstEle.style.borderColor = value
        secondEle.style.borderColor = value
    }
    const p = document.querySelector('.bmiText')
    if(bmi <= 20){ changeColor('grey'); p.innerHTML = 'Niedowaga' }
    if(bmi > 20 && bmi <= 24.9){ changeColor('green'); p.innerHTML = 'Waga Prawidłowa' }
    if(bmi > 25 && bmi <= 29.9){ changeColor('yellow'); p.innerHTML = 'Nadwaga' }
    if(bmi > 30 && bmi <= 34.9){ changeColor('red'); p.innerHTML = 'Otyłość I stopnia' }
    if(bmi > 35 && bmi <= 39.9){ changeColor('darkred'); p.innerHTML = 'Otyłość II stopnia' }
    if(bmi >= 40){ changeColor('black'); p.innerHTML = 'Otyłość III stopnia' }
}
export { checkForBMI }