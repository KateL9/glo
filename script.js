let money = 2000,
    income = 'freelance',
    addExpenses = 'HealTH, Taxes, Courses, gYm, English',
    deposit = false,
    mission = 40000,
    period = 2;

//Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
money = prompt('What is your month income?', '');

//Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” //
addExpenses = prompt('Enter your possible expenses for the calculated period, separated by comma', '');

//Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
deposit = confirm('Do you have any deposits?', false);

/* 
1.“Введите обязательную статью расходов?” 
2.“Во сколько это обойдется?” (например amount1, amount2)
*/
let expenses1 = prompt('Enter required expense item1 (string)', ''),
    expenses2 = prompt('Enter required expense item2 (string)', ''),
    amount1 = +prompt('How much does expense item1 cost? (number)', '0'),
    amount2 = +prompt('How much does expense item2 cost? (number)', '0');

//сумма всех обязательных расходов за месяц
const getExpensesMonth = function(amount1, amount2) {
    return amount1 + amount2;
};

//Доходы минус расходы
const getAccumulatedMonth = function(money, expenses) {
    result = money - expenses;
    return result;
};

//результат вызова функции getAccumulatedMonth 
const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));

//Подсчитывает за какой период будет достигнута цель
const getTargetMonth = function(mission, accumulatedMonth) {
    let res = Math.ceil(mission / accumulatedMonth);
    return res;
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

//вызовы функции showTypeOf
console.log(showTypeOf(money, income, deposit));
//Расходы за месяц вызов getExpensesMonth
console.log('Расходы за месяц', getExpensesMonth(amount1, amount2));
//Вывод возможных расходов в виде массива (addExpenses)
console.log(addExpenses.toLocaleLowerCase().split());
//Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
console.log('The goal will be achieved in ', getTargetMonth(mission, accumulatedMonth));
//Бюджет на день (budgetDay)
console.log(`budgetDay ${budgetDay}`);
//вызов функции getStatusIncome
console.log(getStatusIncome(budgetDay));