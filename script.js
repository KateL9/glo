'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    start = function() {
        do {
            money = prompt('What is your month income?');
        } while (!isNumber(money));
    };
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function() {
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        let res = Math.ceil(appData.mission / appData.budgetMonth);
        if (!isFinite(res) || res < 0) {
            return 'The goal will not be achieved';
        } else {
            return 'The goal will be achieved in ' + res;
        }
    },
    getStatusIncome: function(budgetDay) {
        if (appData.budgetDay < 600 && appData.budgetDay > 0) {
            return ('Unfortunately your income is below average');
        } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
            return ('Your income is avarage');
        } else if (appData.budgetDay > 1200) {
            return ('Your income is high');
        } else if (appData.budgetDay <= 0) {
            return;
        } else {
            return ('Something goes wrong!');
        }
    },
    asking: function() {

        if (confirm('Есть ли у вас дополнительный источник зароботка?')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Такси');
            while (isNumber(itemIncome)) {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Такси');
            };
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            while (!isNumber(cashIncome)) {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Enter your possible expenses for the calculated period, separated by comma', '');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Do you have any deposits?', false);
        for (let i = 0; i < 2; i++) {
            let itemExpenses = prompt('Enter required expense (string)');

            while (isNumber(itemExpenses)) {
                itemExpenses = prompt('Enter required expense (string)');
            };

            let cashExpenses = +prompt('How much does it cost? (number)');

            while (!cashExpenses) {
                cashExpenses = +prompt('How much does it cost? (number)');
            };
            appData.expenses[itemExpenses] = cashExpenses;
        };
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            while (!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            };
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            };
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
}

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log(` Расходы за месяц ${appData.expensesMonth}`, '\n',
    appData.getTargetMonth(), '\n',
    appData.getStatusIncome());
console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key + ' : ' + appData[key])
};
appData.getInfoDeposit();
appData.calcSavedMoney();

/*Возможные расходы (addExpenses) вывести строкой в консоль каждое слово с большой буквы слова разделены запятой и пробелом*/
for (let i = 0; i <= appData.addExpenses.length - 1; i++) {
    let str = appData.addExpenses[i];
    appData.addExpenses[i] = str[0].charAt(0).toUpperCase() + str.slice(1);
}
console.log(appData.addExpenses);