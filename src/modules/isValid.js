const isValid = () => {
    document.body.addEventListener('focusout', (event) => {
        let target = event.target;
        if (target.name == 'user_phone') {
            target.style.border = 'none';
            target.setCustomValidity('');
            if (target.value.length < 7) {
                target.setCustomValidity("Введите от 7 до 13 цифр, включая +");
                target.value = '';
                target.style.border = `3px solid red`
            }
        } else if (target.name == 'user_email') {
            const regExp = /^\w+@\w+\.\w{2,}$/;
            target.style.border = 'none';
            target.setCustomValidity('');
            if (regExp.test(target.value) === false) {
                target.setCustomValidity("Введите корректный e-mail");
                target.value = '';
                target.style.border = `2px solid red`
            }
        } else if (target.name == 'user_name') {
            target.style.border = 'none';
            target.setCustomValidity('');
            if (target.value.length <= 2) {
                target.setCustomValidity("Введите от 2х букв");
                target.value = '';
                target.style.border = `2px solid red`
            }
        }
    })
};

export default isValid;