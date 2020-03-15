
/* Header */
let menuLinks = document.querySelectorAll('.menu-link');
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = () => {
        for (let j = 0; j < menuLinks.length; j++) {
            menuLinks[j].classList.remove('active-link')
        }
        menuLinks[i].classList.add('active-link')
    }
}

/* Slider. Переключение слайдов */
let verticalBlack = document.querySelector('.vertical-phone-black')
let horizontalBlack = document.querySelector('.horizontal-phone-black')

let imgUrl = './assets/slider-`${}`.png'
let imgArr = [1, 2]
let imgSlider = document.querySelector('.phone-img-slider')
let btnLeft = document.querySelector('.btn-left')
let btnRight = document.querySelector('.btn-right')
let sectionSlider = document.querySelector('.section-slider');
let k = 0;
let j = 1
btnLeft.onclick = () => {
    verticalBlack.style.zIndex = 0;
    horizontalBlack.style.zIndex = 0;

    sectionSlider.classList.toggle('slider-two')
    if (k >= 1) {
        k--;
        imgSlider.src = `./assets/slider-${imgArr[k]}.png`;
    } else {
        imgSlider.src = `./assets/slider-${imgArr[imgArr.length - 1]}.png`;
        k = imgArr.length - 1
    }
}
btnRight.onclick = () => {
    verticalBlack.style.zIndex = 0;
    horizontalBlack.style.zIndex = 0;
    let sectionSlider = document.querySelector('.section-slider');
    sectionSlider.classList.toggle('slider-two')
    if (k < imgArr.length - 1) {
        k++;
        imgSlider.src = `./assets/slider-${imgArr[k]}.png`;
    } else {
        imgSlider.src = `./assets/slider-${imgArr[0]}.png`;
        k = 0
    }
    console.log(k)
}

/* Slider. Активация экранов телефонов */

let btnPhone1 = document.querySelectorAll('.btn-phone')[0];
let btnPhone2 = document.querySelectorAll('.btn-phone')[1];

btnPhone1.onclick = () => {

    verticalBlack.style.zIndex == 1 ? verticalBlack.style.zIndex = 0 : verticalBlack.style.zIndex = 1;
}
btnPhone2.onclick = () => {
    horizontalBlack.style.zIndex == 1 ? horizontalBlack.style.zIndex = 0 : horizontalBlack.style.zIndex = 1
}


/* Portfolio. Переключение табов */

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




