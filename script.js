'use strict';

const start = document.getElementById('start'),
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
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    cancel = document.querySelector('#cancel');

let incomeItems = document.querySelectorAll('.income-items'),
    expensesItems = document.querySelectorAll('.expenses-items');

class AppData {
    constructor() {
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
    }
    isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

    start = () => {
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
    }
    showResult = () => {
        const _this = this;
        budgetMonthVal.value = this.budgetMonth;
        budgetDayVal.value = this.budgetDay;
        expensesMonthVal.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonth.value = this.getTargetMonth();
        incomePeriodVal.value = this.calcPeriod();
        periodSelect.addEventListener('input', () => {
            incomePeriodVal.value = _this.calcPeriod();
        });
    }
    addExpensesBlock = () => {

        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        cloneExpensesItem.childNodes[1].value = '';
        cloneExpensesItem.childNodes[3].value = '';
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length == 3) {
            expensesPlus.style.display = 'none';
        }
    }
    getExpenses = () => {
        const _this = this;
        expensesItems.forEach(
            (item) => {
                const itemExpense = item.querySelector('.expenses-title').value;
                const cashExpense = item.querySelector('.expenses-amount').value;
                if (itemExpense !== '' && cashExpense !== '') {
                    _this.expenses[itemExpense] = Number(cashExpense);
                }
            });
    }
    addIncomeBlock = () => {

        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        cloneIncomeItem.childNodes[1].value = '';
        cloneIncomeItem.childNodes[3].value = '';
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length == 3) {
            incomePlus.style.display = 'none';
        }
    }
    getIncome = () => {
        const _this = this;
        incomeItems.forEach(
            (item) => {
                const itemIncome = item.querySelector('.income-title').value;
                const cashIncome = item.querySelector('.income-amount').value;
                if (itemIncome !== '' && cashIncome !== '') {
                    _this.income[itemIncome] = Number(cashIncome);
                }
            });
    }
    getAddExpenses = () => {
        const _this = this;
        const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(
            (item) => {
                item = item.trim();
                if (item !== '') {
                    _this.addExpenses.push(item);
                }
            });
    }
    getAddIncome = () => {
        const _this = this;
        additionalIncomeItems.forEach(
            (item) => {
                const itemValue = item.value.trim();
                if (itemValue !== '') {
                    _this.addIncome.push(itemValue);
                }
            });
    }
    getExpensesMonth = () => {

        for (let key in this.expenses) {
            this.expensesMonth += this.expenses[key];
        }
    }
    getIncomeMonth = () => {

        for (let key in this.income) {
            this.incomeMonth += this.income[key];
        }
    }
    getBudget = () => {
        this.budgetMonth = +this.budget + Number(this.incomeMonth) - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
    getTargetMonth = () => {
        let res = Math.round(targetAmount.value / this.budgetMonth);
        if (!isFinite(res) || res < 0) {
            alert('Неверный ввод!');
            return res = 0;
        } else {
            return res;
        }
    }
    changeRange = () => {
        periodAmount.innerHTML = periodSelect.value;
    }
    calcPeriod() {
        return this.budgetMonth * periodSelect.value;
    }
    disableinputs = () => {
        if (salaryAmount.value) {
            start.hidden = true;
            cancel.style.display = 'block';
            [...document.querySelectorAll('section.main input[type=text]')].forEach((el) => {
                el.disabled = true;
            });
        }
    }
    reset = () => {
        [...document.querySelectorAll('section.main input[type=text]')].forEach((el) => {
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
    }
    addEventListeners = () => {
        start.addEventListener('click', appData.start.bind(appData));
        cancel.addEventListener('click', appData.reset.bind(appData));
        expensesPlus.addEventListener('click', this.addExpensesBlock);
        incomePlus.addEventListener('click', this.addIncomeBlock);
        periodSelect.addEventListener('input', this.changeRange);

        const main = document.querySelector('.main');
        main.addEventListener('input', (e) => {
            if (e.target.placeholder === "Наименование") {
                e.target.value = e.target.value.replace(/[^а-яё\s,.!:;'-]/i, '');
            } else if (e.target.placeholder === "Сумма") {
                e.target.value = e.target.value.replace(/[^\d]/g, '');
            }
        });
    }
};

const appData = new AppData;
appData.addEventListeners();
