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
        let addExpenses = prompt('Enter your possible expenses for the calculated period, separated by comma', '');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Do you have any deposits?', false);
        for (let i = 0; i < 2; i++) {
            let question = prompt('Enter required expense (string)');
            let answer = +prompt('How much does it cost? (number)');
            while (!answer) {
                answer = +prompt('How much does it cost? (number)');
            };
            appData.expenses[question] = answer;
        };
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


//    Используя цикл for in для объекта (appData), вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести все свойства и значения)