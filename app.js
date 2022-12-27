// bmi = kg/m^2
const createPopup = (mess) => {
    const p = document.createElement('p')
    p.classList.add('popup')
    p.innerHTML = mess
    const cont = document.querySelector('.main__popup')
    cont.appendChild(p)
    setTimeout(() => {
        p.remove()
    }, 1000);
    
}



const changeColor = (value) => {
    const firstEle = document.querySelector('.main__input')
    const secondEle = document.querySelector('.main__results')
    firstEle.style.borderColor = value
    secondEle.style.borderColor = value
}
const checkForBMI = (bmi) => {
    const p = document.querySelector('.bmiText')

    if(bmi <= 20){ changeColor('grey'); p.innerHTML = 'Niedowaga' }
    if(bmi > 20 && bmi <= 24.9){ changeColor('green'); p.innerHTML = 'Waga Prawidłowa' }
    if(bmi > 25 && bmi <= 29.9){ changeColor('yellow'); p.innerHTML = 'Nadwaga' }
    if(bmi > 30 && bmi <= 34.9){ changeColor('red'); p.innerHTML = 'Otyłość I stopnia' }
    if(bmi > 35 && bmi <= 39.9){ changeColor('darkred'); p.innerHTML = 'Otyłość II stopnia' }
    if(bmi >= 40){ changeColor('black'); p.innerHTML = 'Otyłość III stopnia' }
}

const calcBMI = (weight, height) => {
    const bmi = (weight / Math.pow(height * 0.01, 2)).toFixed(1) 
    checkForBMI(bmi)
    if(weight !== "" && height !== "") return bmi
    else {
        createPopup('Podano błędną wartość!')
        return 'Błąd'
    }
}


const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const w = document.querySelector('.main__weight').value
    const h = document.querySelector('.main__height').value
    
    document.querySelector('.bmiValue').innerHTML = calcBMI(w, h)    
})

addEventListener('mousemove', (e) => {
    const ele = document.querySelector('.main__popup')
    let top = e.clientY
    let left = e.clientX
    ele.style.top = top + 20 + 'px'
    ele.style.left = left + 10 + 'px'

})

