import { createPopup } from './components/popup.js'
import { checkForBMI } from './components/resultsHandler.js'

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


