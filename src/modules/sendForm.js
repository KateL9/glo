const sendForm = (idform) => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро свяжемся с вами!';

    const form = document.getElementById(idform);

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    statusMessage.style.color = '#fff';

    form.addEventListener('submit', (event) => {
        setData(event, form);
    });

    const setData = (event, form) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        const clearInputs = () => {
            form.reset();
            const animation = () => {
                const popup = document.querySelector('.popup'),
                    popupContent = document.querySelector('.popup-content');
                let start = Date.now();
                setTimeout(function() {
                    statusMessage.textContent = '';
                }, 1000);
                setTimeout(function() {
                    let timePassed = Date.now() - start;
                    popupContent.style.left = timePassed * 3 + 'px';
                    popup.style.display = 'none';
                }, 2000);
            }
            animation();
        }
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200')
                }
                statusMessage.textContent = successMessage;
                clearInputs();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });
    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    };
};

export default sendForm;