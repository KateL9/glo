const validation = () => {
    document.body.addEventListener('input', (event) => {
        let target = event.target;
        if (target.tagName === 'INPUT' && target.name == 'user_name') {

            target.value = target.value.replace(/[^а-я\s]/gi, "");

        } else if (target.tagName === 'INPUT' && target.name == 'user_phone') {
            target.setAttribute('maxLength', 13);
            target.value = target.value.replace(/[^+\d$]/, "");

        } else if (target.tagName === 'INPUT' && target.name == 'user_message') {

            target.value = target.value.replace(/[^а-яёА-ЯЁ\s\,\.\!\?\-]/gi, "");

        } else if (target.tagName === 'INPUT' && target.name == 'user_email') {

            target.value = target.value.replace(/[^a-z-0-9@.\s]/i, "")

        }
    })
};

export default validation;