'use strict';

let start = document.getElementById('start'),
    incomePlus = document.querySelector('.income_add'),
    expensesPlus = document.querySelector('.expenses_add'),
    checkbox = document.querySelector('.deposit-checkmark'),
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
    budgetMonthVal = document.querySelector('.budget_month-value'),
    budgetDayVal = document.querySelector('.budget_day-value'),
    expensesMonthVal = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodVal = document.querySelector('.income_period-value'),
    targetMonth = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    cancel = document.querySelector('#cancel'),
    allInputs = document.querySelectorAll('input[type=text]');

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function() {
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();

        this.showResult();
        this.disableinputs();
    },
    showResult: function() {

        budgetMonthVal.value = this.budgetMonth;
        budgetDayVal.value = this.budgetDay;
        expensesMonthVal.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonth.value = this.getTargetMonth();
        incomePeriodVal.value = this.calcPeriod();
        periodSelect.addEventListener('input', function() {
            incomePeriodVal.value = appData.calcPeriod();
        });

    },
    addExpensesBlock: function() {

        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        cloneExpensesItem.childNodes[1].value = '';
        cloneExpensesItem.childNodes[3].value = '';
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length == 3) {
            expensesPlus.style.display = 'none';
        }
    },

    getExpenses: function() {

        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = Number(cashExpenses);
            }
        });
    },
    addIncomeBlock: function() {

        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        cloneIncomeItem.childNodes[1].value = '';
        cloneIncomeItem.childNodes[3].value = '';
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length == 3) {
            incomePlus.style.display = 'none';
        }
    },
    getIncome: function() {

        incomeItems.forEach(function(item) {
            let itemIncome = document.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        })
    },
    getAddExpenses: function() {

        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {

        additionalIncomeItems.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        })
    },
    getExpensesMonth: function() {

        for (let key in this.expenses) {
            this.expensesMonth += this.expenses[key];
        }
    },
    getBudget: function() {

        this.budgetMonth = +this.budget + Number(this.incomeMonth) - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getTargetMonth: function() {

        let res = Math.round(targetAmount.value / this.budgetMonth);
        if (!isFinite(res) || res < 0) {
            alert('Неверный ввод!');
            return res = 0;
        } else {
            return res;
        }
    },
    changeRange: function() {
        periodAmount.innerHTML = periodSelect.value;
    },
    calcPeriod: function() {

        return this.budgetMonth * periodSelect.value;
    },
    disableinputs: function() {
        if (salaryAmount.value) {
            start.hidden = true;
            cancel.style.display = 'block';
            allInputs.forEach(function(item) {
                item = item.disabled = true;
            });
        }
    },
    reset: function() {
        [...document.querySelectorAll('section.main input[type=text]')].forEach(el => el.value = '');
        cancel.style.display = 'none'
        start.hidden = false;
        allInputs.forEach(function(item) {
            item = item.disabled = false;
        });
        appData.income = {};
        appData.incomeMonth = 0;
        appData.addIncome = [];
        appData.expenses = {};
        appData.addExpenses = [];
        appData.deposit = false;
        appData.percentDeposit = 0;
        appData.moneyDeposit = 0;
        appData.budget = 0;
        appData.budgetDay = 0;
        appData.budgetMonth = 0;
        appData.expensesMonth = 0;
        periodSelect.value = 1;
        periodAmount.innerHTML = 1;
    }
};
let connection = appData.start.bind(appData);

start.addEventListener('click', connection);
cancel.addEventListener('click', appData.reset);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.changeRange);

let main = document.querySelector('.main');
main.addEventListener('input', function(e) {
    if (e.target.placeholder === "Наименование") {
        e.target.value = e.target.value.replace(/[^а-яё\s,.!:;'-]/i, '');
    } else if (e.target.placeholder === "Сумма") {
        e.target.value = e.target.value.replace(/[^\d]/g, '');
    }
});