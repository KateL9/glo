const isValid = () => {
    document.body.addEventListener('focusout', (event) => {
        let target = event.target;
        if (target.name == 'user_phone') {
            if (target.value.length < 7) {
                alert("Введите от 7 до 13 цифр, включая +");
            }
        } else if (target.name == 'user_email') {
            const regExp = /^\w+@\w+\.\w{2,}$/;
            if (regExp.test(target.value) === false) {
                alert("Введите корректный e-mail");
            }
        }
    })
};

export default isValid;