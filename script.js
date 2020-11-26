let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    income = 'freelance',
    addExpenses = 'HealTH, Taxes, Courses, gYm, English',
    deposit = false,
    mission = 40000,
    period = 2;

// Переписать функцию start циклом do while

let start = function() {
    do {
        money = prompt('What is your month income?');
    } while (!isNumber(money));
};
start();

addExpenses = prompt('Enter your possible expenses for the calculated period, separated by comma', '');

deposit = confirm('Do you have any deposits?', false);


let expenses = [],
    result = 0;
//сумма всех обязательных расходов за месяц
const getExpensesMonth = function() {
    let sum = [];
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Enter required expense (string)');
        sum[i] = prompt('How much does it cost? (number)');
        //Проверку что введённые данные являются числом
        while (!isNumber(sum[i])) {
            sum[i] = prompt('How much does it cost? (number)');
        };
        result += +sum[i];
    };
    console.log(expenses);
    return result;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

//Доходы минус расходы
const getAccumulatedMonth = function() {
    result = money - expensesAmount;
    return result;
};

//результат вызова функции getAccumulatedMonth (сумма всех обязательных расходов за месяц)
const accumulatedMonth = getAccumulatedMonth();

//Подсчитывает за какой период будет достигнута цель
const getTargetMonth = function(mission, accumulatedMonth) {
    let res = Math.ceil(mission / accumulatedMonth);
    if (!isFinite(res) || res < 0) {
        return 'The goal will not be achieved';
    } else {
        return 'The goal will be achieved in ' + res;
    }
}

const budgetDay = Math.floor(accumulatedMonth / 30);

//функция getStatusIncome
const getStatusIncome = function(budgetDay) {
    if (budgetDay < 600 && budgetDay >= 0) {
        return ('Unfortunately your income is below average');
    } else if (budgetDay >= 600 && budgetDay <= 1200) {
        return ('Your income is avarage');
    } else if (budgetDay > 1200) {
        return ('Your income is high');
    } else {
        return ('Something goes wrong!');
    }
};

const showTypeOf = function(money, income, deposit) {
    console.log('money - ' + typeof(money) + ', ' + 'income - ' + typeof(income) + ', ' + 'deposit - ' + typeof(deposit));
}

function outputs() {
    //вызовы функции showTypeOf
    console.log(showTypeOf(money, income, deposit));
    //Расходы за месяц вызов getExpensesMonth
    //console.log('Расходы за месяц', getExpensesMonth(amount1, amount2));
    //Вывод возможных расходов в виде массива (addExpenses)
    console.log(addExpenses.toLocaleLowerCase().split());
    //Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
    console.log(getTargetMonth(mission, accumulatedMonth));
    if (budgetDay > 0) {
        //Бюджет на день (budgetDay)
        console.log(`budgetDay ${budgetDay}`);
        //вызов функции getStatusIncome
        console.log(getStatusIncome(budgetDay));
    }
};
outputs();