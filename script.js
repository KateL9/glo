let money = 2000,
    income = 'freelance',
    addExpenses = 'HealTH, Taxes, Courses, gYm, English',
    deposit = false,
    mission = 40000,
    period = 2;
//Вывести в консоль тип данных значений переменных money, income, deposit;
console.log('money - ' + typeof(money) + ', ' + 'income - ' + typeof(income) + ', ' + 'deposit - ' + typeof(deposit));
//Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);
//Вывести в консоль“ Период равен(period) месяцев” и“ Цель заработать(mission) рублей / долларов / гривен / юани” ;
console.log(`Period is equal to ${period} months and Goal is to earn ${mission}$`);
//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль;
console.log(addExpenses.toLocaleLowerCase().split());
//Объявить переменную budgetDay и присвоить дневной бюджет(доход за месяц / 30). Вывести в консоль budgetDay;
let budgetMonth = 2000;
let budgetDay = Math.round(budgetMonth / 30);
console.log(budgetDay);