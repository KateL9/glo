    // Popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                if (document.documentElement.clientWidth > 768) {
                    let start = Date.now();
                    let timer = setInterval(function() {
                        let timePassed = Date.now() - start;
                        popup.style.display = 'block';
                        popupContent.style.left = timePassed * 2 + 'px';
                        if (timePassed >= 300) {
                            clearInterval(timer);
                        }
                    }, 20);
                } else {
                    popup.style.display = 'block';
                }
            });

            popup.addEventListener('click', (event) => {
                let target = event.target;
                if (target.classList.contains('popup-close')) {
                    popup.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');
                    if (!target) {
                        popup.style.display = 'none';
                    }
                }
            });
        });
    };

    export default togglePopUp;