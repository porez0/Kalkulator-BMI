export const createPopup = (mess) => {
    const p = document.createElement('p')
    p.classList.add('popup')
    p.innerHTML = mess
    const cont = document.querySelector('.main__popup')
    cont.appendChild(p)
    setTimeout(() => {
        p.remove()
    }, 1000);
}
addEventListener('mousemove', (e) => {
    const ele = document.querySelector('.main__popup')
    let top = e.clientY
    let left = e.clientX
    ele.style.top = top + 20 + 'px'
    ele.style.left = left + 10 + 'px'
})