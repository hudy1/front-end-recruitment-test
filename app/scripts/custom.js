function simpleValidation() {
    const form = document.querySelector('.form');
    const submitBtn = form.querySelector('.form__submit');
    const message = form.querySelector('.form__message');
    const inputs = Array.from(form.querySelectorAll('.form_validate'));

    const validate = () => {
        const isValid = inputs.every((input) => input.checkValidity());
        message.classList.toggle('form__message--valid', isValid);
        message.classList.toggle('form__message--invalid', !isValid);
        const text = isValid ? 'Pysznie! Wszystko działa' : 'Ojej, coś popsuto';
        message.innerHTML = text;
    }

    form.addEventListener('submit', (e) => e.preventDefault());
    submitBtn.addEventListener('click', validate);
}

document.addEventListener('DOMContentLoaded', simpleValidation); 