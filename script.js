/*Кнопку "Рассчитать"
через id
Кнопки“ + ”(плюс) через Tag, каждую в своей переменной.
Чекбокс по id через querySelector
Поля для ввода возможных доходов(additional_income - item) при помощи querySelectorAll
Каждый элемент в правой части программы через класс(не через querySelector), 
которые имеют в имени класса "-value", начиная с class = "budget_day-value"
и заканчивая class = "target_month-value" >
    Оставшиеся поля через querySelector каждый в отдельную переменную:
    поля ввода(input) с левой стороны и не забудьте про range.*/

let calculate = document.getElementById('start'),
    firstPlus = document.getElementsByTagName('button')[0],
    secondPlus = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('.deposit-checkmark'),
    additionalIncome1 = document.querySelectorAll('.additional_income-item')[0],
    additionalIncome2 = document.querySelectorAll('.additional_income-item')[1],
    budgetMmonth = document.getElementsByClassName('budget_month-value'),
    budgetDay = document.getElementsByClassName('budget_day-value'),
    expensesMonth = document.getElementsByClassName('expenses_month-value'),
    additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
    incomePeriod = document.getElementsByClassName('income_period-value'),
    targetMonth = document.getElementsByClassName('target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    period = document.querySelector('.period-select');