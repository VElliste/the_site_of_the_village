
// скрипт для слайдера

let slideIndex =1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-item");
    let dots = document.getElementsByClassName("dot");

    if (n>slides.length) {
        slideIndex=1;
    }
    if(n<1) {
        slideIndex=slides.length;
    }
    for (i=0;i<slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i=0;i<dots.length;i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
}

// маска для номера телефона

document.addEventListener('DOMContentLoaded', function () {
    let phoneInput = document.getElementById('phone');
    let phoneMask = new Inputmask('+7 (999) 999-99-99');
    phoneMask.mask(phoneInput);
});
/*    let form = document.getElementById('callForm');
    form.addEventListener('submit', function (event) {
        if (phoneInput.value.length !== phoneMask.maskLength) {
            event.preventDefault();
            alert('Пожалуйста, введите полный номер телефона.');
        }
    });

    phoneInput.addEventListener('blur', function () {
        if (!phoneMask.isComplete()) {
            phoneInput.classList.add('invalid');
        } else {
            phoneInput.classList.remove('invalid');
        }
    });
});
*/


//отправка с формы

function sendToBot() {
    let nameUserInput = document.getElementById("name");
    let nameUser = nameUserInput.value;
    let phoneInput = document.getElementById("phone");
    let phone = phoneInput.value;

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`https://api.telegram.org/bot5899121449:AAGAFlOoaowxRyUbwDjyHJlT7gsRPvRvcWE/sendMessage?chat_id=-851516413&text=${nameUser}, ${phone}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
