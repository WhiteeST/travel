//console.log('Оценка - 125 баллов',
    // '\nОтзыв по пунктам ТЗ:,',
    // '\nВыполненные пункты:',
    // '\n1) на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа) ',
    // '\n2) Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) ',
    // '\n3) Анимации плавного перемещения для слайдера ',
    // '\n4) логин попап соответствует верстке его закрытие происходит при клике вне попапа ',
    // '\n5) логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег) ',
    // '\n6) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение) ');
$(document).ready(function () {
    $('body').click(function (event) {
        if ($('.nav-container').hasClass('active')) {
            $('.nav-container').removeClass(['active']);
        }
    });
    $('.menu-390').click(function (event) {
        $('.nav-container').addClass('active');
        event.stopPropagation();
    });
    $('.close-menu').click(function (event) {
        $('.nav-container').toggleClass('active');
    });
    $('.nav-li').click(function (event) {
        $('.nav-container').toggleClass('active');
    });
});
// alert('Pleas wait , work in progress, until 29.07.22')

const loginButton = document.getElementById('login-button');
const cirlce_button = document.querySelectorAll('.color-circle');
const townContainer = document.querySelectorAll('.town-container');
const sliderContainer = document.querySelector('.slider');
const arrowsList = document.querySelectorAll('.arrow-390');
const popupContainer = document.querySelector('.pop-up-container');
const regLink = document.getElementById('register');
const popupForm = document.getElementById('account');
const popupButton = document.querySelector('.popup_button')
const accountHandler = document.querySelector('.account_menu');
const logIn = document.getElementById('log_in');
let townID;
let checkFlagClick = true;

const clearTownContainer = () => {
    sliderContainer.classList.remove('spain_mid');
    sliderContainer.classList.remove('japan_mid');
    sliderContainer.classList.remove('usa_mid');
    cirlce_button.forEach(element => element.classList.remove('bright'));
}

const clickTownContainer = (element_id) => {

    // if (element_id > 2)
    switch (element_id) {
        case 1: {
            clearTownContainer();
            sliderContainer.classList.toggle('spain_mid');
            cirlce_button[0].classList.add('bright');
            arrowsList[0].classList.add('disable');
            arrowsList[1].classList.remove('disable');
            break;
        }
        case 2: {
            clearTownContainer();
            sliderContainer.classList.toggle('japan_mid');
            cirlce_button[1].classList.add('bright');
            arrowsList[0].classList.remove('disable');
            arrowsList[1].classList.remove('disable');
            break;
        }
        case 3: {
            clearTownContainer();
            sliderContainer.classList.toggle('usa_mid');
            cirlce_button[2].classList.add('bright');
            arrowsList[0].classList.remove('disable');
            arrowsList[1].classList.add('disable');
            break;
        }
    }

}

const registerTogle = () => {
    const popupHeader = document.querySelectorAll('.popup_header');
    const popupSignin = document.querySelectorAll('.popup_sign_in');
    const popupOrCont = document.querySelector('.popup_or_container');
    const popup_forgotlink = document.querySelector('.popup_forgotlink');
    const popup_register = document.querySelectorAll('.popup_register');
    const popupWindow = document.querySelector('.pop-up');

    popupHeader[0].classList.toggle('hidden');
    popupHeader[1].classList.toggle('hidden');
    popupSignin[0].classList.toggle('hidden');
    popupSignin[1].classList.toggle('hidden');
    popupOrCont.classList.toggle('hidden');
    popup_forgotlink.classList.toggle('hidden');
    popup_register[0].classList.toggle('hidden');
    popup_register[1].classList.toggle('hidden');
    popupWindow.classList.toggle('create_account');
}

const resize = () => {
    const containerLeft = window.getComputedStyle(document.querySelector('.slider')).left;
    // //console.log(containerLeft);
    if (containerLeft === '390px') {
        cirlce_button.forEach(element => element.classList.remove('bright'));
        cirlce_button[0].classList.add('bright');
    }
    else if (containerLeft === '0px') {
        cirlce_button.forEach(element => element.classList.remove('bright'));
        cirlce_button[1].classList.add('bright');
    }
    else if (containerLeft === '-390px') {
        cirlce_button.forEach(element => element.classList.remove('bright'));
        cirlce_button[2].classList.add('bright');
    }
}

accountHandler.addEventListener('click', (event) => {
    // //console.log(event);
    popupContainer.classList.toggle('hidden');
    (document.querySelector('body')).classList.toggle('scroll-lock')
})

regLink.addEventListener('click', (event) => {
    registerTogle();
})

logIn.addEventListener('click', (event) => {
    registerTogle();
})

popupButton.addEventListener('click', (event) => {
    const email = popupForm.email.value;
    const password = popupForm.password.value;
    alert('email : ' + email + '\npassword : ' + password);
})

loginButton.addEventListener('click', (event) => {
    // //console.log(popupContainer, 'and target=', event.target);
    popupContainer.classList.toggle('hidden');
    (document.querySelector('body')).classList.toggle('scroll-lock')
})

popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer && !(popupContainer.classList.contains('hidden'))) {
        popupContainer.classList.toggle('hidden');
        (document.querySelector('body')).classList.toggle('scroll-lock')
    }
})

window.addEventListener('resize', resize);
const mediaQuery = window.matchMedia('(max-width: 425px)')
if (mediaQuery.matches) {
    clearTownContainer();
    cirlce_button[0].classList.add('bright');
}
else {
    clearTownContainer();
    cirlce_button[1].classList.add('bright');
}

arrowsList.forEach(element => {
    element.addEventListener('click', (event) => {
        if (!element.classList.contains('disable')) {
            const sliderPosition = window.getComputedStyle(sliderContainer).left;
            clearTownContainer();
            if (element.classList.contains('left-arrow')) {
                if (sliderPosition === '0px') {
                    sliderContainer.classList.toggle('spain_mid');
                    cirlce_button[0].classList.add('bright');
                    arrowsList[0].classList.add('disable');
                    arrowsList[1].classList.remove('disable');
                }
                else if (sliderPosition === '-390px') {
                    sliderContainer.classList.toggle('japan_mid');
                    cirlce_button[1].classList.add('bright');
                    arrowsList[0].classList.remove('disable');
                    arrowsList[1].classList.remove('disable');
                }
            }
            else {
                // //console.log(sliderPosition);
                if (sliderPosition === '0px') {
                    sliderContainer.classList.toggle('usa_mid');
                    cirlce_button[2].classList.add('bright');
                    arrowsList[1].classList.add('disable');
                    arrowsList[0].classList.remove('disable');
                }
                else if (sliderPosition === '390px') {
                    sliderContainer.classList.toggle('japan_mid');
                    cirlce_button[1].classList.add('bright');
                    arrowsList[0].classList.remove('disable');
                    arrowsList[1].classList.remove('disable');
                }
            }
        }

    });
});

const clickSlideHandler = () => {
    checkFlagClick = false;
    //console.log('in clickSlideHandler', townID);
    sliderContainer.removeEventListener('click', clickSlideHandler);
    const mediaQuery = window.matchMedia('(max-width: 425px)')
    if (!mediaQuery.matches) {
        moveTown(townID);
    }
    else {
        //console.log('event.target else  =', townID)
        clickTownContainer(townID);
    }
}

const moveTown = (townID) => {
    //console.log('in moveTown', townID);
    if (townID === 3)
        sliderContainer.classList.add('usa_mid')
    else if (townID === 1)
        sliderContainer.classList.add('spain_mid')
    else {
        sliderContainer.addEventListener('click', clickSlideHandler);
        checkFlagClick = true;
    }
}

const sliderMoveHandler = (townID) => {
    const townArray = Array.from(document.querySelectorAll('.town-container'));
    const tempTown = townArray[2].cloneNode(true);
    //console.log('in sliderMoveHandler', townID);

    if (townID === 3) {
        townArray.shift();
        townArray.push(tempTown);
        sliderContainer.innerHTML = "";
        townArray.forEach(element => {
            sliderContainer.appendChild(element);
        })
        //console.log('after2', sliderContainer.classList);
    }
    else if (townID === 1) {
        townArray.pop();
        townArray.unshift(tempTown);
        sliderContainer.innerHTML = '';
        townArray.forEach(element => {
            sliderContainer.appendChild(element);
        })
    }
    if (townArray[2].classList.contains('japan-img')) {
        clearTownContainer();
        cirlce_button[1].classList.add('bright');
    }
    else if (townArray[2].classList.contains('usa-img')) {
        clearTownContainer();
        cirlce_button[2].classList.add('bright');
    }
    else if (townArray[2].classList.contains('spain-img')) {
        clearTownContainer();
        cirlce_button[0].classList.add('bright');
    }
}

sliderContainer.addEventListener('click', (event) => {
    if (checkFlagClick) {
        //console.log('in click event', townID);
        const townArray = Array.from(document.querySelectorAll('.town-container'));
        townID = townArray.indexOf(event.target);
    }
    if (townID != 3 || townID != 1)
        sliderContainer.addEventListener('click', clickSlideHandler);
});

sliderContainer.addEventListener('click', clickSlideHandler);

sliderContainer.addEventListener('transitionend', (eventTransition) => {
    //console.log('in transitionend event', townID);
    const mediaQuery = window.matchMedia('(max-width: 425px)')
    if (!mediaQuery.matches) {
        sliderMoveHandler(townID);
        sliderContainer.addEventListener('click', clickSlideHandler);
        checkFlagClick = true;
    }
})


//color = window.getComputedStyle(element).backgroundColor;//получить стиль из css

