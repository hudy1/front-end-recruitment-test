function cloneBacon() {
    const baconContainer = document.querySelector('.baconContainer');
    const imgToClone = baconContainer.querySelector('img');
    const cloned = imgToClone.cloneNode();
    baconContainer.appendChild(cloned);
}

function simpleValidation(e) {
    const form = document.querySelector('.form');
    const message = form.querySelector('.form__message');
    const inputs = Array.from(form.querySelectorAll('.form_validate'));
    const isValid = inputs.every((input) => input.checkValidity());
    message .classList.toggle('form__message--valid', isValid);
    message .classList.toggle('form__message--invalid', !isValid);
    const text = isValid ? 'Pysznie! Wszystko działa' : 'Ojej, coś popsułeś';
    message.innerHTML = text;
}


function init() {
    document.querySelector('.baconTrigger').addEventListener('click', cloneBacon);
    document.querySelector('.form__submit').addEventListener('click', simpleValidation);
}

document.addEventListener('DOMContentLoaded', init);