$(function () {

    $('.about__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'about__slider-dots'
    });

});

$(document).ready(function () { // Ждём загрузки страницы

    $(".image").click(function () {	// Событие клика на маленькое изображение
        let img = $(this);	// Получаем изображение, на которое кликнули
        let src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $(".featured__container").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
            "<img src=" + src + " class='popup_img' />" + // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(800); // Медленно выводим изображение
        $(".popup_bg").click(function () {	// Событие клика на затемненный фон	   
            $(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
            setTimeout(function () {	// Выставляем таймер
                $(".popup").remove(); // Удаляем разметку высплывающего окна
            }, 800);
        });
    });

});




let div_know = document.querySelectorAll('.service-know');
let servContent = document.querySelectorAll('.service-content');
let servHeader = document.querySelectorAll('.service-header');
let servImg = document.querySelectorAll('.service-img');
let serviceLine = document.querySelectorAll('.service-line');
let servCross = document.querySelectorAll('.service-cross');

for (let i = 0; i < div_know.length; i++) {

    div_know[i].onclick = () => {
        servImg[i].classList.add('service-none');
        div_know[i].classList.add('service-none');
        serviceLine[i].classList.add('service-none');
        servCross[i].classList.add('service-active-cross')
        servHeader[i].setAttribute('style', 'color:black; top:60px');
        servContent[i].setAttribute('style', 'color:black; top:100px');
        servContent[i].innerHTML = 'Our most popular service is our Virtual Receptionist. We know that sometimes it’s something and you middle most this job was posted less than five minutes ago, and we think it’s a good match for you. If you submit a proposal now, you’ll be one of the first candidates. You may even catch the client while they’re still online.'
    }
    servCross[i].onclick = () => {
        servImg[i].classList.remove('service-none');
        div_know[i].classList.remove('service-none');
        serviceLine[i].classList.remove('service-none');
        servCross[i].classList.remove('service-active-cross');
        servHeader[i].removeAttribute('style')
        servContent[i].removeAttribute('style');
        servContent[0].innerHTML = 'Our most popular service is our Virtual Receptionist. We know that sometimes it’s something and you middle most...'
        servContent[1].innerHTML = 'Our most popular service is our Virtual Receptionist. We know that sometimes it’s something and you middle most...'
        servContent[2].innerHTML = 'Our most popular service is our Virtual Receptionist. We know that...'
        servContent[3].innerHTML = 'We know that sometimes it’s something and you middle most..'
        servContent[4].innerHTML = 'Our most popular service is our new virtual Receptionist you middle most..'
        servContent[5].innerHTML = 'Our most popular service is our Virtual Receptionist. We know that sometimes it’s something and you middle most...'

    }
}

//Блок OUR TEAM

let teamActive = document.querySelectorAll('.team__img-container');

for (let i = 0; i < teamActive.length; i++) {
    teamActive[i].onmouseover = () => {
        document.querySelectorAll('.team-active')[i].style.display = 'block';
    }
    teamActive[i].onmouseout = () => {
        document.querySelectorAll('.team-active')[i].style.display = 'none';
    }

}

//Блок WHAT THEY SAYS

let l_btn = document.querySelector('.item-left-dot');
let r_btn = document.querySelector('.item-right-dot');

let j = 1;

let person = [
    {
        name: "AL RAYHAN",
        work: "/ UI/UX DESIGNER",
        say: "Lorem Ipsum is simply dummy text of the printing and you standard dummy know that text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name: "VICTOR",
        work: "/MIDDLE DEV PYTHON",
        say: "Cardiff City had originally been playing home fixtures at Sophia Gardens but the lack of facilities at the ground had prevented them from joining the Southern Football League."
    },
    {
        name: "JEORGE",
        work: "/JUNIOR DEV JAVASCRIPT",
        say: "To combat this, club founder Bartley Wilson secured a plot of land from Cardiff Corporation that had previously been used as a rubbish tip and construction of a new ground began in 1909."
    },
    {
        name: "JOHN",
        work: "/SENIOR DEV REACT",
        say: "The stadium was completed a year later and named Ninian Park after Lieutenant-Colonel Lord Ninian Crichton-Stuart, who had acted as a financial guarantor for the build."
    },
    {
        name: "MORGAN",
        work: "/JUNIOR BACK-END DEV",
        say: " friendly match against Football League First Division champions Aston Villa was organised to open the ground."
    },
    {
        name: "JOSE",
        work: "/ DESINGER",
        say: "The ground was also used as the home stadium for the Wales national football team from 1911 until the late 1980s, hosting 84 international fixtures during its existence."
    }

]

r_btn.onclick = () => {
    if (j < person.length) {
        document.querySelector('.images-slider').setAttribute('src', `images/5_${++j}.png`);
        document.querySelector('.slider-right-content p').innerHTML = `${person[j - 1].say}`;
        document.querySelector('.slider-right-title').innerHTML = `${person[j - 1].name}`;
        document.querySelector('.slider-right-description').innerHTML = `${person[j - 1].work}`;
        console.log(j)

    } else {
        j = 0;
        document.querySelector('.images-slider').setAttribute('src', `images/5_${++j}.png`);
        document.querySelector('.slider-right-content p').innerHTML = `${person[j - 1].say}`;
        document.querySelector('.slider-right-title').innerHTML = `${person[j - 1].name}`;
        document.querySelector('.slider-right-description').innerHTML = `${person[j - 1].work}`;
        console.log(j)
    }
}

l_btn.onclick = () => {

    if (j < person.length && j > 1) {
        document.querySelector('.images-slider').setAttribute('src', `images/5_${j}.png`);
        document.querySelector('.slider-right-content p').innerHTML = `${person[j - 1].say}`;
        document.querySelector('.slider-right-title').innerHTML = `${person[j - 1].name}`;
        document.querySelector('.slider-right-description').innerHTML = `${person[j - 1].work}`;
        j--;

    } else {
        j = 6;
        document.querySelector('.images-slider').setAttribute('src', `images/5_${j}.png`);
        document.querySelector('.slider-right-content p').innerHTML = `${person[j - 1].say}`;
        document.querySelector('.slider-right-title').innerHTML = `${person[j - 1].name}`;
        document.querySelector('.slider-right-description').innerHTML = `${person[j - 1].work}`;
        j--;
    }
}

//our partners
let partners = document.querySelectorAll('.main__partners-item');
for (let i = 0; i < partners.length; i++) {
    partners[i].onmouseover = () => {
        partners[i].classList.add('none')
    }
}


