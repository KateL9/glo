    // Calculator
    const calc = (price = 100) => {
        // Validation of the calculator 
        const numberValidation = () => {
            const calculatorBlock = document.querySelector('.calc-block');
            calculatorBlock.addEventListener('input', (event) => {
                if (event.target.tagName == 'INPUT') {
                    event.target.value = event.target.value.replace(/\D/g, '');
                }
            })
        }
        numberValidation();

        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5
            }

            if (typeValue && squareValue) {
                total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
            }

            totalValue.textContent = total;

            if (!calcType.options[calcType.selectedIndex].value) {
                total = 0;
                calcSquare.value = '';
                calcCount.value = '';
                calcDay.value = '';
            }

        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum();
            }
        })
    };

    export default calc;