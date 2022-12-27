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

const calcBMI = (weight, height) => {
    const bmi = (weight / Math.pow(height * 0.01, 2)).toFixed(2) 
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
    
    document.querySelector('.span').innerHTML = calcBMI(w, h)    
})

addEventListener('mousemove', (e) => {
    const ele = document.querySelector('.main__popup')
    let top = e.clientY
    let left = e.clientX
    ele.style.top = top + 20 + 'px'
    ele.style.left = left + 10 + 'px'

})

