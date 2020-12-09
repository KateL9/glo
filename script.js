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

const AppData = function() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
};

AppData.prototype.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

AppData.prototype.start = function() {
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getIncomeMonth();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();

    this.showResult();
    this.disableinputs();
};

AppData.prototype.showResult = function() {
    const _this = this;
    budgetMonthVal.value = this.budgetMonth;
    budgetDayVal.value = this.budgetDay;
    expensesMonthVal.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonth.value = this.getTargetMonth();
    incomePeriodVal.value = this.calcPeriod();
    periodSelect.addEventListener('input', function() {
        incomePeriodVal.value = _this.calcPeriod();
    });

};
AppData.prototype.addExpensesBlock = function() {

    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.childNodes[1].value = '';
    cloneExpensesItem.childNodes[3].value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length == 3) {
        expensesPlus.style.display = 'none';
    }
};

AppData.prototype.getExpenses = function() {
    const _this = this;
    expensesItems.forEach(function(item) {
        let itemExpense = item.querySelector('.expenses-title').value;
        let cashExpense = item.querySelector('.expenses-amount').value;
        if (itemExpense !== '' && cashExpense !== '') {
            _this.expenses[itemExpense] = Number(cashExpense);
        }
    });
};
AppData.prototype.addIncomeBlock = function() {

    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.childNodes[1].value = '';
    cloneIncomeItem.childNodes[3].value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length == 3) {
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.getIncome = function() {
    const _this = this;
    incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = Number(cashIncome);
        }
    })
};
AppData.prototype.getAddExpenses = function() {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
        item = item.trim();
        if (item !== '') {
            _this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function() {
    const _this = this;
    additionalIncomeItems.forEach(function(item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            _this.addIncome.push(itemValue);
        }
    })
};
AppData.prototype.getExpensesMonth = function() {

    for (let key in this.expenses) {
        this.expensesMonth += this.expenses[key];
    }
};
AppData.prototype.getIncomeMonth = function() {

    for (let key in this.income) {
        this.incomeMonth += this.income[key];
    }
};
AppData.prototype.getBudget = function() {
    this.budgetMonth = +this.budget + Number(this.incomeMonth) - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function() {
    let res = Math.round(targetAmount.value / this.budgetMonth);
    if (!isFinite(res) || res < 0) {
        alert('Неверный ввод!');
        return res = 0;
    } else {
        return res;
    }
};
AppData.prototype.changeRange = function() {
    periodAmount.innerHTML = periodSelect.value;
};
AppData.prototype.calcPeriod = function() {

    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.disableinputs = function() {
    if (salaryAmount.value) {
        start.hidden = true;
        cancel.style.display = 'block';
        [...document.querySelectorAll('section.main input[type=text]')].forEach(function(el) {
            el.disabled = true;
        });
    }
};
AppData.prototype.reset = function() {
    [...document.querySelectorAll('section.main input[type=text]')].forEach(function(el) {
        el.value = ''
        el.disabled = false;
    });
    cancel.style.display = 'none'
    start.hidden = false;

    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    periodSelect.value = 1;
    periodAmount.innerHTML = 1;
};

const appData = new AppData;
console.log(appData);


AppData.prototype.addEventListeners = function() {
    start.addEventListener('click', appData.start.bind(appData));
    cancel.addEventListener('click', appData.reset.bind(appData));
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
}

AppData.prototype.addEventListeners();