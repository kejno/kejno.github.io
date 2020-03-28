document.addEventListener('scroll', onScroll);
function onScroll(e) {
    const currentPos = +(window.scrollY + 1).toFixed(0);
    const mainDivs = document.querySelectorAll('main>div');
    const links = document.querySelectorAll('.menu-list a')
    mainDivs.forEach((el) => {
        el.getAttribute('id')
        if (el.offsetTop <= currentPos && (el.offsetTop + el.offsetHeight) > currentPos) {
            links.forEach((a) => {
                const idDivs = a.getAttribute('href').substring(1);
                a.classList.remove('active-link');
                if (el.getAttribute('id') === idDivs) {
                    a.classList.add('active-link');
                }
            })
        }
    })

}

/* SLIDER */

let slides = document.querySelectorAll('.slide-img');
let slideParent = document.querySelectorAll('.slide')
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src
    slides[i].parentElement.remove()
}
console.log(slider)

let step = 0;
let offset = 0;

function next() {
    let img = document.createElement('img');
    let div = document.createElement('div');



    img.src = slider[step];
    img.classList.add('slide-img')
    div.classList.add('slide', 'slide-single')
    document.querySelector('.slidershow-container').append(div);
    div.style.left = offset * 960 + 'px';
    document.querySelectorAll('.slide')[document.querySelectorAll('.slide').length - 1].append(img);

    if (step + 1 == slider.length) {
        step = 0
    } else step++;
    offset = 1;
}


function right() {
    document.onclick = null;
    let slides2 = document.querySelectorAll('.slide');
    console.log(slides2)
    let offset2 = 0;
    document.querySelector('.section-slider').classList.toggle('bg-two');
    document.querySelector('.black-ekran').classList.remove('d-block')
    document.querySelector('.black-ekran-horizontal').classList.remove('d-block')

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 960 - 960 + 'px';
        offset2++;
    }
    setTimeout(() => {
        slides2[0].remove();
        next();
        btnLeft.onclick = right;
        btnRight.onclick = right;
    }, 1000);
}
next();
next();

let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right')

btnLeft.onclick = right;
btnRight.onclick = right;

document.querySelector('.btn-phone').onclick = () => {
    document.querySelector('.black-ekran').classList.toggle('d-block')
}
document.querySelector('.btn-phone-1').onclick = () => {
    document.querySelector('.black-ekran-horizontal').classList.toggle('d-block')
}


/* Portfolio.Переключение табов  */

let btnPortfolio = document.querySelector('.portfolio-buttons').children;
let itemPortfolio = document.querySelectorAll('.portfolio-item')
let portImg = [
    [-8, -10],
    [-82, -43],
    [-12, -1],
    [-24, -2],
    [-11, -13],
    [-17, -2],
    [-31, -36],
    [-24, -30],
    [-17, -1],
    [-142, -112],
    [-144, -173],
    [-36, -58]
]
let imgPortfolio = document.querySelectorAll('.portfolio-item');
for (let i = 0; i < btnPortfolio.length; i++) {
    btnPortfolio[i].onclick = () => {
        for (let k = 0; k < imgPortfolio.length; k++) {
            imgPortfolio[k].classList.remove('portfolio-img-active')
        }

        for (let j = 0; j < btnPortfolio.length; j++) {
            btnPortfolio[j].classList.remove('portfolio-button-active')
        }
        btnPortfolio[i].classList.add('portfolio-button-active');
        if (i == 0) {
            for (let k = 0; k < itemPortfolio.length; k++) {
                itemPortfolio[k].innerHTML = '';
                itemPortfolio[k].innerHTML = `<img src="./assets/portf_${k + 1}.png" alt="portf_${k + 1}.png" style="transform: translate(${portImg[k][0]}px,${portImg[k][1]}px)">`
            }
        }

        if (i == 1) {
            for (let k = 0; k < itemPortfolio.length; k++) {
                itemPortfolio[k].innerHTML = '';
                if (k == 11) {
                    itemPortfolio[k].innerHTML = `<img src="./assets/portf_${1}.png" alt="portf_${1}.png" style="transform: translate(${portImg[0][0]}px,${portImg[0][1]}px)">`
                } else {
                    itemPortfolio[k].innerHTML = `<img src="./assets/portf_${k + 2}.png" alt="portf_${k + 2}.png" style="transform: translate(${portImg[k + 1][0]}px,${portImg[k + 1][1]}px)">`
                }
            }
        }
        if (i == 2) {
            for (let k = 0; k < itemPortfolio.length; k++) {
                itemPortfolio[k].innerHTML = '';
                if (k == 10 || k == 11) {
                    itemPortfolio[10].innerHTML = `<img src="./assets/portf_${1}.png" alt="portf_${1}.png" style="transform: translate(${portImg[0][0]}px,${portImg[0][1]}px)">`
                    itemPortfolio[11].innerHTML = `<img src="./assets/portf_${2}.png" alt="portf_${2}.png" style="transform: translate(${portImg[1][0]}px,${portImg[1][1]}px)">`
                }
                else {
                    itemPortfolio[k].innerHTML = `<img src="./assets/portf_${k + 3}.png" alt="portf_${k + 3}.png" style="transform: translate(${portImg[k + 2][0]}px,${portImg[k + 2][1]}px)">`
                }
            }
        }
        if (i == 3) {
            for (let k = 0; k < itemPortfolio.length; k++) {
                itemPortfolio[k].innerHTML = '';
                if (k == 9 || k == 10 || k == 11) {
                    itemPortfolio[9].innerHTML = `<img src="./assets/portf_${1}.png" alt="portf_${1}.png" style="transform: translate(${portImg[0][0]}px,${portImg[0][1]}px)">`
                    itemPortfolio[10].innerHTML = `<img src="./assets/portf_${2}.png" alt="portf_${2}.png" style="transform: translate(${portImg[1][0]}px,${portImg[1][1]}px)">`
                    itemPortfolio[11].innerHTML = `<img src="./assets/portf_${3}.png" alt="portf_${3}.png" style="transform: translate(${portImg[2][0]}px,${portImg[2][1]}px)">`
                }
                else {
                    itemPortfolio[k].innerHTML = `<img src="./assets/portf_${k + 4}.png" alt="portf_${k + 4}.png" style="transform: translate(${portImg[k + 3][0]}px,${portImg[k + 3][1]}px)">`
                }
            }
        }

    }
}


console.log(imgPortfolio)
for (let i = 0; i < itemPortfolio.length; i++) {
    itemPortfolio[i].onclick = () => {
        for (let k = 0; k < imgPortfolio.length; k++) {
            imgPortfolio[k].classList.remove('portfolio-img-active')
        }
        itemPortfolio[i].classList.add('portfolio-img-active')
    }
}


/* Get a quote */
let form = document.querySelector('.feedback-form')
let submit = document.querySelector('.submit-form')
let modal = document.querySelector('.modal')
let userName = document.querySelector('#feedback-name')
let userEmail = document.querySelector('#feedback-email')
let formSub = document.querySelector('#feedback-subject')
let formTextarea = document.querySelector('#feedback-area')
let formTheme = document.querySelector('.form-theme');
let formDescr = document.querySelector('.form-descr')
let formBtn = document.querySelector('.form-btn')
form.onsubmit = (event) => {
    event.preventDefault();
    modal.classList.remove('hidden')
    userName.value = '';
    userEmail.value = '';
    formSub.value ? formTheme.innerHTML = `Тема: ${formSub.value}` : formTheme.innerHTML = 'Без темы';
    formTextarea.value ? formDescr.innerHTML = `Описание: ${formTextarea.value}` : formDescr.innerHTML = 'Без описания';
    formBtn.onclick = () => {
        modal.classList.add('hidden');
        formSub.value = '';
        formTextarea.value = '';
    }
}

/* МЕНЮ КНОПКА */

let menuBtn = document.querySelector('.menu-button');
let header = document.querySelector('.header')
let headerLogo = document.querySelector('.header-logo');
let logoNormal = document.querySelector('.logo-normal');
let bgBlack = document.querySelector('.bg-black');


menuBtn.onclick = () => {
    menuBtn.classList.toggle('menu-button-active');
    header.classList.toggle('header-active');
    logoNormal.classList.toggle('disable');
    bgBlack.classList.toggle('active')




}  